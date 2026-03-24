import MotionWrapper from "./MotionWrapper";
import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    name: "Ayesha Khan",
    role: "Regular Customer",
    text: "Beautiful place, excellent coffee, and a peaceful atmosphere. Easily one of my favorite spots in the city.",
  },
  {
    name: "Ali Raza",
    role: "Freelancer",
    text: "I come here for coffee and work sessions. The vibe, seating, and drinks are all genuinely great.",
  },
  {
    name: "Sara Ahmed",
    role: "Food Blogger",
    text: "The desserts are fresh, the coffee is smooth, and the overall experience feels premium without being too formal.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#16110d] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionWrapper>
          <SectionHeading
            eyebrow="Customer Reviews"
            title="What People Say About Us"
            center
          />
        </MotionWrapper>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <MotionWrapper key={item.name} delay={index * 0.15}>
              <div className="rounded-[28px] border border-white/10 bg-[#1d1611] p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                <p className="text-lg leading-8 text-[#e7ddd0]">“{item.text}”</p>
                <div className="mt-6">
                  <h3 className="heading-font text-xl font-bold text-[#f5eee6]">
                    {item.name}
                  </h3>
                  <p className="text-sm text-[#b7a792]">{item.role}</p>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}