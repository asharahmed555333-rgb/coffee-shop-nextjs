import MotionWrapper from "./MotionWrapper";
import SectionHeading from "./SectionHeading";

const menuItems = [
  {
    title: "Espresso",
    price: "$4.50",
    description: "Bold, rich, and perfectly extracted for true coffee lovers.",
    image:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Cappuccino",
    price: "$5.00",
    description: "Smooth espresso with silky milk foam and a balanced taste.",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Iced Latte",
    price: "$5.50",
    description: "Refreshing chilled coffee with creamy texture and soft finish.",
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Chocolate Muffin",
    price: "$3.50",
    description: "Soft, moist, and freshly baked to pair with any hot drink.",
    image:
      "https://images.unsplash.com/photo-1603532648955-039310d9ed75?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function MenuSection() {
  return (
    <section id="menu" className="bg-[#16110d] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionWrapper>
          <SectionHeading
            eyebrow="Signature Menu"
            title="Crafted for Refined Coffee Taste"
            description="Discover rich coffee, elegant blends, and fresh bakery items made to elevate every visit."
            center
          />
        </MotionWrapper>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {menuItems.map((item, index) => (
            <MotionWrapper key={item.title} delay={index * 0.12}>
              <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#1d1611] shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,0,0,0.4)]">
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-56 w-full object-cover transition duration-500 hover:scale-110"
                  />
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="heading-font text-xl font-bold text-[#f5eee6]">
                      {item.title}
                    </h3>
                    <span className="whitespace-nowrap font-semibold text-[#c6a66b]">
                      {item.price}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-[#b7a792]">
                    {item.description}
                  </p>
                  <button className="mt-5 w-full rounded-full bg-[#c6a66b] px-4 py-3 font-semibold text-[#120d09] transition duration-300 hover:-translate-y-1 hover:bg-[#e7c98a]">
                    Order Now
                  </button>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}