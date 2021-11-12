import ControlsItem from "./ControlsItem"
import s from "./Controls.module.css"
import adaptive from "../SidebarsAdaptive.module.css"

const Controls = ({controlsButtons}) => {
   // console.log('Render: "Controls"');
   return (
      // Класс sidebar__wrapper имеет z-index, вынесен в общий файл App.css
      <aside className={`${s.controls} controls`}>
         <ul className={`${s.controlsList} ${adaptive.controlsList}`}>
            {controlsButtons.map(
               (item, i) => (<ControlsItem key={i} text={item} to={`/${item}`} />)
            )}
         </ul>
      </aside>
   )
}

export default Controls