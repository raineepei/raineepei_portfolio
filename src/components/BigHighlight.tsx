export default function BigHighlight({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex h-9 items-center justify-center bg-accent px-1.5 py-1">
      <p className="font-mono text-2xl font-bold whitespace-nowrap text-white">{children}</p>
    </div>
  );
}
