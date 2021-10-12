import { css } from '@emotion/react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../Component/Layout';

// const products = [
//   { id: '1', name: 'Sukuna', img: '../public/sukuna.gif' },
//   { id: '2', name: 'Goku', img: '../public/sukuna.gif' },
//   { id: '3', name: 'YourName', img: '../public/sukuna.gif' },
//   { id: '4', name: 'DemonSlayer', img: '../public/sukuna.gif' },
// ];
const productLayout = css`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
`;
const heading = css`
  font: bold;
  justify-content: center;
  text-align: center;
  font-size: 32px;
`;
const singleImage = css`
  display: flex;
  padding: 10px;
  margin: 24px;
  position: relative;
  border-radius: 5px;
  background-color: rgb(255, 255, 255);
  border: 2px solid rgb(229, 232, 235);
  :hover {
    box-shadow: 5px 10px 8px 5px #888888;
  }
`;
export default function Users(props) {
  return (
    <Layout>
      <div style={{ margin: '100px 50px' }}>
        <Head>
          <title>Products</title>
        </Head>
        {/* Layout is already applied so we dont have to put the layout here */}
        <h2 css={heading}>NFTs (Non-Fungible Tokens)</h2>
        <div css={productLayout}>
          {/* props is collected from userServersite with name as userList
        and here we use props which has name userList and then map each ..which is shown in the list */}
          {props.likedItem.map((user) => {
            // actually props.liked user
            return (
              <div css={singleImage} key={`user-li-${user.id}`}>
                <div>{user.like ? '🧡' : '🤍'}</div>
                <br />
                <Link href={`/productsFolder/${user.id}`}>
                  <a>
                    <img
                      style={{ borderRadius: '5px' }}
                      src={user.img}
                      alt={user.name}
                    />
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

// NODE:J PART OF SERVER
export async function getServerSideProps(context) {
  // place from where you fetch
  // and there is a specific way of importing the database
  // get server site only work on pages and not components
  // to get access the request (context)
  const { getProducts } = await import('../../util/database');
  const products = await getProducts();

  const cookies = context.req.cookies.like || '[]';
  const like = JSON.parse(cookies);
  // self like from cookies

  // to use it in the li, we have to use props
  // shown in terminal

  const likedItem = products.map((user) => {
    return {
      ...user,
      like:
        // like is an array of numbers and i am looping over that
        // check in each object with some
        like.some((id) => {
          return Number(user.id) === id;
        }),
    };
  });
  console.log('new list with like', likedItem);

  return {
    // everything that is in return will be props above
    // userlist is name and products is value
    props: {
      likedItem,
    },
  };
}
