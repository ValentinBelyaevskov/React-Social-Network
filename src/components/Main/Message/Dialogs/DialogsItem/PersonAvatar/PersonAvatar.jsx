import s from './PersonAvatar.module.css'

const PersonAvatar = ({image}) => (
   <div className={`${s.personAvatar} messages__person-avatar`}>
      <img src={image} alt="person avatar" />
   </div>
)

export default PersonAvatar