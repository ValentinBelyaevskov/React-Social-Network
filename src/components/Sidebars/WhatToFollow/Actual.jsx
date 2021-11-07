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
      this.props.setHoverClass()
   }

   render() {
      return (
         <section className={`${s.actual} ${adaptive.actual} actual`}>
            <h3 className={s.title}>{this.props.title}</h3>
            {this.props.actualItems.map((item, i) => (
               <ActualItem key={i} place={item.place} trend={item.trend} value={item.value} />
            ))}
         </section>
      )
   }
}

export default Actual