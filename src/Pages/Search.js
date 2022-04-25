import React, {Fragment, useState} from 'react'
import ShopContext from '../context/ShopContext';
import './Search.css'
// custom utils
import Scroll from "../utils/Scroll"
import SearchList from '../utils/SearchList';
import Helmet from 'react-helmet';
// animated
import AnimatedPage from '../AnimatedPage';

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
    });

    const handleChange = e => {
        setSearchTerm(e.target.value);
        if (e.target.value === "") {
            setSearchShow(false)
        } else {
            setSearchShow(true)
        }
    };

    function searchList() {
        if (searchShow) {
            return (
                <Scroll>
                    <SearchList filteredProduct={filteredProduct}/>
                </Scroll>
            )
        }
    }

    return (
        <Fragment>
            <AnimatedPage>
                <ShopContext.Consumer>
                    {context => (
                        <Fragment
                            style={{
                            height: '90vh'
                        }}>

                            <Helmet>
                                <title>Search juices, smoothies, bowls</title>
                                <meta
                                    name="description"
                                    content="Search our menu for the latest juices, smoothies, and bowls made fresh daily with local produce. Visit us at our downtown San Antonio, Texas location."/>
                            </Helmet>
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
                            <div className='searchResults'>
                                {searchList()}
                            </div>
                        </Fragment>
                    )}
                </ShopContext.Consumer>
            </AnimatedPage>
        </Fragment>
    )
}
