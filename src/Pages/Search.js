import React, {Fragment, useState} from 'react'
import {Card} from 'react-bootstrap';
import Footer from '../components/Footer/Footer';
import MainNavigation from '../components/MainNavigation'
import ShopContext from '../context/ShopContext';
import './Search.css'

const product = [
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
        "bio": "Romaine, Apple, Pineapple",
        price: 7.00
    }, {
        id: "p3",
        title: "Love Potion",
        imgPath: "../assets/SAPunch.png",
        "bio": "Beet, Strawberries, Watermelon",
        price: 7.00
    }, {
        id: "p4",
        title: "Valley Girl",
        imgPath: "../assets/SAPunch.png",
        "bio": "Lemon, Lime, Grapefruit, Orange, Pineapple",
        price: 7.00
    }, {
        id: "p5",
        title: "SA Punch",
        imgPath: "../assets/SAPunch.png",
        "bio": "Watermelon, Pineapple, Grapefruit, Ginger,Beets",
        price: 7.00
    }, {
        id: "p6",
        title: "Tanga",
        imgPath: "../assets/SAPunch.png",
        "bio": "Pineapple, Cucumber,Lime",
        price: 7.00
    }, {
        id: "p7",
        title: "Summer Water",
        imgPath: "../assets/SAPunch.png",
        "bio": "Pineapple, Watermelon, Mint",
        price: 7.00
    }, {
        id: "p8",
        title: "The Money",
        imgPath: "../assets/SAPunch.png",
        "bio": "Kale, Ginger, Apple",
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

export default function Search() {
    const [searchTerm,
        setSearchTerm] = useState('');
    const [searchShow,
        setSearchShow] = useState(false);

    const filteredProduct = product.filter(product => {
        return (product.title.toLowerCase().includes(searchTerm.toLowerCase()) || product.bio.toLowerCase().includes(searchTerm.toLowerCase()))
    })

    const handleChange = e => {
        setSearchTerm(e.target.value);
        if (e.target.value === "") {
            setSearchShow(false)
        } else {
            setSearchShow(true)
        }
    }

    return (
        <ShopContext.Consumer>
            {context => (
                <Fragment >
                    <div>
                        <MainNavigation
                            cartItemNumber={context
                            .cart
                            .reduce((count, curItem) => {
                                return count + curItem.quantity;
                            }, 0)}/>
                    </div>
                    <div className="search-wrapper">
                        <input
                            className='search'
                            type="text"
                            placeholder='search names or ingredients'
                            value={searchTerm}
                            onChange={handleChange}
                            style={{
                            width: '100%'
                        }}/>
                    </div>

                    <div className='results'>
                        {filteredProduct.map(product => (
                            <Fragment>
                                <div key={product.id}>
                                    <Card className='text-center resultCard'>
                                        <Card.Img
                                            src={process.env.PUBLIC_URL + product.imgPath}
                                            variant="top"
                                            alt={product.imgPath}/>
                                        <Card.Body>
                                            <h5>{product.title}</h5>
                                            <p className="text-black">{product.bio}</p>
                                        </Card.Body>
                                        <Card.Footer
                                            style={{
                                            display: 'flex',
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            backgroundColor: "transparent",
                                            borderTopColor: "transparent"
                                        }}>
                                            <button className='btn btn-dark'>more info</button>
                                            <button
                                                onClick={context
                                                .addProductToCart
                                                .bind(this, product)}className="btn btn-dark">
                                                Add to Cart
                                            </button>

                                        </Card.Footer>
                                    </Card>
                                </div>
                            </Fragment>
                        ))}
                    </div>
                </Fragment>
            )}
        </ShopContext.Consumer>
    )
}
