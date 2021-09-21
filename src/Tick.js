import React from 'react';
import ReactDOM from 'react-dom';

// ? Часы

class Clock extends React.Component {

   constructor(props) {
      super(props);
      this.state = {date: new Date()}
   }

   render() {
      return (
         <React.StrictMode>
         <div>
            <h1>Привет, мир!</h1>
            <h2>Сейчас: {this.state.date.toLocaleTimeString()}.</h2>
         </div>
      </React.StrictMode>
      )
   }

}


function tick() {
   const element = (
      <Clock />
   );
   ReactDOM.render(
      element,
      document.getElementById('root')
   );
}


export default tick;
