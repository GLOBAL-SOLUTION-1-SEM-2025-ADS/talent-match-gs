import ThemeToggle from "../components/ThemeToggle";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors">
      
      <header className="w-full p-4 flex justify-end border-b border-gray-200 dark:border-gray-700">
        <ThemeToggle />
      </header>

      <main className="px-4 md:px-20 py-8">
        {children}
      </main>

    </div>
  );
}
