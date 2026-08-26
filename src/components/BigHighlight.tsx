export default function BigHighlight({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center justify-center bg-accent">
      <p className="font-inconsolata text-sm font-bold whitespace-nowrap text-white">{children}</p>
    </div>
  );
}
