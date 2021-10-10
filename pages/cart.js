import { css } from '@emotion/react';
import Head from 'next/head';

const heading = css`
  font: bold;
  justify-content: center;
  text-align: center;
`;
const buttonStyle = css`
  margin: 10px;
  padding: 5px;
  float: right;
`;
const contentStyle = css`
  margin: 100px 300px;
  padding: 50px;
  background-color: #a4dded;
  border-radius: 20px;
`;
const cartBox = css`
  padding: 30px;
`;

export default function Users(props) {
  return (
    <div css={contentStyle}>
      <Head>
        <title>Products</title>
      </Head>
      {/* Layout is already applied so we dont have to put the layout here */}
      <div>
        <h2 css={heading}>CART </h2>
        <div css={cartBox}>
          {/* props is collected from userServersite with name as userList
        and here we use props which has name userList and then map each ..which is shown in the list */}
          {props.likedItem.map((user) => {
            // actually props.liked user
            return (
              <div key={`user-li-${user.id}`}>
                <div>
                  <p>
                    {user.cartItems ? user.name : ''}
                    <span style={{ float: 'right' }}>
                      <span>{user.cartItems ? user.price.currency : ''}</span>
                      {user.cartItems ? user.price.amount : ''}
                    </span>
                  </p>
                </div>
                <br />
              </div>
            );
          })}
          <button css={buttonStyle}>Checkout</button>
        </div>
      </div>
    </div>
  );
}

// NODE:J PART OF SERVER
export async function getServerSideProps(context) {
  const { products } = await import('../util/database');
  const cartItems = JSON.parse(context.req.cookies.cartItems);
  console.log('cartItemslist', cartItems);
  const likedItem = products.map((user) => {
    return {
      ...user,
      cartItems:
        // like is an array of numbers and i am looping over that
        // check in each object with some
        cartItems.some((id) => {
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
