import React, {Fragment} from 'react'
import context from 'react-bootstrap/esm/AccordionContext'
import Helmet from 'react-helmet'
import {useParams} from 'react-router-dom'
// context
import ShopContext from '../context/ShopContext'

function JuiceDetailPage({props, products}) {
    let {id} = useParams()
    
return (
        <ShopContext.Consumer>
           <Fragment>
               <Helmet>
                   <title>Juices | Juice Bar San Antonio</title>
                   <meta name="description" content="This juice was made with love by SqueezersCo"/>
               </Helmet>
               <main>
                   <div>
                       {context.products.map(product => (
                            <div key={id} className='juice-wrapper'>
                            <section>
                                <div>
                                    <div>
                                        <h1>{product.title}</h1>
                                    </div>
                                    <div></div>
                                </div>
                            </section>
                            <section>
                                <div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </section>
                            <section>
                                <div>
                                    <div></div>
                                </div>
                            </section>
                        </div>
                       ))}
                   </div>
               </main>
           </Fragment>
        </ShopContext.Consumer>
    )
}

export default JuiceDetailPage
