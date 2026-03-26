// components/case-study/Section.tsx

export default function Section({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <section className="py-16 max-w-4xl mx-auto px-6 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">
        {title}
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        {content}
      </p>
    </section>
  );
}