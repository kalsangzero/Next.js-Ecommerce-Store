import { css } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../util/localStorage';

export default function Home() {
  const frontPage = css`
    justify-content: center;
    text-align: center;
    padding: 10px;

    background-color: lightcyan;
  `;
  const buttontype = css`
    margin: 24px;
    padding: 10px 20px;
    font-size: 24px;

    cursor: pointer;
    border-radius: 5px;
    :hover {
      background-color: lightcoral;
      color: white;
    }
  `;

  //   window is not defined shown because even our frontend code are rendered in the backend.
  // next js does server side rendering , next js gonna render it in backend, and gonna send front end
  // so
  // window is only on front end , use if statement
  const myDarkMode = getLocalStorage('darkMode') || false;
  // on first render looks into local storage to get true or flase

  const [darkMode, setDarkMode] = useState(myDarkMode);
  // storing dark mode on local storage
  /* local storage is always string so JSON.parse to make it boolean */
  function clickHandler() {
    const newDarkMode = !getLocalStorage('darkMode');

    setLocalStorage('darkMode', newDarkMode);
    setDarkMode(newDarkMode);
  }
  return (
    <div css={frontPage}>
      <Head>
        <title>Home Page</title>
      </Head>
      <h1>Welcome to DigitalNFT</h1>
      {/* Layout is already applied so we dont have to put the layout here */}
      <div>
        <h1 style={{ margin: '20px' }}>
          Discover, collect, and sell extraordinary NFTs
        </h1>
        <h2 style={{ margin: '20px' }}>
          on the world's first and largest NFT marketplace
        </h2>
      </div>
      <img
        style={{ margin: '10px 20px' }}
        src="/aboutpic1.png"
        alt="aboutpic1"
      />
      <br />

      <Link href="/productsFolder">
        <a css={buttontype}>Explore</a>
      </Link>

      {/* {button to toggle on off}
      local storage is always string
      state variable will allow toggle to function on the div below*/}
      <br />
      <p>
        Welcome to DigitalNFT! We’re the largest marketplace for non-fungible
        tokens (NFTs). Non-fungible tokens are unique, digital items with
        blockchain-managed ownership. Examples include collectibles, game items,
        digital art, event tickets, domain names, and even ownership records for
        physical assets. In other words, we’re kind of like eBay for
        CryptoKitties. Using DigitalNFT, you can buy, sell, and explore millions
        of assets across hundreds of categories. If some of that sounds
        unfamiliar, don’t worry! By the end of this article, you’ll have the
        knowledge and skills to effortlessly move through the world of NFTs.
      </p>
      <button css={buttontype} onClick={clickHandler}>
        dark mode
      </button>
      <div>{JSON.stringify(darkMode)}</div>

      {/* react by default dont show undefined true false (boolean),
      therefore u need to stringify it */}
    </div>
  );
}
