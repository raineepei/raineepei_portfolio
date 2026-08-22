type PersonaRow = {
  label: string;
  description: string;
  notes: React.ReactNode[];
};

export default function PersonaCard({
  name,
  demographic,
  rows,
}: {
  name: string;
  demographic: string;
  rows: PersonaRow[];
}) {
  return (
    <div className="w-full rounded-[15px] border border-accent/40 p-8">
      <p className="font-chivo text-2xl font-bold text-accent">{name}</p>
      <p className="mt-2 font-chivo font-light text-black">{demographic}</p>
      <div className="mt-6 flex flex-col gap-6">
        {rows.map((row) => (
          <div key={row.label} className="grid grid-cols-[125px_repeat(3,1fr)] gap-4">
            <div>
              <p className="text-lg text-black">{row.label}</p>
              <p className="mt-2 text-[10px] leading-snug text-black/70">{row.description}</p>
            </div>
            {row.notes.map((note, i) => (
              <div key={i} className="flex items-center justify-center rounded bg-accent/[0.39] p-2 text-center text-[10px] leading-snug text-black">
                {note}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
