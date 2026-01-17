import TestimonialCard from "../ui/TestimonialCard";

export default function Testimonial() {
  const testimonials = [
    {
      content: "Lorem ipsum dolor sit amet consectetur. Ullamcorper felis lacus ac purus nisl velit volutpat tristique non. Semper urna quisque sapien viverra nisl consequat lectus magna. Arcu id nec mauris amet in.",
      name: "Yoga",
      role: "Mahasiswa FK",
    },
    {
      content: "Lorem ipsum dolor sit amet consectetur. Ullamcorper felis lacus ac purus nisl velit volutpat tristique non. Semper urna quisque sapien viverra nisl consequat lectus magna. Arcu id nec mauris amet in.",
      name: "Yoga",
      role: "Mahasiswa FK",
    },
    {
      content: "Lorem ipsum dolor sit amet consectetur. Ullamcorper felis lacus ac purus nisl velit volutpat tristique non. Semper urna quisque sapien viverra nisl consequat lectus magna. Arcu id nec mauris amet in.",
      name: "Yoga",
      role: "Mahasiswa FK",
    },
  ];

  return (
    <section className=" py-15 px-4 md:px-17.5">

      {/* Header */}
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-3xl md:text-[44px]/14.5 font-bold text-white">
          Testimoni
        </h2>
        <p className="max-w-[70ch] mx-auto text-sm md:text-base/6">
          Setiap penelitian memiliki tingkat kompleksitas yang berbeda. Paket pendampingan disusun
          fleksibel sesuai tujuan, deadline, dan kebutuhan akademik Anda.
        </p>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {testimonials.map((item, index) => (
          <TestimonialCard
            key={index}
            {...item}
          />
        ))}
      </div>

    </section>
  );
}
