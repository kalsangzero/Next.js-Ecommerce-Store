import { css } from '@emotion/react';
import Link from 'next/link';
import Users from '../pages/productsFolder/[productId]';

const navStyle = css`
  background-color: #333;
  padding: 30px 54px;

  a {
    color: #f2f2f2;
    text-align: center;
    padding: 30px 56px;
    text-decoration: none;
    font-size: 24px;
  }
  a:hover {
    background-color: #111;
    color: orange;
  }
`;

export default function Header(props) {
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
