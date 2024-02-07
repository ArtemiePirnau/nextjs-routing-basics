import Link from "next/link";
const Header = () => {
  return (
    <header className="mb-12 min-h-28 pt-3">
      <ul className="flex justify-around">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contacts">Contacts</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
