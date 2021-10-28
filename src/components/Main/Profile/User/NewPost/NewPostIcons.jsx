import s from "./NewPostIcons.module.css";

const NewPostIcons = ({number, image}) => (
   <div key={number} className={s.iconsItem}>
      <img key={number} src={image} alt="New post icon" />
   </div>
)

export default NewPostIcons;