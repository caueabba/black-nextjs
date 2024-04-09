// src/components/Header.tsx

import Link from "next/link";
import { Nav, Navbar } from "reactstrap";

const Header = () => {
  return (
    <Navbar container="md" color="dark" dark>
      <Link href="/" passHref>
        <h3 className="navbar-brand">
          Início
        </h3>
      </Link>
      <Nav className="flex-row" navbar>
        <Link href="/products" passHref>
          <h3 className="nav-link me-2">
            Produtos
          </h3>
        </Link>
        <Link href="/cart" passHref>
          <h3 className="nav-link">
            Carrinho
          </h3>
        </Link>
      </Nav>
    </Navbar>
  )
}

export default Header