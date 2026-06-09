import { useState, useEffect } from 'react';
import { client } from '@/shared/services/sanity/client';

interface SanityQueryResult<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}

// In-memory query cache to avoid repetitive network fetches on page re-mounts
const queryCache = new Map<string, { data: any; timestamp: number }>();
const FRESH_TTL = 30000; // 30 seconds cache fresh TTL

export function useSanityQuery<T = any>(
    query: string,
    params?: Record<string, unknown>
): SanityQueryResult<T> {
    const cacheKey = `${query}_${JSON.stringify(params || {})}`;
    const cachedEntry = queryCache.get(cacheKey);

    const [data, setData] = useState<T | null>(cachedEntry ? cachedEntry.data : null);
    const [loading, setLoading] = useState(!cachedEntry);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;

        // Skip network fetch if cache is fresh
        if (cachedEntry && (Date.now() - cachedEntry.timestamp < FRESH_TTL)) {
            setLoading(false);
            return;
        }

        const fetchData = async () => {
            if (!queryCache.has(cacheKey)) {
                setLoading(true);
            }
            setError(null);

            try {
                const result = await client.fetch<T>(query, params || {});
                if (!cancelled) {
                    queryCache.set(cacheKey, { data: result, timestamp: Date.now() });
                    setData(result);
                }
            } catch (err) {
                if (!cancelled) {
                    setError(err instanceof Error ? err.message : 'Failed to fetch data');
                    console.error('Sanity fetch error:', err);
                }
            } finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        };

        fetchData();

        return () => {
            cancelled = true;
        };
    }, [query, JSON.stringify(params)]);

    return { data, loading, error };
}
