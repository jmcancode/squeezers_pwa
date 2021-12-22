import React from 'react'

function Card({product}) {
    return (
        <div style={{
            backgroundColor: '#fff',
            padding: '15px'
        }}>
            <div>
                <img src={process.env.PUBLIC_URL + product.imgPath} alt={product.title}/>
            </div>
            <div>
                <h2>{product.title}</h2>
                <div>
                    <p>{product.bio}</p>
                </div>
            </div>
        </div>
    )
}

export default Card