export function Header() {
  return (
    <header className="sticky top-0 w-full border-b border-b-amber-100/5">
      <nav className="bg-custom-dark text-white flex justify-end w-full p-3 ">
        <ul className="flex gap-3">
          <li className="hover:bg-amber-400/25 hover:cursor-pointer px-4 py-2 rounded-2xl">
            <a href="/">Home</a>
          </li>
          <li className="hover:bg-amber-400/25 hover:cursor-pointer px-4 py-2 rounded-2xl">
            <a href="#about">About</a>
          </li>
          <li className="hover:bg-amber-400/25 hover:cursor-pointer px-4 py-2 rounded-2xl">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:bg-amber-400/25 hover:cursor-pointer px-4 py-2 rounded-2xl">
            <a href="#contacts">Contacts</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
