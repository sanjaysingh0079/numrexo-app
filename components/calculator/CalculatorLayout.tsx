type CalculatorLayoutProps = {
  children: React.ReactNode;
};

export default function CalculatorLayout({
  children,
}: CalculatorLayoutProps) {
  return (
    <main className="min-h-screen bg-slate-50 py-3 md:py-10">
      <section className="mx-auto max-w-6xl px-4">
        {children}
      </section>
    </main>
  );
}