import React, {Fragment} from 'react'
import {useParams} from 'react-router-dom'


function JuiceDetailPage(props) {
    let {id} = useParams()
    
return (
        <Fragment>
            <div key={id} className='juice-wrapper'>
                <section>
                    <div>
                        <div></div>
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
        </Fragment>
    )
}

export default JuiceDetailPage
