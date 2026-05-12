import type { ReactNode } from "react";

/** Server-rendered explainer sections for BMI — semantic headings (no H1; page hero supplies it). */

function ProseParagraph({ children }: { children: ReactNode }) {
  return <p className="text-[15px] sm:text-base leading-relaxed text-gray-600">{children}</p>;
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] sm:text-base leading-relaxed text-gray-600">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

const faqs: { question: string; answer: ReactNode }[] = [
  {
    question: "Is BMI the same calculation for everyone?",
    answer:
      "The numeric formula BMI = kg ÷ m² applies broadly, but interpreting the result differs for children/teens versus adults—and clinical context matters for muscular athletes.",
  },
  {
    question: "Why does BMI not ask for muscle mass?",
    answer:
      "BMI correlates with body mass at a given stature. It intentionally omits composition, making it imperfect for diagnosing body fat—but efficient for screening at population scales.",
  },
  {
    question: "Does sex change my BMI?",
    answer:
      "Sex does not alter the BMI formula itself. Clinicians weigh sex-linked risk factors separately from this single index.",
  },
  {
    question: "Can I rely on BMI if I lift weights?",
    answer:
      "Dense muscle raises weight without implying excess fat resistance. Prefer paired assessments (waist circumference, labs, clinician review).",
  },
  {
    question: "Which BMI thresholds does this calculator use?",
    answer:
      "Adult categorical thresholds follow common WHO-style population cutoffs: underweight <18.5, normal 18.5–24.9, overweight 25–29.9, obese ≥30.",
  },
  {
    question: "How should children interpret BMI?",
    answer:
      "Children and teens require BMI-for-age percentiles (growth charts). Adult cutoffs can misclassify healthy youth—always consult a pediatric clinician.",
  },
];

