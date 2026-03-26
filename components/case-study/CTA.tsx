// components/case-study/CTA.tsx

export default function CTA() {
  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Let’s Build Something Like This
      </h2>

      <p className="text-muted-foreground mb-8">
        Looking to create a high-performing website for your business?
      </p>

      <div className="flex justify-center gap-4">
        <button className="px-6 py-3 rounded-lg bg-primary text-white hover:opacity-90 transition">
          Start a Project
        </button>

        <button className="px-6 py-3 rounded-lg border border-border hover:bg-muted transition">
          Chat on WhatsApp
        </button>
      </div>
    </section>
  );
}