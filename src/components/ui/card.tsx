export default function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={` shadow-md hover:shadow-xl transition-shadow rounded-lg p-4 ${className}`}
    >
      {children}
    </div>
  );
}