import s from './PersonMessage.module.css'

const PersonMessage = ({message}) => (
   <div className={s.personMessage}>
      {message}
   </div>
)

export default PersonMessage