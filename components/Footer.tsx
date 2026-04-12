import portfolio from "@/data/portfolio";

export default function Footer() {
  const { personal } = portfolio;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800/50 py-6 px-8 md:px-16 lg:px-24">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-xs text-zinc-600">
          © {year} {personal.name}
        </p>
        <p className="text-xs text-zinc-700 font-mono">{personal.location}</p>
      </div>
    </footer>
  );
}