export function BmiEducationSections() {
  return (
    <article className="max-w-3xl lg:max-w-4xl text-gray-800">
      <header className="mb-12 sm:mb-14">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
          Deep dive
        </p>
        <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-gray-950">
          Understand body mass index
        </h2>
        <ProseParagraph>
          This library of brief, plain-language articles mirrors the structure of
          leading reference calculators: clear definitions, the math, how to
          interpret results, and honest limitations—so you can read once and
          calculate with confidence.
        </ProseParagraph>
      </header>

      <div className="space-y-14 sm:space-y-16">
        <section aria-labelledby="what-is-bmi">
          <h2 id="what-is-bmi" className="text-xl font-bold tracking-tight text-gray-950">
            What is BMI?
          </h2>
          <ProseParagraph>
            Body mass index (BMI) is a unitless ratio that compares your weight to
            the square of your height. Invented nearly two centuries ago and
            refined for twentieth-century epidemiology, it remains a pragmatic
            first-pass marker for adiposity-related health trends—especially useful
            for self-screening—not a bedside diagnostic.
          </ProseParagraph>
        </section>

        <section aria-labelledby="bmi-formula">
          <h2 id="bmi-formula" className="text-xl font-bold tracking-tight text-gray-950">
            BMI formula (metric canonical form)
          </h2>
          <ProseParagraph>
            Internationally BMI is anchored in SI units—even when you measure in
            feet and pounds externally:
          </ProseParagraph>
          <figure className="mt-6 overflow-hidden rounded-2xl border border-gray-200 bg-gray-950 px-6 py-5 text-gray-50 shadow-inner">
            <figcaption className="sr-only">
              Mathematical expression for BMI
            </figcaption>
            <p className="font-mono text-sm sm:text-base tracking-tight text-center tabular-nums">
              BMI = mass<sub className="text-xs">kg</sub> ÷ (
              stature<sub className="text-xs">m</sub>)
              <sup>2</sup>
            </p>
          </figure>
          <BulletList
            items={[
              `Convert height to metres (divide centimetres by 100).`,
              `Ensure weight is in kilograms.`,
              `Square the stature in metres once; divide weight by that squared value.`,
            ]}
          />
        </section>

        <section aria-labelledby="how-calculated">
          <h2 id="how-calculated" className="text-xl font-bold tracking-tight text-gray-950">
            How BMI is calculated in this tool
          </h2>
          <ProseParagraph>
            Feet and pounds are deterministically normalized to metric SI before
            the ratio is evaluated. Feet must be expressed as integer feet plus a
            separate inch field strictly below 12, preventing ambiguous tallies.
            The resulting BMI truncates rounding noise for display purposes only;
            computations keep double-precision floating intermediates internally.
          </ProseParagraph>
        </section>

        <section aria-labelledby="categories-explained">
          <h2 id="categories-explained" className="text-xl font-bold tracking-tight text-gray-950">
            BMI categories explained
          </h2>
          <ProseParagraph>
            Standard adult categorical labels describe population-level risk strata.
            Crossing a threshold prompts discussion—not automatic disease labels.
          </ProseParagraph>
          <BulletList
            items={[
              "Underweight: BMI under 18.5 may reflect malnutrition risk or unintended weight loss deserving clinical context.",
              "Normal weight (healthy range): BMI 18.5 up to—but not including—25 for many adult screening programs.",
              "Overweight: BMI 25–29.9 often prompts lifestyle review paired with cardiometabolic markers.",
              "Obesity: BMI 30 or above stratifies escalating collaboration on prevention and intervention paths.",
            ]}
          />
        </section>

        <section aria-labelledby="seo-bmi-chart">
          <h2 id="seo-bmi-chart" className="text-xl font-bold tracking-tight text-gray-950">
            BMI chart
          </h2>
          <ProseParagraph>
            Reference adult screening chart (WHO-style banding). Pediatric readers
            should ignore adult cut-offs and defer to percentile tables.
          </ProseParagraph>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full min-w-[28rem] text-left text-sm text-gray-700">
              <caption className="sr-only">
                BMI category reference chart for adults
              </caption>
              <thead className="bg-gray-950 text-white">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    BMI range
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Category
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Quick note
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                <tr>
                  <th scope="row" className="px-4 py-3 font-medium text-gray-900">
                    &lt; 18.5
                  </th>
                  <td className="px-4 py-3">Underweight</td>
                  <td className="px-4 py-3">
                    Nutritional resilience &amp; related medical review
                  </td>
                </tr>
                <tr className="bg-emerald-50/40">
                  <th scope="row" className="px-4 py-3 font-medium text-gray-900">
                    18.5 – 24.9
                  </th>
                  <td className="px-4 py-3">Healthy / normal weight</td>
                  <td className="px-4 py-3">
                    Lowest general population adiposity-associated risk strata
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="px-4 py-3 font-medium text-gray-900">
                    25.0 – 29.9
                  </th>
                  <td className="px-4 py-3">Overweight</td>
                  <td className="px-4 py-3">
                    Opportunity for proactive lifestyle stewardship
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="px-4 py-3 font-medium text-gray-900">
                    ≥ 30.0
                  </th>
                  <td className="px-4 py-3">Obesity</td>
                  <td className="px-4 py-3">
                    Collaborative chronic disease preventive planning
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section aria-labelledby="healthy-range">
          <h2 id="healthy-range" className="text-xl font-bold tracking-tight text-gray-950">
            Healthy BMI range
          </h2>
          <ProseParagraph>
            For screening among non-pregnant adults, epidemiologists often highlight
            18.5–24.9 kg/m² as aligning with favourable average population risk
            profiles. Narrower ranges may emerge when specialists integrate blood
            pressure, lipid panels, visceral adiposity proxies, ethnicity, age, or
            frailty—even within that band outliers exist.
          </ProseParagraph>
        </section>

        <section aria-labelledby="gender">
          <h2 id="gender" className="text-xl font-bold tracking-tight text-gray-950">
            BMI for men and women
          </h2>
          <ProseParagraph>
            The arithmetic ratio does not bifurcate by anatomy. Hormonal,
            adipose-pattern, and visceral deposition differences steer separate
            risk conversations—applied after—not inside—the BMI numerator and
            denominator. Documenting gender simply pairs your index with clinician
            context that already knows those nuances.
          </ProseParagraph>
        </section>

        <section aria-labelledby="kids">
          <h2 id="kids" className="text-xl font-bold tracking-tight text-gray-950">
            BMI for children and teens
          </h2>
          <ProseParagraph>
            Juvenile bodies reshuffle proportions each growth sprint. Pediatric BMI
            is evaluated against percentile curves—not adult cut-points. Falling
            into the same numeric bucket as your parent conveys little until
            matched to CDC or WHO percentile charts curated for age months and sex.
          </ProseParagraph>
          <BulletList
            items={[
              "Same formula: BMI = kg ÷ m²",
              'Interpret via "BMI-for-age" percentile overlays',
              'Decline categorical adult labels absent percentile context',
            ]}
          />
        </section>

        <section aria-labelledby="overweight-risk">
          <h2 id="overweight-risk" className="text-xl font-bold tracking-tight text-gray-950">
            Risks of being overweight or obese
          </h2>
          <ProseParagraph>
            Sustained energy surplus predisposes—not guarantees—elevated visceral
            adiposity which associates with cardiometabolic and mechanical loading
            stressors across large cohort studies:
          </ProseParagraph>
          <BulletList
            items={[
              "Elevated cardiometabolic signal clustering (glycemic, lipid, pressure profiles)",
              "Sleep fragmentation & obstructive airway resistance patterns",
              "Joint kinematic overload & chronic inflammation mediators",
            ]}
          />
        </section>

        <section aria-labelledby="underweight-risk">
          <h2 id="underweight-risk" className="text-xl font-bold tracking-tight text-gray-950">
            Risks of being underweight
          </h2>
          <ProseParagraph>
            Unintentional low BMI corridors may herald inadequate nutritional
            repletion reserves, osteoporosis leverage mechanics, anemia propensity,
            menstrual cycle perturbations, immunocompetency compromise, or occult
            pathology. Sudden unintended weight trends deserve timely &
            clinician-guided evaluation—not self-directed restriction alone.
          </ProseParagraph>
          <BulletList
            items={[
              "Unintentional weight loss timelines & appetite shifts",
              "Micronutrient sufficiency laboratories when indicated",
              "Muscle mass stewardship (particularly older adults)",
            ]}
          />
        </section>

        <section aria-labelledby="tips">
          <h2 id="tips" className="text-xl font-bold tracking-tight text-gray-950">
            Tips to maintain a healthy BMI
          </h2>
          <BulletList
            items={[
              "Anchor meals on minimally processed vegetation and lean proteins with mindful energy density swaps.",
              "Pair resistance & zone-2 cardiovascular training respecting recovery windows.",
              "Sleep 7–9 hours aiming for consolidated circadian regularity feeding appetite hormones.",
              "Track composite metrics (waist, strength benchmarks) rather than BMI alone.",
              "Collaborate episodically with primary care—even when numbers look fine.",
            ]}
          />
        </section>

        <section aria-labelledby="faq-heading" className="border-t border-gray-200 pt-12">
          <h2 id="faq-heading" className="text-xl font-bold tracking-tight text-gray-950">
            Frequently asked questions
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-500 max-w-2xl">
            Expand a question to read a concise answer. Native disclosure controls
            keep this section fast, accessible, and low-JavaScript-overhead.
          </p>
          <div className="mt-8 space-y-3">
            {faqs.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-gray-200 bg-white shadow-sm open:shadow-md transition"
              >
                <summary className="cursor-pointer list-none px-5 py-4 text-sm font-semibold text-gray-900 flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 rounded-2xl [&::-webkit-details-marker]:hidden outline-none">
                  <span>{item.question}</span>
                  <span
                    aria-hidden
                    className="text-gray-400 text-lg leading-none group-open:rotate-45 transition-transform"
                  >
                    +
                  </span>
                </summary>
                <div className="border-t border-gray-100 px-5 py-4 text-[15px] leading-relaxed text-gray-600">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
