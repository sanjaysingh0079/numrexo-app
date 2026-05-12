import type { Metadata } from "next";
import type { CalculatorMeta } from "@/config/calculators";

const siteName = "Calculator Hub";

export function buildCalculatorMetadata(
  meta: CalculatorMeta,
): Metadata {
  const title = `${meta.title} | ${siteName}`;

  return {
    title,
    description: meta.seoDescription,
    keywords: meta.seoKeywords,
    openGraph: {
      title,
      description: meta.seoDescription,
      url: `/calculators/${meta.slug}`,
      siteName,
      locale: "en",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: meta.seoDescription,
    },
    alternates: {
      canonical: `/calculators/${meta.slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
