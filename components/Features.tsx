import MotionWrapper from "./MotionWrapper";

const features = [
  {
    title: "Fresh Roasted Beans",
    description:
      "We use premium beans selected for flavor, aroma, and consistency.",
  },
  {
    title: "Cozy Ambience",
    description:
      "A warm space for meetings, solo work, or relaxing with friends.",
  },
  {
    title: "Fast Service",
    description:
      "Quick ordering and smooth service without compromising quality.",
  },
];

export default function Features() {
  return (
    <section className="py-8 sm:py-12">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
        {features.map((feature, index) => (
          <MotionWrapper key={feature.title} delay={index * 0.15}>
            <div className="rounded-[28px] border border-black/5 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#6a564b]">
                {feature.description}
              </p>
            </div>
          </MotionWrapper>
        ))}
      </div>
    </section>
  );
}