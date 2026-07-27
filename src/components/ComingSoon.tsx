export default function ComingSoon({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-mist px-6 text-center">
      <h1 className="text-4xl font-bold text-emerald md:text-5xl">{title}</h1>
      <p className="mt-4 max-w-xl text-slate-muted">{description}</p>
      <span className="mt-8 inline-block rounded-full bg-gold/20 px-6 py-2 font-display text-sm font-medium text-gold-dark">
        Coming soon
      </span>
    </main>
  );
}
