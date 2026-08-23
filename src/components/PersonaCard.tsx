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
    <div className="flex w-full flex-col items-center justify-center rounded-[15px] border border-accent/[0.39] px-[42px] py-7">
      <div className="flex w-[508px] flex-col items-start gap-[30px]">
        <div className="flex w-[145px] flex-col items-start gap-[6px]">
          <p className="font-chivo text-2xl font-bold text-accent">{name}</p>
          <p className="font-chivo text-base font-light text-black">{demographic}</p>
        </div>
        <div className="flex w-full flex-col items-start gap-7">
          {rows.map((row) => (
            <div key={row.label} className="flex w-full items-start gap-[50px]">
              <div className="flex w-[125px] shrink-0 flex-col items-start gap-1 font-chivo text-black">
                <p className="w-full text-base">{row.label}</p>
                <p className="w-full text-[7px] leading-[10px]">{row.description}</p>
              </div>
              <div className="flex items-center gap-6">
                {row.notes.map((note, i) => (
                  <div
                    key={i}
                    className="flex size-[95px] shrink-0 flex-col items-start bg-accent/[0.39] p-2.5 font-chivo text-[7px] text-black"
                  >
                    {note}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
