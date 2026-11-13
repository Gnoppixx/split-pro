import { type GetStaticProps } from 'next';

import { env } from '~/env';

const getSitemapXml = (url: string) => `<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

<url>
  <loc>${url}/home</loc>
  <lastmod>2025-07-25T08:31:47+00:00</lastmod>
  <priority>1.00</priority>
</url>
<url>
  <loc>${url}/terms</loc>
  <lastmod>2025-07-25T08:31:47+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>${url}/privacy</loc>
  <lastmod>2025-07-25T08:31:47+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>${url}/auth/signin</loc>
  <lastmod>2025-07-25T08:31:47+00:00</lastmod>
  <priority>0.80</priority>
</url>

</urlset>`;

export const getStaticProps: GetStaticProps = async () => {
  const sitemap = getSitemapXml(env.NEXTAUTH_URL);
  return {
    props: {
      sitemap,
    },
  };
};

const Sitemap = ({ sitemap }: { sitemap: string }) => {
  return <>{sitemap}</>;
};
export default Sitemap;
