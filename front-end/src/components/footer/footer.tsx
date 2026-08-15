export function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6">
        <p className="text-sm text-gray-400">
          © 2026 Corinthinas FC
        </p>

        <nav className="flex gap-4">
          <a
            href="/privacy"
            className="text-sm text-gray-500 hover:text-gray-100"
          >
            Privacidade
          </a>

          <a
            href="/terms"
            className="text-sm text-gray-500 hover:text-gray-100"
          >
            Termos
          </a>
        </nav>
      </div>
    </footer>
  );
}