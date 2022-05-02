import React from 'react';
import Layout from '../Header&Footer/Layout'

function Instructions(){

    return(
        <main style={{color:"whitesmoke"}}>
            <h3>
                Instructions coming soon....
            </h3>
        </main>
    )
}

class Howtoplay extends React.Component{

    render(){

        return(
            <div>
                <Layout />

                <Instructions />
            </div>
        )
    }
}
export default Howtoplay;