import React from 'react'
import { changeDialogsSearchTextActionCreator, dialogsSearchActionCreator } from '../../../../../redux/store';
import Input from '../../../../generic/Input';
import s from './MessagesSearch.module.css'

// class MessagesSearch extends React.Component = ({ state, appState, dispatch }) => {
class MessagesSearch extends React.Component {

   constructor(props) {
      super(props);
      this.time = Date.now();
      this.messagesSearchText = React.createRef();
   }

   componentDidMount() {
      let action = changeDialogsSearchTextActionCreator("");
      this.props.dispatch(action);
   }
      
      searchClickListener() {
         let action = dialogsSearchActionCreator();
         this.props.dispatch(action);
         action = changeDialogsSearchTextActionCreator("")
         this.props.dispatch(action);
      }
      
      inputListener() {
      // debugger
      let action = changeDialogsSearchTextActionCreator(this.messagesSearchText.current.value)
      this.props.dispatch(action);
      console.log(`inputListener ${Date.now() - this.time}`)
   }

   render() {
      return (<div className={`${s.messagesSearch} message__search`}>
         <div className={`${s.messagesSearchWrapper} message__search-wrapper`}>
            <form className={s.messagesForm}>
               <div onClick={() => this.searchClickListener()} className={s.searchIcon}>
                  <img src={this.props.appState.searchIcon} alt="message search icon" />
               </div>
               <Input
                  dispatch={this.props.dispatch}
                  inputState={
                     {
                        onInputHadler: () => this.inputListener(),
                        value: this.props.state,
                        refContent: this.messagesSearchText,
                        placeholder: "Search",
                        style: {
                           padding: "0 0.7rem",
                           fontSize: "var(--main-fz)",
                        }
                     }
                  }
               />
            </form>
            <div className={`${s.messagesIcon} messages__icon`}>
               <img src={this.props.appState.groupChatIcon} alt="create a group chat" />
            </div>
            <div className={`${s.messagesIcon} messages__icon-other`}>
               <img src={this.props.appState.otherIcon} alt="create a group chat" />
            </div>
         </div>
      </div>)
   }

}

export default MessagesSearch