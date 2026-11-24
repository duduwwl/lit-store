export function Logo({ className = "", sub = true }: { className?: string; sub?: boolean }) {
  return (
    <span className={`inline-flex flex-col items-center leading-none ${className}`}>
      <span className="display text-[1.6em] tracking-[0.02em]">LIT</span>
      {sub && (
        <span className="mt-[0.15em] text-[0.34em] font-semibold uppercase tracking-[0.55em] text-bone/70">
          Store
        </span>
      )}
    </span>
  );
}
