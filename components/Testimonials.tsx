import { reviews } from "@/data/reviews";

export default function Testimonials() {
  return (
    <section id="reviews" className="px-6 py-20 md:px-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold md:text-5xl heading-font">
          Customer Reviews
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="rounded-3xl border border-[#2b2118] bg-[#17110d] p-6"
            >
              <div className="text-[#c6a66b]">{"★".repeat(review.rating)}</div>
              <p className="mt-4 text-[#d8cfc5]">{review.text}</p>
              <div className="mt-6 font-semibold text-[#f5eee6]">{review.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}