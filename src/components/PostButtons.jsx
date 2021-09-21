const PostButtons = ({like, comment, repost}) => (
   <div className="post__buttons buttons">
      <button className="buttons__item buttons__like"><img src={like} /></button>
      <button className="buttons__item buttons__comment"><img src={comment} /></button>
      <button className="buttons__item buttons__repost"><img src={repost} /></button>
   </div>
)

export default PostButtons