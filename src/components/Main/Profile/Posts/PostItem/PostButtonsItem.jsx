import s from './PostButtonsItem.module.css'

const ButtonsItem = ({ image, className, value }) => (
   <button className={`${className} ${s.buttonsItem}`}>
      <div className={`buttons__item-image ${s.image}`}>
         <img src={image} alt=""/>
      </div>
      {value === 0 ? "": <div className={`${s.value}`}>{value}</div>}
   </button>
)

export default ButtonsItem