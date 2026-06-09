import { Studio } from 'sanity';
import config from '@/../sanity.config';

/**
 * Sanity Studio page — rendered in complete isolation from the main app shell.
 * No Navigation, Footer, Background canvas, or noise overlay to avoid
 * CSS conflicts and performance issues.
 */
export default function StudioPage() {
    return (
        <div
            id="sanity-studio"
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 100,
                background: '#fff',
            }}
        >
            <Studio config={config} />
        </div>
    );
}
