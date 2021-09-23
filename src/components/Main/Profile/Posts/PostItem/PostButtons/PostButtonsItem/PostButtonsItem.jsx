import ButtonsItemImage from './ButtonsItemImage/ButtonsItemImage';
import ButtonsItemValue from './ButtonsItemValue/ButtonsItemValue';
import s from './PostButtonsItem.module.css'

const ButtonsItem = ({ image, className, value }) => (
   <button className={`${className} ${s.buttonsItem}`}>
      <ButtonsItemImage image={image}/>
      <ButtonsItemValue value={value}/>
   </button>
)

export default ButtonsItem