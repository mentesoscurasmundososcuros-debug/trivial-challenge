interface FloatingPointsProps {
  points: number;
  show: boolean;
}

export default function FloatingPoints({ points, show }: FloatingPointsProps) {
  console.log('FloatingPoints render:', { points, show }); // DEBUG
  
  if (!show) return null;

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50">
      <div className="animate-float-up text-6xl font-bold text-green-600 drop-shadow-lg">
        +{points}
      </div>
    </div>
  );
}