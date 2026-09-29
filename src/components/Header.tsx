export function Header() {
  return (
    <header className="sticky top-0 w-full border-b border-b-amber-100/5">
      <nav className="bg-custom-dark text-white flex justify-end w-full p-3 ">
        <ul className="flex gap-3">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contacts">Contacts</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
