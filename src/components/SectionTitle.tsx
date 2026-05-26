export default function SectionTitle({
  scene,
  title,
  subtitle,
}: {
  scene: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-16">
      <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-accent-blue-light/70 mb-5">
        {scene}
      </p>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.03em] leading-[1.15]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-text-secondary text-lg leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
