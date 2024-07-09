import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-orange-400 p-4 text-black">
      <ul className="flex justify-around">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/avaliadores">Avaliadores</Link>
        </li>
        <li>
          <Link href="/equipes">Equipes</Link>
        </li>
        <li>
          <Link href="/avaliacoes">Avaliações</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
