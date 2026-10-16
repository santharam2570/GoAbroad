import { LogoMark } from "@/components/brand/Logo";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="grain relative flex min-h-[90svh] items-center overflow-hidden pt-28">
      <div aria-hidden className="absolute inset-0 grid-lines mask-fade-b opacity-60" />
      <div aria-hidden className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/20 blur-[120px]" />
      <div className="container-x relative text-center">
        <LogoMark className="mx-auto h-20 w-20 text-brand-500" spin />
        <p className="mt-8 font-mono text-sm uppercase tracking-[0.3em] text-sun-300">Flight 404 · Destination not found</p>
        <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight text-white sm:text-7xl">
          This route <span className="font-serif font-normal italic text-gradient">doesn&apos;t exist.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-md text-white/60">Let&apos;s get you back on course to your international journey.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/">Back to home</ButtonLink>
          <ButtonLink href="/study-abroad" variant="ghost">Browse destinations</ButtonLink>
        </div>
      </div>
    </section>
  );
}
