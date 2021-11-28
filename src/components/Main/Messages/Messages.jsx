import s from './Messages.module.css'
import React from "react";
import zeroingTheScroll from "../../../lib/zeroingTheScroll";
import MessagesSearchContainer from "./Dialogs/MessagesSearch/MessagesSearchContainer";
import DialogsContainer from "./Dialogs/DialogsContainer";
import setSidebarPositionAndSize from '../../../lib/setSidebarPosition/setSidebarPositionAndSize';
import zeroingScrollTop from '../../../lib/zeroingScrollTop';
import setPaddingRight from '../../../lib/setPaddingRight';

class Messages extends React.Component {
   constructor(props) {
      super(props);
   }

   componentDidMount() {
      zeroingTheScroll();
      setSidebarPositionAndSize("fixed", "Messages");
      setPaddingRight();
   }

   componentWillUnmount () {
      zeroingScrollTop();
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