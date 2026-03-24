import { menuItems } from "@/data/menu";

export default function MenuSection() {
  return (
    <section id="menu" className="px-6 py-20 md:px-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold md:text-5xl heading-font">Our Menu</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl border border-[#2b2118] bg-[#17110d] p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-2xl font-semibold heading-font">{item.name}</h3>
                <span className="rounded-full bg-[#2b2118] px-3 py-1 text-sm text-[#c6a66b]">
                  {item.price}
                </span>
              </div>

              <p className="mt-4 text-[#d8cfc5]">{item.description}</p>

              <div className="mt-4 text-sm text-[#a48d74]">{item.category}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}