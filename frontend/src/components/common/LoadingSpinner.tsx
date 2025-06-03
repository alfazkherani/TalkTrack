interface LoadingSpinnerProps {
  fullScreen?: boolean;
}

export function LoadingSpinner({ fullScreen = false }: LoadingSpinnerProps) {
  const containerClasses = fullScreen ? "min-h-screen" : "min-h-[200px]";

  return (
    <div className={`${containerClasses} flex items-center justify-center`}>
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
    </div>
  );
}
