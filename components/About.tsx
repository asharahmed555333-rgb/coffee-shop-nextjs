import MotionWrapper from "./MotionWrapper";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <MotionWrapper>
          <img
            src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1200&q=80"
            alt="Coffee shop interior"
            className="h-[320px] w-full rounded-[32px] object-cover shadow-[0_25px_60px_rgba(0,0,0,0.35)] transition duration-500 hover:scale-[1.02] sm:h-[460px]"
          />
        </MotionWrapper>

        <MotionWrapper delay={0.15}>
          <SectionHeading
            eyebrow="About Brew Haven"
            title="A Coffee Destination Built with Elegance and Depth"
          />

          <p className="mt-5 text-base leading-7 text-[#b7a792]">
            Brew Haven is designed for people who enjoy coffee in a space that
            feels rich, calm, and memorable. From expertly brewed espresso to
            artisan desserts and luxurious seating, every detail is intentional.
          </p>
          <p className="mt-4 text-base leading-7 text-[#b7a792]">
            Whether you are catching up with friends, meeting a client, or
            taking a quiet break, our café offers a polished experience with
            warmth and character.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-[#1a1410] p-5 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <h3 className="heading-font text-xl font-bold text-[#f5eee6]">
                Premium Ingredients
              </h3>
              <p className="mt-2 text-sm text-[#b7a792]">
                Carefully selected beans, milk, desserts, and seasonal flavors.
              </p>
            </div>
            <div className="rounded-2xl border borderwhite/10 bg-[#1a1410] p-5 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <h3 className="heading-font text-xl font-bold text-[#f5eee6]">
                Elegant Interior
              </h3>
              <p className="mt-2 text-sm text-[#b7a792]">
                A dark luxury setting with warmth, comfort, and visual depth.
              </p>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}