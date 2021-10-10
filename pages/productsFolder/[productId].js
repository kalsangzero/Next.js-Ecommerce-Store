import { css } from '@emotion/react';
import Cookies from 'js-cookie';
import Head from 'next/head';
import { useState } from 'react';
import { getParsedCookie, setParsedCookie } from '../../util/cookies';

// [user].js and any name after user/ this will be directed to this [user] ppage

export default function User(props) {
  // this is to get url query in the frontend

  const buttonStyle = css`
    margin: 10px;
    padding: 5px;
  `;
  const baseStyle = css`
    justify-content: center;
    text-align: center;
    margin: 5vw 15vw;
    padding: 30px;
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

  const innerContent = css`
    display: flex;
  `;
  // const router = useRouter();
  // user is the name of the file
  // router.query is an object with an property user
  // const { product } = router.query;
  // would show whatever the name you typed

  const [cartNumber, setCartNumber] = useState('');

  const [like, setLike] = useState(getParsedCookie('like') || []);
  // even if someone deletes the cookies || this will allow it displayed  and in console loged as undefined
  const [cartItems, setCartItems] = useState(
    getParsedCookie('cartItems') || [],
  );

  // the value is in string
  console.log(Cookies.get('like'));
  console.log(getParsedCookie('like'));
  // this gives me number already parsed

  function makeCart() {
    // check the current state of cookies
    const currentCookie = getParsedCookie('like') || [];
    // [3]
    // update the cookie (add if its  not there, remove if its there)
    const isUserLiked = currentCookie.some((id) => {
      return id === Number(props.singleUser.id);
      // id that comes from the Url
    });
    let newCookie;
    if (isUserLiked) {
      // remover the user
      newCookie = currentCookie.filter(
        (id) => id !== Number(props.singleUser.id),
      );
    } else {
      // add the user
      newCookie = [...currentCookie, Number(props.singleUser.id)];
    }
    // update state
    setParsedCookie('like', newCookie);
    setLike(newCookie);
  }

  function clickHandler() {
    const currentCookie = getParsedCookie('cartItems') || [];

    const isCarted = currentCookie.some((id) => {
      return id === Number(props.singleUser.id);
    });
    let newCartCookie;
    if (isCarted) {
      // remove the user
      newCartCookie = currentCookie.filter(
        (id) => id !== Number(props.singleUser.id),
      );
    } else {
      // add the user
      newCartCookie = [...currentCookie, Number(props.singleUser.id)];
    }
    // update state
    setParsedCookie('cartItems', newCartCookie);
    setCartItems(newCartCookie);
  }

  return (
    <div css={baseStyle}>
      <Head>
        <title>Personal User Page</title>
      </Head>
      {/* Layout is already applied so we dont have to put the layout here.
      The thing i want to say is below that every products with image could be make
      */}
      <h1>{props.singleUser.name}</h1>
      <div css={innerContent}>
        <img
          css={singleImage}
          src={props.singleUser.img}
          alt={props.singleUser.name}
        />
        <div>
          <p style={{ padding: '80px 100px' }}>{props.singleUser.desc}</p>
          <p style={{ fontWeight: 'bold' }}>
            Amount : {props.singleUser.price.currency}
            {props.singleUser.price.amount}
          </p>
          <div>
            <button onClick={() => setCartNumber(cartNumber - 1)}>-</button>

            {cartNumber ? cartNumber : 0}
            <button onClick={() => setCartNumber(cartNumber + 1)}>+</button>
          </div>
          <button css={buttonStyle} onClick={makeCart}>
            {like.some((id) => Number(props.singleUser.id) === id)
              ? 'liked'
              : 'notliked'}
          </button>
          <br />
          <button css={buttonStyle} onClick={clickHandler}>
            {cartItems.some((id) => Number(props.singleUser.id) === id)
              ? 'CARTED'
              : 'ADD To CART'}
          </button>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  // getserver recieve context object(nextjs) and it has lots info about request  and could be used here

  const { products } = await import('../../util/database');

  const idFromUrl = context.query.productId;
  console.log(context.query.productId);
  // in order to get the object i want when i hav arrayobject and id
  //  method used is : find to find the right object
  const singleUser = products.find((user) => {
    return idFromUrl === user.id;
  });
  // returns the searched object eg.{ id: '3', name: 'YourName', img: '../public/sukuna.gif' },

  // product : name of the file
  console.log(singleUser);

  return {
    props: {
      singleUser,
    },
  };
}
