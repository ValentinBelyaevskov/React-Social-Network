import s from './Messages.module.css'
import React from "react";
import zeroingTheScroll from "../../../lib/zeroingTheScroll";
import MessagesSearchContainer from "./Dialogs/MessagesSearch/MessagesSearchContainer";
import DialogsContainer from "./Dialogs/DialogsContainer";
import setSidebarPosition from '../../../lib/setSidebarPosition/setSidebarPosition';

class Messages extends React.Component {
   constructor(props) {
      super(props);
   }

   componentDidMount() {
      zeroingTheScroll();
      setSidebarPosition("fixed");
   }

   render() {
      return (
         <div className={`${s.messages} messages`}>
            <MessagesSearchContainer/>
            <DialogsContainer/>
         </div>
      )
   }
}

export default Messages