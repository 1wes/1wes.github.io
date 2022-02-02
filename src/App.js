import React from 'react';

// render the button
class Square extends React.Component{

    render(){
        return(
            <button type="button" className="square"> 
                {/* to do later on */}
            </button>
        )
    }
}

// renders nine squares
class Board extends React.Component{

    // method to return the squares
    displaySquare(i){
        return(
            <Square />
        )
    }

    render(){

        // next player
        const nextPlayer="Next Player: X";

        return(
            <div>
                <div>
                    {nextPlayer}
                </div>

                {/* use div to display a bunch of three blocks and not inline squares */}
                <div className='board-row'>
                    {this.displaySquare(0)}
                    {this.displaySquare(1)}
                    {this.displaySquare(2)}
                </div>

                <div className='board-row'>
                    {this.displaySquare(3)}
                    {this.displaySquare(4)}
                    {this.displaySquare(5)}
                </div>

                <div className='board-row'>
                    {this.displaySquare(6)}
                    {this.displaySquare(7)}
                    {this.displaySquare(8)}
                </div>
            </div>
        )
    }
}

// render a board with placeholder values
class Game extends React.Component{

    render(){
        return(
            <div className='game'>
                <div className='game-board'>
                    < Board />
                </div>

                <div className='game-infor'> 
                    <div>
                        {/* status */}
                    </div>

                    <div>
                        {/* To Do */}
                    </div>
                </div>

            </div>
        )
    }
}
export default Game;