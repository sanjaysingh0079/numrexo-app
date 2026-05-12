import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="text-sm text-gray-600 overflow-x-auto pb-1 -mx-1 px-1"
    >
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 min-w-0">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2 shrink-0">
              {index > 0 && (
                <span aria-hidden className="text-gray-400 select-none">
                  /
                </span>
              )}
              {!isLast && item.href ? (
                <Link
                  href={item.href}
                  className="hover:text-black transition-colors whitespace-nowrap"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={`whitespace-nowrap ${isLast ? "font-medium text-black truncate max-w-[min(100vw-8rem,12rem)] sm:max-w-none" : ""}`}
                  {...(isLast ? { "aria-current": "page" as const } : {})}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
