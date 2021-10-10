import { css } from '@emotion/react';
import Link from 'next/link';

const navStyle = css`
  background-color: #333;
  padding: 20px 64px;

  a {
    color: #f2f2f2;
    text-align: center;
    padding: 14px 36px;
    text-decoration: none;
    font-size: 17px;
  }
  a:hover {
    background-color: #111;
  }
`;

export default function Header() {
  return (
    <nav css={navStyle}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
      <Link href="/productsFolder">
        <a>Marketplace</a>
      </Link>
      <div style={{ float: 'right' }}>
        <Link href="/cart">
          <a>Cart</a>
        </Link>
        <Link href="/account">
          <a>Log in</a>
        </Link>
      </div>
    </nav>
  );
}
