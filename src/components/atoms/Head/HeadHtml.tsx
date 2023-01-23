import NextHead from 'next/head';
import { NEBULA_WEBSITE_LINK } from '@/src/constants/routes';

type RobotsInstruction = 'index' | 'noindex' | 'follow' | 'nofollow' | 'all' | 'none';

export interface IHeadProps {
  title: string;
  description: string;
  robots?: RobotsInstruction[];
  url: string;
}

function HtmlHead({
  title,
  description,
  robots,
  url
}: IHeadProps) {
  return (
    <NextHead>
      <meta charSet="utf-8" />
      <meta name="author" content="Obrio" />

      <title>{title}</title>

      <meta name="description" content={description} />

      <meta property="og:url" content={`${NEBULA_WEBSITE_LINK}${url}`} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={title} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/images/og-image.png" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={`${NEBULA_WEBSITE_LINK}${url}`} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image:src" content="/images/og-image.png" />

      <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png" />
      <link rel="mask-icon" href="/images/favicon/safari-pinned-tab.svg" color="#24244f" />
      <meta name="application-name" content="Ask Nebula" />
      <meta name="theme-color" content="#24244f" />

      {!!robots?.length && <meta name="robots" content={robots.join(',')} />}
    </NextHead>
  );
}

export default HtmlHead;
