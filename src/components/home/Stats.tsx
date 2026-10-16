import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";

const stats = [
  { n: 20, label: "Study destinations", sub: "Each with a dedicated country guide" },
  { n: 11, label: "Admission steps", sub: "From enquiry to arrival" },
  { n: 9, label: "Core services", sub: "Plus ten specialist add-ons" },
  { n: 14, label: "Sections per country", sub: "Study, visa, work and PR" },
];

export function Stats() {
  return (
    <section aria-label="GoAbroad at a glance" className="relative overflow-hidden bg-brand-500 py-16 text-white">
      <div aria-hidden className="absolute inset-0 grid-lines opacity-40" />
      <div aria-hidden className="absolute -left-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-white/20 blur-3xl" />
      <div className="container-x relative grid grid-cols-2 gap-y-10 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="border-l border-white/25 pl-5 sm:pl-7">
            <Counter to={s.n} className="block font-display text-6xl font-bold tracking-tight sm:text-7xl" />
            <p className="mt-2 font-semibold">{s.label}</p>
            <p className="mt-1 text-sm text-white/75">{s.sub}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
