import Link from "next/link";

export default function Header() {
  const navItems = [
    {
      label: "Health",
      href: "/health",
    },
    {
      label: "Finance",
      href: "/finance",
    },
    {
      label: "Business",
      href: "/business",
    },
    {
      label: "Math",
      href: "/math",
    },
    {
      label: "Fitness",
      href: "/fitness",
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 transition hover:opacity-90"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black text-lg font-bold text-white shadow-sm">
            C
          </div>

          <div>
            <h1 className="text-lg font-bold leading-none text-black">
              Calculator Hub
            </h1>

            <p className="mt-1 text-xs text-gray-500">
              Fast Online Tools
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-gray-700 transition hover:text-black hover:underline"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-3">
          <button className="hidden rounded-xl border border-gray-300 px-5 py-2 text-sm font-medium text-black transition hover:bg-gray-100 sm:flex">
            Sign In
          </button>

          <button className="rounded-xl bg-black px-5 py-2 text-sm font-semibold text-white transition hover:bg-gray-800">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}