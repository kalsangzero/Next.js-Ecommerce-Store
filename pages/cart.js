import { css } from '@emotion/react';
import Head from 'next/head';
import Layout from '../Component/Layout';

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
    <Layout>
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
                        <span style={{ marginRight: '20px' }}>
                          {user.quantity ? `unit: ${user.quantity}    ` : ''}
                        </span>
                        {user.cartItems ? '€' : ''}
                        {user.cartItems ? user.price * user.quantity : ''}
                      </span>
                    </p>
                  </div>
                  <br />
                </div>
              );
            })}
            <hr />
            <button css={buttonStyle}>Checkout</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

// NODE:J PART OF SERVER
export async function getServerSideProps(context) {
  const { products } = await import('../util/database');

  const cookies = context.req.cookies.cartItems || [];
  const cartItems = JSON.parse(cookies);
  console.log('cartItemslist', cartItems);
  // [1, 3] but we want array with object

  const likedItem = products.map((user) => {
    const isProductInCart = cartItems.some((userCookieObj) => {
      return Number(user.id) === userCookieObj.id;
    });
    const productObj = cartItems.find((cookieObj) => {
      return cookieObj.id === Number(user.id);
    });
    return {
      ...user,
      cartItems:
        // like is an array of numbers and i am looping over that
        // check in each object with some
        // creating quantity
        isProductInCart,
      quantity: isProductInCart ? productObj.quantity : 0,
    };
  });

  // {id: '6', name: 'YourName', desc: "Yere.",price: { currency: '€', amount: 700 },img: '/yourname.gif'}, cartItems: true, quantityItem: 0}

  // console.log('new list with like', likedItem);

  return {
    // everything that is in return will be props above
    // userlist is name and products is value
    props: {
      likedItem,
    },
  };
}
