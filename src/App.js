import React, { Component } from 'react';
import './App.css';
import Circles from './Circles'
import CircleSelector from './CircleSelector'
let circlesArr = [{circleSelected:false}, {circleSelected:false}, {circleSelected:false}, {circleSelected:false}]
class App extends Component {
  constructor() {
    super()
    this.state = {
      circles: circlesArr
    }
  }

  selectCircle = (idx) => {
    console.log(this.state.circles)
    let newCircles = [...this.state.circles]
    let newCircle = {...newCircles[idx+1]}
    console.log(newCircle)
    let newStatus = newCircle.circleSelected
    console.log(newStatus)
    newStatus = true
    newCircle = {circleSelected: newStatus}
    console.log(newCircle)
    newCircles[idx] = newCircle
    
    console.log(newCircles)
    this.setState({circles: newCircles})

    
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector circles={this.state.circles} selectCircle={this.selectCircle}/>
          <Circles circles={this.state.circles} />
        </main>
      </div>
    );
  }
}

export default App;