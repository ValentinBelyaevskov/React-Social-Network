import ActualItem from "./ActualItem";
import s from './Actual.module.css'
import adaptive from '../SidebarsAdaptive.module.css';
import callSetClassForHoverEv from "../../../lib/callSetClassForHoverEv";
import React from "react";

class Actual extends React.Component {
   constructor(props) {
      super(props);
   }

   componentDidMount () {
      callSetClassForHoverEv("Profile", "actual__trend--active", "actual__trend", "actual__item")
   }

   render() {
      return (
         <section className={`${s.actual} ${adaptive.actual} actual`}>
            <h3 className={s.title}>{this.props.appState.tags}</h3>
            {this.props.state.map((item, i) => (
               <ActualItem key={i} place={item.place} trend={item.trend} value={item.value} />
            ))}
         </section>
      )
   }
}

// callSetClassForHoverEv("Profile", "actual__trend--active", "actual__trend", "actual__item");

export default Actual