import { Helmet } from "react-helmet";

export const Meta: Component.Meta = ({ title, description, image, children }) => {
  const appUrl = import.meta.env.VITE_APP_URL;
  const currentUrl = `${appUrl}${window.location.href}`;
  const siteName = "Standings";

  const sliceDescription = (description: string, limit: number) => {
    return `${description.slice(0, limit)}...`;
  };

  return (
    <>
      <Helmet>
        <title>{`${title} | ${siteName}`}</title>
        <link rel="canonical" href={currentUrl} />
        <meta property="description" content={sliceDescription(description, 197)} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content={`${title} | ${siteName}`} />
        <meta property="og:description" content={sliceDescription(description, 197)} />
        <meta property="og:image" content={`${appUrl}${image}`} />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="720" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:site_name" content={siteName} />
      </Helmet>
      {children}
    </>
  );
};
