import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
}

const SITE_NAME = 'Bracecodes Studio';
const DEFAULT_DESC = 'Premium software studio specializing in scalable web architecture, mobile experiences, and enterprise-grade infrastructure.';

const SEO: React.FC<SEOProps> = ({ title, description }) => {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Engineering. Evolved.`;
  const desc = description || DEFAULT_DESC;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
    </Helmet>
  );
};

export default SEO;
