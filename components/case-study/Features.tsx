// components/case-study/Features.tsx

export default function Features() {
  const features = [
    "⚡ Lightning-fast performance",
    "🎯 Conversion-focused layout",
    "📱 Fully responsive design",
    "🔍 SEO-optimized structure",
    "🎨 Smooth animations",
    "🧩 Scalable architecture",
  ];

  return (
    <section className="py-16 max-w-5xl mx-auto px-6">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
        Key Features
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {features.map((item, i) => (
          <div
            key={i}
            className="p-6 rounded-xl border border-border bg-muted/20 hover:bg-muted/40 transition"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}