import React from 'react';
import './App.css';
import ReactGA from 'react-ga';

// intialize the property tracking ID
const tracking_id="G-1R65DNZP1P";

ReactGA.initialize(tracking_id);


// class TopBanner extends React.Component{

//     render(){

//         return(
//             <div className="top-banner" style={{color:"whitesmoke", fontWeight:"bold"}}>
//                 <marquee width="50%" direction="left">
//                     {this.props.bannerMessage}
//                 </marquee>
//             </div>
//         )
//     }
// }

// render the button
function Square(props){

    return(
        <button type='button' className='square' onClick={props.onClick}>
            {props.value}
        </button>
    )
}

// renders nine squares
class Board extends React.Component{

    // method to return the squares with a passed value
    displaySquare(i){
        return(
            <Square value={this.props.squares[i]}  onClick={()=>this.props.onClick(i)}/>
        )
    }

    render(){
        
        return(
            <div>
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

let lsxCounter=localStorage.getItem("localStoragexCounter");

let retrievedxCounter=parseInt(lsxCounter, 10);

let displayxCounter;

if(isNaN(retrievedxCounter)){
    displayxCounter=0
}else{
    displayxCounter=retrievedxCounter;
}

let lsoCounter=localStorage.getItem("localStorageoCounter");

let retrievedoCounter=parseInt(lsoCounter, 10);

let displayoCounter;

if(isNaN(retrievedoCounter)){
    displayoCounter=0
}else{
    displayoCounter=retrievedoCounter;
}

// render a board with placeholder values (0-8)
class Game extends React.Component{

    constructor(props){
        super(props);

        // declare state of nine null values in an array
        this.state={
            // fill each square in the array with a null value
            squares:Array(9).fill(null),
            // set player X as the default --or first player
            xIsNext:true, 
        }
    }

    handleClick=(i)=>{
        // create a copy of the array that will be modified --immutabillity
        const squares=this.state.squares.slice();

        // check if a player has won or the square is clicked
        if(calculateTheWinner(squares) || squares[i]){
            return;
        }

        // check which player is next --turn taking
        squares[i]=this.state.xIsNext? 'X':'O';

        this.setState({
            squares:squares,
            // update the next player
            xIsNext:!this.state.xIsNext, 
        })

    }

    // on this page/component being added to a tree, 
    componentDidMount(){

        // tracking the page views
        ReactGA.pageview(window.location.pathname);
    }
    
    render(){

        const winner=calculateTheWinner(this.state.squares);

        let nextPlayer;

        // if two of the responses are not returning draw   
        if(winner && winner!=='draw'){
            
            nextPlayer='Winner is: ' + winner +' !'

            // check if winner is X or O
 

        }else if(winner && winner==='draw'){
            nextPlayer='It is a ' + winner+' !'
        }
        else{
            nextPlayer='Next player is: ' + (this.state.xIsNext? 'X':'O')
        }

        // let message="Tie/Draw functionality will be added soon";

        return(
            <div>
                {/* <TopBanner bannerMessage={message}/> */}

                <div className='game'>



                    <div className='game-board'>
                        <div className='nextPlayer'>
                            {nextPlayer}
                        </div>
                        
                        < Board squares={this.state.squares} onClick={(i)=>this.handleClick(i)}/>
                    </div>

                    <div className='game-info'> 
                        <div>


                            <div className='winner-count-header'>
                                Winner count
                            </div>

                            <div className='winner-counter'>
                                <div className="display-counter">X: <span>{displayxCounter}</span></div>
                                <div className="display-counter">Draw: <span>0</span></div>
                                <div className="display-counter">O: <span>{displayoCounter}</span> </div>
                            </div>
                        </div>

                        <div className=""></div>

                    </div>

                </div>
            </div>


        )
    }
}
export default Game;

function calculateTheWinner(squares){

    const winnerCombinations=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    // compare whether any of the combinations has been achieved
    for(let i=0; i<winnerCombinations.length; i++){

        const [a, b, c] =winnerCombinations[i];

        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){

            // set timer before reloading
            if(squares[a]==="X"){

                if(localStorage.getItem("localStoragexCounter")===null){

                    localStorage.setItem("localStoragexCounter", "0")
    
                }else{
                    let xCounter=localStorage.getItem("localStoragexCounter");
    
                    localStorage.setItem("localStoragexCounter", xCounter.toString())
                }

                let latestxCounter=parseInt(localStorage.getItem("localStoragexCounter"), 10);

                latestxCounter=latestxCounter+1;

                localStorage.setItem("localStoragexCounter", latestxCounter.toString());

            }else{
                if(localStorage.getItem("localStorageoCounter")===null){

                    localStorage.setItem("localStorageoCounter", "0");
    
                }else{
    
                    let oCounter=localStorage.getItem("localStorageoCounter");
    
                    localStorage.setItem("localStorageoCounter", oCounter.toString());
                }

                let latestoCounter=parseInt(localStorage.getItem("localStorageoCounter"), 10);

                latestoCounter=latestoCounter+1;

                localStorage.setItem("localStorageoCounter", latestoCounter.toString());
            }

            setInterval(()=>{

                window.location.reload(true);
                
            }, 1000);

            return squares[a]; 

        }else if(!squares.includes(null)){

            setInterval(()=>{

                window.location.reload(true);

            }, 1000);

            return 'draw';
        }
    }

    // game continues since theres no winner or draw yet
    return null;
}