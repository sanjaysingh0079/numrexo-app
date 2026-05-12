import type { ReactNode } from "react";
import Breadcrumbs, { type BreadcrumbItem } from "@/components/shared/Breadcrumbs";

interface CalculatorPageLayoutProps {
  breadcrumbs: BreadcrumbItem[];
  title: string;
  tagline?: string;
  children: ReactNode;
}

export default function CalculatorPageLayout({
  breadcrumbs,
  title,
  tagline,
  children,
}: CalculatorPageLayoutProps) {
  return (
    <>
      <section
        aria-labelledby="calculator-heading"
        className="border-b border-gray-200 bg-white"
      >
        <div className="max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10 lg:py-12">
          <div className="space-y-4 sm:space-y-5">
            <Breadcrumbs items={breadcrumbs} />
            <div>
              <h1
                id="calculator-heading"
                className="text-3xl sm:text-4xl font-bold tracking-tight text-black"
              >
                {title}
              </h1>
              {tagline ? (
                <p className="mt-3 text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl">
                  {tagline}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <main className="grow bg-linear-to-b from-gray-50/80 to-white min-h-[50vh]">
        <div className="max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-14">
          {children}
        </div>
      </main>
    </>
  );
}
