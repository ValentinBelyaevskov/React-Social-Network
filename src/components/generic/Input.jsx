import s from "./Input.module.css"

const Input = ({inputState}) => {
   return (
      <input
         value={inputState.value}
         style={inputState.style}
         className={`${s.input}`}
         type="text"
         placeholder={inputState.placeholder}
         ref={inputState.refContent}
         onInput={inputState.onInputHandler}
      />
   )
}


export default Input