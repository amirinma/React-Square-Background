import React from 'react';
import './App.css';
import Square from './Square';
import Boxes from './Boxes';

function App() {
  const [squares, setSquares]=React.useState(Boxes)

  function toggle(id){
    setSquares((oldState)=>{
      const newSquares = []
      for (let i=0; i < oldState.length; i++){
        const currentSquare = oldState[i]
        if (currentSquare.id === id){
          newSquares.push({
            ...currentSquare, 
            on: !currentSquare.on
          })
        } else {
          newSquares.push(currentSquare)
        }
      }
      return newSquares
    })
  }

  const renderSqr = squares.map(each => (
    <Square 
    id = {each.id}
    on = {each.on}
    toggle = {toggle}
    />
 ))

  return (
    <div className="App">
      {renderSqr}
    </div>
  );
}

export default App;
