import React, { useReducer } from "react";
import ShopContext from "./ShopContext";
import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT } from "./reducers";

function GlobalState(props) {
  
  
  
  const products = [
    {
        id: "p1",
        title: "Clean Green",
        imgPath: "../assets/SAPunch.png",
        "bio": "Romaine, Celery, Kale, Cucumber, and Apple",
        price: 7.00
    }, {
        id: "p2",
        title: "The Martian",
        imgPath: "../assets/SAPunch.png",
        "bio": "Lorem Ipsum",
        price: 7.00
    }, {
        id: "p3",
        title: "Love Potion",
        imgPath: "../assets/SAPunch.png",
        "bio": "Lorem Ipsum",
        price: 7.00
    }, {
        id: "p4",
        title: "Valley Girl",
        imgPath: "../assets/SAPunch.png",
        "bio": "Lorem Ipsum",
        price: 7.00
    }, {
        id: "p5",
        title: "SA Punch",
        imgPath: "../assets/SAPunch.png",
        "bio": "Lorem Ipsum",
        price: 7.00
    }, {
        id: "p6",
        title: "Tanga",
        imgPath: "../assets/SAPunch.png",
        "bio": "Lorem Ipsum",
        price: 7.00
    }, {
        id: "p7",
        title: "Summer Water",
        imgPath: "../assets/SAPunch.png",
        "bio": "Lorem Ipsum",
        price: 7.00
    }, {
        id: "p8",
        title: "The Money",
        imgPath: "../assets/SAPunch.png",
        "bio": "Lorem Ipsum",
        price: 7.00
    }, {
        id: "p9",
        title: "Slim Thick",
        imgPath: "../assets/SAPunch.png",
        "bio": "Lorem Ipsum",
        price: 7.00
    }, {
        id: "p10",
        title: "Slim Thick",
        imgPath: "../assets/SAPunch.png",
        "bio": "Lorem Ipsum",
        price: 7.00
    }, {
        id: "p11",
        title: "Slim Thick",
        imgPath: "../assets/SAPunch.png",
        "bio": "Lorem Ipsum",
        price: 7.00
    }, {
        id: "p12",
        title: "Slim Thick",
        imgPath: "../assets/SAPunch.png",
        "bio": "Lorem Ipsum",
        price: 7.00
    }, {
        id: "p13",
        title: "Slim Thick",
        imgPath: "../assets/SAPunch.png",
        "bio": "Lorem Ipsum",
        price: 7.00
    }, {
        id: "p14",
        title: "Slim Thick",
        imgPath: "../assets/SAPunch.png",
        "bio": "Lorem Ipsum",
        price: 7.00
    }
];

  // const [cart, setCart] = useState([]);

  const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });

  const addProductToCart = product => {
    dispatch({ type: ADD_PRODUCT, product: product });
  };

  const removeProductFromCart = productId => {
    dispatch({ type: REMOVE_PRODUCT, productId: productId });
  };

  return (
    <ShopContext.Provider
      value={{
        products: products,
        cart: cartState.cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
}

export default GlobalState;
