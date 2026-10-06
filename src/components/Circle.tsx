export function Circle({ year }: { year: number }) {
  return (
    <div className="rounded-full w-12 h-12 bg-amber-600 flex justify-center items-center">
      <p className="font-bold">{year}</p>
    </div>
  );
}
