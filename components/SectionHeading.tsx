type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
}: SectionHeadingProps) {
  return (
    <div className={center ? "text-center" : ""}>
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c6a66b]">
        {eyebrow}
      </p>
      <h2 className="heading-font mt-3 text-4xl font-bold text-[#f5eee6] sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-[#b7a792] ${
            center ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}