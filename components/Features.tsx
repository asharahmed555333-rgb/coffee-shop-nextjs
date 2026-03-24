export default function Features() {
  const features = [
    "Handcrafted premium coffee",
    "Luxury dark interior theme",
    "Fresh bakery and desserts",
    "Perfect for meetings and family time",
  ];

  return (
    <section id="about" className="px-6 py-20 md:px-12">
      <div className="mx-auto max-w-6xl rounded-3xl border border-[#2b2118] bg-[#17110d] p-8 md:p-12">
        <h2 className="text-3xl font-bold md:text-5xl heading-font">
          About Brew Haven
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#d8cfc5]">
          Brew Haven is a premium coffee destination offering handcrafted drinks,
          stylish interiors, and a calm atmosphere for friends, families, and professionals.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature}
              className="rounded-2xl border border-[#2b2118] bg-[#120d09] px-5 py-4 text-[#f5eee6]"
            >
              {feature}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}