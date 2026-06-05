import { universalFinders, careerFinders } from "@/lib/officialFinders";

export function OfficialFinders({ careerKey }: { careerKey: string }) {
  const specific = careerFinders[careerKey] ?? [];
  const links = [...specific, ...universalFinders];

  return (
    <div className="bg-surface border border-surface-light rounded-xl p-5 mb-6">
      <h3 className="font-display text-base font-bold text-text-primary">
        Search official program directories
      </h3>
      <p className="text-text-secondary text-sm mt-1">
        These government and industry directories list accredited programs and
        registered apprenticeships nationwide — a great place to find options near you.
      </p>
      <div className="grid gap-2 sm:grid-cols-2 mt-4">
        {links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-surface-light hover:bg-background border border-surface-light hover:border-primary rounded-lg px-3 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            <span>{link.label}</span>
            <span className="text-primary ml-2">↗</span>
          </a>
        ))}
      </div>
    </div>
  );
}
