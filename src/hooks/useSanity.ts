import { useState, useEffect } from 'react';
import { client } from '../lib/sanity';

interface SanityQueryResult<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}

export function useSanityQuery<T = any>(
    query: string,
    params?: Record<string, unknown>
): SanityQueryResult<T> {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;

        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const result = await client.fetch<T>(query, params || {});
                if (!cancelled) {
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
