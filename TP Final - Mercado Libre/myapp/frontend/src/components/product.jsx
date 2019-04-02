import React from 'react';

const Product = props => {
    console.log(props.products)
    return (
        <section className="products">
            {props.products.map((prod, index) => {
                return (
                    <div key={`product-${index}`}>
                        <article className="article-products">
                            <img src={`${prod.picture}`} alt="product"/>
                            <p>${prod.price.amount}</p>
                            <p>{prod.free_shipping}</p>
                            <p>{prod.location}</p>
                            <p>{prod.title}</p>
                        </article>
                    </div>
                )
            })}
        </section>
    )
}


export default Product