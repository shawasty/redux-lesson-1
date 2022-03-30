import { connect } from 'react-redux'
import './App.css';

// connect is a function which connects your state to the component 
//that you are importing to, 
// move down to call connect()

// 3 principles of redux
//1. Single source of truth
// 2.state is read only: immutable
//3. Changes are made using pure functions, aka reducers

//Action: is something that a user does (like clicking a button)




function App(props) {

  const handleInc = (event)=> {
    props.dispatch({
      type: 'INCREMENT'
    })
    //dispatch specifically comes from store, what it does is it accepts an object which is used to update the redux stATE   
  }

  const handleDec = (event)=>{
    props.dispatch({
      type: 'DECREMENT'
    })
  }


  return (
    <div className="App">
     <header>
       <button onClick={handleInc}> Increment</button>
       <button onClick={handleDec}>Decrement</button>
       <p>{props.count}</p>
     </header>
    </div>
  );
// ctreate function that connect will use to pass data down

}
const mapStateToProps = (state) =>{
  return {
    count : state.count
  }
}

export default connect(mapStateToProps) (App);
