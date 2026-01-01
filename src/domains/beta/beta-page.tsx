import useBeta from "./use-beta";

export default function BetaPage() {
  const { counter } = useBeta();
  return (
    <div>
      <h1 className="text-4xl font-bold">Beta Page</h1>
    </div>
  );
}
