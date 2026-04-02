export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-bg">
      <div className="flex flex-col items-center gap-4">
        <div className="w-[50px] h-[50px] border-4 border-accent-gold border-t-transparent rounded-full animate-spin"></div>
        <p className="text-accent-gold font-inter text-sm">Chargement...</p>
      </div>
    </div>
  );
}
