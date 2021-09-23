import s from './PersonName.module.css'

const PersonName = ({name}) => (
   <div className={s.personName}>
      {name}
   </div>
)

export default PersonName