export function Header() {
  return (
    <header className="border-b border-gray-200 ">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <a href="/" className="text-xl font-bold text-gray-400 hover:text-white">
          CORINT<span className="text-red-600 hover:text-white">HIANS</span>
        </a>

        <nav className="flex gap-6 text-gray-400">
          <a href="/" className="text-sm hover:text-white">
            Home
          </a>

          <a href="/about" className="text-sm hover:text-white">
            Sobre
          </a>

          <a href="/contact" className="text-sm hover:text-white">
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}