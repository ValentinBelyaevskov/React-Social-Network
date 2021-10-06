import s from './ActualItem.module.css'

const ActualItem = ({place, trend, value}) => {
   return (<div className={`${s.actualItem} actual__item`}>
      <div className={`${s.place} actual__place`}>{`Popular in ${place}`}</div>
      <div className={`${s.trend} actual__trend`}>{trend}</div>
      <div className={`${s.value} actual__value`}>{`${value} posts`}</div>
   </div>);
}

export default ActualItem