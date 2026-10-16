"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, CheckCircle2, Loader2, Plane } from "lucide-react";
import { useId, useState, type FormEvent, type ReactNode } from "react";
import { countries } from "@/data/countries";
import { formOptions } from "@/data/content";
import { cn } from "@/lib/cn";

type Data = {
  name: string;
  qualification: string;
  destination: string;
  goal: string;
  intake: string;
  funding: string;
  contact: string;
  consent: boolean;
};

const destinations = [...countries.map((c) => c.name), "Need counselling"];
const stepTitles = ["About you", "Destination & goal", "Timeline & funding", "How do we reach you?"];

export function EnquiryForm({
  defaultDestination = "",
  defaultGoal = "",
  title = "Start Your Global Journey",
  className,
}: {
  defaultDestination?: string;
  defaultGoal?: string;
  title?: string;
  className?: string;
}) {
  const uid = useId();
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState(1);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");
  const [data, setData] = useState<Data>({
    name: "",
    qualification: "",
    destination: defaultDestination,
    goal: defaultGoal,
    intake: "",
    funding: "",
    contact: "",
    consent: false,
  });

  const set = <K extends keyof Data>(k: K, v: Data[K]) => {
    setData((d) => ({ ...d, [k]: v }));
    setError("");
  };

  const validate = (s: number) => {
    if (s === 0 && (!data.name.trim() || !data.qualification)) return "Please enter your full name and highest qualification.";
    if (s === 1 && (!data.destination || !data.goal)) return "Please choose a preferred destination and primary goal.";
    if (s === 2 && (!data.intake || !data.funding)) return "Please choose your preferred timeline and funding requirement.";
    if (s === 3) {
      const c = data.contact.trim();
      const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c);
      const phone = /^[+\d][\d\s-]{7,}$/.test(c);
      if (!email && !phone) return "Please enter a valid email address or telephone number.";
      if (!data.consent) return "Please agree to be contacted about your enquiry.";
    }
    return "";
  };

  const next = () => {
    const msg = validate(step);
    if (msg) return setError(msg);
    setDir(1);
    setStep((s) => s + 1);
  };
  const back = () => {
    setDir(-1);
    setError("");
    setStep((s) => s - 1);
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (step < 3) return next();
    const msg = validate(3);
    if (msg) return setError(msg);
    setStatus("sending");
    try {
      const res = await fetch("/api/enquiry", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      if (!res.ok) throw new Error();
      setStatus("done");
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again or contact us on WhatsApp.");
    }
  };

  return (
    <div className={cn("relative overflow-hidden rounded-[2rem] border border-white/10 bg-ink-900/90 p-6 shadow-[0_40px_100px_-40px_rgba(0,163,230,0.5)] backdrop-blur-xl sm:p-9", className)}>
      <div aria-hidden className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand-500/20 blur-3xl" />
      <AnimatePresence mode="wait">
        {status === "done" ? (
          <motion.div key="done" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="relative text-center">
            <motion.div initial={{ scale: 0, rotate: -90 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: "spring", stiffness: 200, damping: 14 }} className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-500">
              <CheckCircle2 className="h-8 w-8 text-white" />
            </motion.div>
            <h3 className="mt-6 font-display text-3xl font-semibold text-white">Your enquiry is ready</h3>
            <p className="mx-auto mt-3 max-w-md text-white/65">
              Thank you, {data.name.split(" ")[0]}. A GoAbroad counsellor will follow up to arrange your personalised counselling session.
            </p>
            <dl className="mx-auto mt-8 grid max-w-md grid-cols-2 gap-3 text-left text-sm">
              {[
                ["Destination", data.destination],
                ["Goal", data.goal],
                ["Timeline", data.intake],
                ["Funding", data.funding],
              ].map(([k, v]) => (
                <div key={k} className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                  <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white/40">{k}</dt>
                  <dd className="mt-1 font-medium text-white">{v}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        ) : (
          <motion.form key="form" onSubmit={submit} noValidate className="relative" exit={{ opacity: 0 }}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">
                  <Plane className="h-3.5 w-3.5" /> Step {step + 1} of 4 · {stepTitles[step]}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-white sm:text-3xl">{title}</h3>
              </div>
            </div>
            <div className="mt-6 flex gap-1.5" aria-hidden>
              {stepTitles.map((_, i) => (
                <div key={i} className="h-1 flex-1 overflow-hidden rounded-full bg-white/10">
                  <motion.div className="h-full bg-gradient-to-r from-brand-400 to-sun-400" animate={{ width: i <= step ? "100%" : "0%" }} transition={{ duration: 0.5 }} />
                </div>
              ))}
            </div>

            <div className="relative mt-8 min-h-[17rem]">
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={step}
                  custom={dir}
                  initial={{ opacity: 0, x: dir * 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: dir * -40 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-6"
                >
                  {step === 0 && (
                    <>
                      <Field label="Full name" htmlFor={`${uid}-name`}>
                        <input id={`${uid}-name`} autoComplete="name" value={data.name} onChange={(e) => set("name", e.target.value)} className={inputCls} placeholder="Your full name" />
                      </Field>
                      <ChipGroup label="Highest qualification" options={formOptions.qualification} value={data.qualification} onChange={(v) => set("qualification", v)} />
                    </>
                  )}
                  {step === 1 && (
                    <>
                      <Field label="Preferred destination" htmlFor={`${uid}-dest`}>
                        <select id={`${uid}-dest`} value={data.destination} onChange={(e) => set("destination", e.target.value)} className={cn(inputCls, "appearance-none")}>
                          <option value="" disabled>
                            Select a destination
                          </option>
                          {destinations.map((d) => (
                            <option key={d} value={d} className="bg-ink-900">
                              {d}
                            </option>
                          ))}
                        </select>
                      </Field>
                      <ChipGroup label="Primary goal" options={formOptions.goal} value={data.goal} onChange={(v) => set("goal", v)} />
                    </>
                  )}
                  {step === 2 && (
                    <>
                      <ChipGroup label="Preferred intake or timeline" options={formOptions.intake} value={data.intake} onChange={(v) => set("intake", v)} />
                      <ChipGroup label="Funding requirement" options={formOptions.funding} value={data.funding} onChange={(v) => set("funding", v)} />
                    </>
                  )}
                  {step === 3 && (
                    <>
                      <Field label="Email or telephone number" htmlFor={`${uid}-contact`}>
                        <input id={`${uid}-contact`} autoComplete="email" value={data.contact} onChange={(e) => set("contact", e.target.value)} className={inputCls} placeholder="you@example.com or +91 …" />
                      </Field>
                      <label className="flex items-start gap-3 text-sm text-white/65">
                        <input type="checkbox" checked={data.consent} onChange={(e) => set("consent", e.target.checked)} className="mt-1 h-4 w-4 shrink-0 accent-brand-500" />
                        <span>
                          I agree to be contacted by GoAbroad Services about my enquiry and have read the{" "}
                          <Link href="/privacy-policy" className="text-brand-300 underline underline-offset-2">privacy policy</Link>.
                        </span>
                      </label>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            <p role="alert" aria-live="assertive" className="min-h-[1.5rem] text-sm text-sun-300">
              {error}
            </p>

            <div className="mt-4 flex items-center justify-between gap-3">
              {step > 0 ? (
                <button type="button" onClick={back} className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-white/70 hover:text-white">
                  <ArrowLeft className="h-4 w-4" /> Back
                </button>
              ) : (
                <span />
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                className="group inline-flex items-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_40px_-10px_rgba(0,163,230,0.9)] transition-colors hover:bg-brand-400 disabled:opacity-60"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Preparing…
                  </>
                ) : step < 3 ? (
                  <>
                    Continue <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                ) : (
                  <>
                    Prepare My Enquiry <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

const inputCls =
  "w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white placeholder:text-white/30 transition-colors focus:border-brand-400 focus:bg-white/[0.06] focus:outline-none";

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium text-white/80">
        {label}
      </label>
      {children}
    </div>
  );
}

function ChipGroup({ label, options, value, onChange }: { label: string; options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <fieldset>
      <legend className="mb-3 text-sm font-medium text-white/80">{label}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <label
            key={o}
            className={cn(
              "cursor-pointer rounded-full border px-4 py-2 text-sm transition-all has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-brand-400",
              value === o ? "border-brand-400 bg-brand-500/20 text-white" : "border-white/10 text-white/65 hover:border-white/30 hover:text-white",
            )}
          >
            <input type="radio" name={label} value={o} checked={value === o} onChange={() => onChange(o)} className="sr-only" />
            {o}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
