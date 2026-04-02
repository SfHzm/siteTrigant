export default function LoadingSpinner() {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-white z-[9999]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-[50px] h-[50px] border-4 border-accent-gold border-t-transparent rounded-full animate-spin"></div>
        <p className="text-accent-gold font-inter text-sm">Chargement...</p>
      </div>
    </div>
  );
}
