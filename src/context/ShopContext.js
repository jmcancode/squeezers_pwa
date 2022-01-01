import React from "react";

export default React.createContext({
  products: [
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
        "bio": "romaine, apple, lime",
        price: 7.00
    }, {
        id: "p3",
        title: "Love Potion",
        imgPath: "../assets/SAPunch.png",
        "bio": "beet, strawberries and watermelon",
        price: 7.00
    }, {
        id: "p4",
        title: "Valley Girl",
        imgPath: "../assets/SAPunch.png",
        "bio": "lemon, lime, grapefruit, orange, pineapple",
        price: 7.00
    }, {
        id: "p5",
        title: "SA Punch",
        imgPath: "../assets/SAPunch.png",
        "bio": "watermelon, pineapple, grapefruit, ginger, beets",
        price: 7.00
    }, {
        id: "p6",
        title: "Tanga",
        imgPath: "../assets/SAPunch.png",
        "bio": "pineapple, cucumber, lime",
        price: 7.00
    }, {
        id: "p7",
        title: "Summer Water",
        imgPath: "../assets/SAPunch.png",
        "bio": "pineapple, watermelon, mint",
        price: 7.00
    }, {
        id: "p8",
        title: "The Money",
        imgPath: "../assets/SAPunch.png",
        "bio": "kale, ginger, apple",
        price: 7.00
    }, {
        id: "p9",
        title: "Slim Thick",
        imgPath: "../assets/SAPunch.png",
        "bio": "Pineapple, Banana, and Oat Milk base. (Pineapple Juice base per request)",
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
  ],
  cart: [],

  addProductToCart: product => {},
  removeProductFromCart: productId => {}
});
