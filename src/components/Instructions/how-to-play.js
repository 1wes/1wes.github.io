import React from 'react';
import Layout from '../Header&Footer/Layout'
import './how-to-play.css'

function Instructions(){

    return(
        <main className='main-container' style={{color:"whitesmoke"}}>
            <h3>
                How to play Tic-Tac-Toe
            </h3>

            {/* container for instructions */}
            <div>

                {/* container with the layout */}
                <div className='main-content'>
                    <ul className='instructions-list'>
                        <li className='instruction'>
                            <div className='instruction-number'>
                                <span>1</span> 
                            </div>

                            <p> The game is played on a grid that's 3 squares by 3 squares.</p>
                        </li>
                        <li className='instruction'>
                            <div className='instruction-number'>
                                <span>2</span> 
                            </div>

                            <p>One player is <span id='x'>X</span>, and the other is <span id='o'>O</span>. Players take turns putting their marks in empty squares</p>
                        </li>
                        <li className='instruction'>
                            <div className='instruction-number'>
                                <span>3</span>
                            </div>

                            <p>The first player to get 3 of their marks in a row (up, down, across, or diagonally) is the winner</p>

                        </li>

                        <li className='instruction'>
                            <div className='instruction-number'>
                                <span>4</span>
                            </div>

                            <p>When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.</p>
                        </li>

                    </ul>

                    <div className='video-option'>
                        or do you prefer to watch a video?
                    </div>

                    <div className='video-player'>
                        <iframe className='video-frame' width="700" height="275" src="https://www.youtube.com/embed/5SdW0_wTX5c" title="YouTube video player" 
                            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                        </iframe>
                    </div>
                </div>
            </div>
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