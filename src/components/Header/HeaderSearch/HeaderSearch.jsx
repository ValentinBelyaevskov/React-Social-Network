import React from "react"
import Input from "../../generic/Input"
import s from "./HeaderSearch.module.css"

class HeaderSearch extends React.Component {

   constructor(props) {
      super(props);
      this.textInput = React.createRef();
   }
   
   componentDidMount () {
      this.props.changeInputText("");
   }

   render () {
      return (
         <div className={`${s.headerSearch} search`}>
            <form className={s.searchForm}>
               <div onClick={() => this.props.headerSearch()} className={`${s.searchImage} search__image`}>
                  <img src={this.props.logo} alt="" />
               </div>
               <Input
                  inputState={
                     {
                        value: this.props.text,
                        placeholder: "Search",
                        refContent: this.textInput,
                        style: {
                           padding: "0 0.7rem",
                           fontSize: "var(--main-fz)",
                        },
                        onInputHandler: () => this.props.changeInputText.call(this, this.textInput.current.value),
                     }
                  } />
            </form>
         </div>
      )
   }

}

export default HeaderSearch