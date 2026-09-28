interface DotGridProps {
  rows?: number;
  cols?: number;
  color?: string;
  className?: string;
}

export function DotGrid({ rows = 5, cols = 5, color = "#ABB2BF", className = "" }: DotGridProps) {
  return (
    <div
      className={`inline-grid gap-2 select-none pointer-events-none ${className}`}
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
      aria-hidden="true"
    >
      {Array.from({ length: rows * cols }).map((_, i) => (
        <span
          key={i}
          className="w-1 h-1 rounded-full transition-colors duration-300"
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
}

export function GeometricAccent({ className = "" }: { className?: string }) {
  return (
    <div className={`relative pointer-events-none select-none ${className}`} aria-hidden="true">
      {/* Outer gray box */}
      <div className="w-20 h-20 border border-[#ABB2BF] absolute top-0 left-0 opacity-60" />
      {/* Inner purple offset box */}
      <div className="w-16 h-16 border-2 border-[#C778DD] absolute top-4 left-4" />
      {/* Small dot grid */}
      <div className="absolute top-10 left-10">
        <DotGrid rows={3} cols={4} color="#ABB2BF" />
      </div>
    </div>
  );
}
