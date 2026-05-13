import { Metadata } from "next";

type SeoProps = {
  title: string;
  description: string;
  path: string;
};

export function generateSeo({
  title,
  description,
  path,
}: SeoProps): Metadata {
  const url = `https://numrixo.com${path}`;

  return {
    title,
    description,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title,
      description,
      url,
      siteName: "Numrixo",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}