import React from "react"
import s from "./Textarea.module.css"

class Textarea extends React.Component {
   constructor(props) {
      super(props);
      this.textareaRef = React.createRef();
   }

   componentDidMount () {
      this.props.callbacks.changeText("");
   }

   componentDidUpdate () {
      this.props.callbacks.changeWindowSize(this.textareaRef.current)
   }

   inputHandler () {
      this.props.callbacks.changeText(this.textareaRef.current.value);
      this.props.callbacks.changeWindowSize(this.textareaRef.current)
   }

   render() {
      return (
         <textarea
            rows="1"
            cols="10"
            className={s.textarea}
            style={this.props.textareaState.style}
            value={this.props.textareaState.value}
            placeholder={this.props.textareaState.placeholder}
            ref={this.textareaRef}
            onInput={() => this.inputHandler()}
            type="text"
            name="textarea"
         />
      )
   }
}

export default Textarea