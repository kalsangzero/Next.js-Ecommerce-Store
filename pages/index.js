import { css } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../Component/Layout';

export default function Home() {
  const frontPage = css`
    justify-content: center;
    text-align: center;
    padding: 10px;
  `;
  const heading = css`
    justify-content: center;
    text-align: center;
    padding: 50px;
    margin: 50px 50px 10px;
  `;
  const buttontype = css`
    margin: 24px;
    padding: 10px 20px;
    font-size: 24px;

    cursor: pointer;
    border-radius: 5px;
    :hover {
      background-color: white;
      color: lightblue;
    }
  `;

  //   window is not defined shown because even our frontend code are rendered in the backend.
  // next js does server side rendering , next js gonna render it in backend, and gonna send front end

  return (
    <Layout>
      <div css={frontPage}>
        <Head>
          <title>Home Page</title>
        </Head>
        <div css={heading}>
          <h1>Welcome to DigitalNFT</h1>
          {/* Layout is already applied so we dont have to put the layout here */}
          <h1 style={{ margin: '20px', fontSize: '50px' }}>
            Discover, collect, and sell extraordinary NFTs
          </h1>
          <h2 style={{ margin: '10px', fontSize: '40px' }}>
            on the world's first and largest NFT marketplace
          </h2>
        </div>
        <p
          style={{
            padding: ' 20px 100px',
            margin: '0 200px',
            fontSize: '20px',
          }}
        >
          Welcome to DigitalNFT! We’re the largest marketplace for non-fungible
          tokens (NFTs). Non-fungible tokens are unique, digital items with
          blockchain-managed ownership. Examples include collectibles, game
          items, digital art, event tickets, domain names, and even ownership
          records for physical assets.
        </p>
        <img
          style={{ margin: '10px 20px' }}
          src="/aboutpic1.png"
          alt="aboutpic1"
          width="500px"
          height="300px"
        />
        <br />

        {/* {button to toggle on off}
      local storage is always string
      state variable will allow toggle to function on the div below*/}
        <br />
        <p
          style={{
            padding: '50px 100px',
            margin: '0 200px',
            fontSize: '20px',
          }}
        >
          In other words, we’re kind of like eBay for CryptoKitties. Using
          DigitalNFT, you can buy, sell, and explore millions of assets across
          hundreds of categories. If some of that sounds unfamiliar, don’t
          worry! By the end of this article, you’ll have the knowledge and
          skills to effortlessly move through the world of NFTs.
        </p>
        <Link href="/productsFolder">
          <a css={buttontype}>Explore</a>
        </Link>
        {/* react by default dont show undefined true false (boolean),
      therefore u need to stringify it */}
      </div>
    </Layout>
  );
}
