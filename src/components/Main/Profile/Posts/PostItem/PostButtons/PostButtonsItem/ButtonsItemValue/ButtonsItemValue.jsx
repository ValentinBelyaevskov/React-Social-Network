import s from './ButtonsItemValue.module.css'

const ButtonsItemValue = ({value}) => (
   value == 0 ? "": <div className={s.buttonsItemValue}>{value}</div>
)

export default ButtonsItemValue