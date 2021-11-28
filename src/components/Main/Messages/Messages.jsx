import s from './Messages.module.css'
import React from "react";
import MessagesSearchContainer from "./Dialogs/MessagesSearch/MessagesSearchContainer";
import DialogsContainer from "./Dialogs/DialogsContainer";
import setSidebarPositionAndSize from '../../../lib/setSidebarPosition/setSidebarPositionAndSize';
import zeroingScrollTop from '../../../lib/zeroingScrollTop';
import setPaddingRight from '../../../lib/setPaddingRight';
import mainScroll from '../../../lib/mainScroll';

class Messages extends React.Component {
   constructor(props) {
      super(props);
   }

   componentDidMount() {
      setSidebarPositionAndSize("fixed", "Messages");
      setPaddingRight();
      mainScroll("set");
   }

   componentWillUnmount () {
      mainScroll("save");
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