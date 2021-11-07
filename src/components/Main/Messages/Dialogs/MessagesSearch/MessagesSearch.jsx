import React from 'react'
import Input from '../../../../generic/Input';
import s from './MessagesSearch.module.css'

class MessagesSearch extends React.Component {

   constructor(props) {
      super(props);
      this.messagesSearchText = React.createRef();
   }

   componentDidMount() {
      this.props.inputListener("");
   }

   render() {
      return (<div className={`${s.messagesSearch} message__search`}>
         <div className={`${s.messagesSearchWrapper} message__search-wrapper`}>
            <form className={s.messagesForm}>
               <div onClick={this.props.searchClickListener}>
                  <img src={this.props.searchIcon} alt="message search icon" />
               </div>
               <Input
                  dispatch={this.props.dispatch}
                  inputState={
                     {
                        onInputHandler: () => this.props.inputListener(this.messagesSearchText.current.value),
                        value: this.props.text,
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
               <img src={this.props.groupChatIcon} alt="create a group chat" />
            </div>
            <div className={`${s.messagesIcon} messages__icon-other`}>
               <img src={this.props.otherIcon} alt="create a group chat" />
            </div>
         </div>
      </div>)
   }

}

export default MessagesSearch