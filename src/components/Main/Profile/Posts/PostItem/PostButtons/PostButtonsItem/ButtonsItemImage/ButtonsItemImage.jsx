import s from './ButtonsItemImage.module.css'

const ButtonsItemImage = ({image}) => (
   <div className={`buttons__item-image ${s.buttonsItemImage}`}>
      <img src={image} />
   </div>
)

export default ButtonsItemImage