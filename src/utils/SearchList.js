import React from 'react'
import Card from "../utils/Card"

function SearchList({filteredProduct}) {
    const filtered = filteredProduct.map( product => <Card key={product.id} product={product}/>)
    return (
        <div>
            {filtered}
        </div>
    )
}

export default SearchList;