import Link from 'next/link';

const Header = () => (
  <header className="bg-white shadow-md py-4">
    <nav className="container mx-auto flex justify-between items-center px-4">
      <h1 className="text-2xl font-bold text-blue-600">My Blog</h1>
      <ul className="flex space-x-4">
        <li>
          <Link href="/">
            <a className="text-gray-700 hover:text-blue-600">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/create">
            <a className="text-gray-700 hover:text-blue-600">Create Post</a>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
