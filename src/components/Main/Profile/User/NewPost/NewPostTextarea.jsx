import React from "react";
import s from "./NewPostTextarea.module.css"

class NewPostTextarea extends React.Component {

   constructor(props) {
      super(props);
      // this.textarea = React.createRef();
   }

   // componentDidMount () {
   // }

   render() {
      return (
         <textarea
            className={s.textarea}
            value={this.props.textareaState.value}
            onInput={this.props.textareaState.onInput}
            ref={this.props.textareaState.ref}
            placeholder={this.props.textareaState.placeholder}
            type="text"
            name="new-post"
         />
      )
   }

}

export default NewPostTextarea