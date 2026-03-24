import MotionWrapper from "./MotionWrapper";
import SectionHeading from "./SectionHeading";

const galleryImages = [
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1200&q=80",
];

export default function Gallery() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionWrapper>
          <SectionHeading
            eyebrow="Gallery"
            title="Inside Our Luxury Coffee World"
            center
          />
        </MotionWrapper>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((image, index) => (
            <MotionWrapper key={index} delay={index * 0.1}>
              <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#1a1410] shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="h-72 w-full object-cover transition duration-500 hover:scale-110"
                />
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}