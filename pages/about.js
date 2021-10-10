import Head from 'next/head';

export default function About() {
  return (
    <div>
      <Head>
        <title>About Page </title>
      </Head>
      <h1>Welcome to DigitalNFT</h1>
      <img src="/aboutpic1.png" alt="aboutpic1" />
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
    </div>
  );
}
