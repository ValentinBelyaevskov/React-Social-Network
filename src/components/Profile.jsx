import React from "react";

const Profile = () => {
   return (
      <div className="profile">

      <div className="user">
         <div className="user__avatar-wrapper">
            <div className="user__avatar">
               <img src="https://i.pinimg.com/564x/91/97/f2/9197f24f198f0e93d062e66a702d3be4.jpg" alt="" />
            </div>
         </div>

         <section className="user__data">
            <h2 className="user__name">Ivanov Ivan</h2>

            <div className="user__data-properties">
               <div className="user__date-of-birth">Date of Birth:</div>
               <div className="user__city">City:</div>
               <div className="user__city">Education:</div>
               <div className="user__city">E-mail:</div>
            </div>

            <div className="user__data-values">
               <div className="user__date-of-birth">03.05.1995</div>
               <div className="user__city">Moscow</div>
               <div className="user__city">Lomonosov MSU</div>
               <div className="user__city">ivanovivan@mail.ru</div>
            </div>
         </section>
      </div>   {/* user */}

      <section className="new-post">
         <h2 className="new-post__header">New post</h2>

         <form className="new-post__form">
            <input className="new-post__input" type="text" placeholder="Your news" />
            <button className="new-post__button">Send</button>
         </form>
      </section>

      <div className="posts">

         {/* new post */}
         <div className="post-item post">
            <div className="post__author author">
               <div className="author__image">
                  <img src="https://i.pinimg.com/564x/91/97/f2/9197f24f198f0e93d062e66a702d3be4.jpg" alt="" />
               </div>

               <div className="author__name">
                  Ivan Ivanov
               </div>
               <div className="author__date">
                  July 21 at 21:19
               </div>
            </div>

            <div className="post__text">Post text</div>

            <div className="post__image">
               <img src="https://i.pinimg.com/564x/51/90/ac/5190acde39a10ebd71d2edf193bbc9da.jpg" alt="" />
            </div>

            <div className="post__buttons buttons">
               <button className="buttons__item buttons__like"><img src="4213423-active-favorite-heart-like-love-romantic_115369.svg" /></button>
               <button className="buttons__item buttons__comment"><img src="comments_alt_icon_125319 (1).svg" /></button>
               <button className="buttons__item buttons__repost"><img src="share-symbol_icon-icons.com_73418.svg" /></button>
            </div>
         </div>

         {/* new post */}
         <div className="post-item post">
            <div className="post__author author">
               <div className="author__image">
                  <img src="https://i.pinimg.com/564x/91/97/f2/9197f24f198f0e93d062e66a702d3be4.jpg" alt="" />
               </div>

               <div className="author__name">
                  Ivan Ivanov
               </div>
               <div className="author__date">
                  May 14 at 19:05
               </div>
            </div>

            <div className="post__text">Post text</div>

            <div className="post__image">
               <img src="https://i.pinimg.com/564x/88/7c/8f/887c8fc7bb7fcfe15eb3a7139095254a.jpg" alt="" />
            </div>

            <div className="post__buttons buttons">
               <button className="buttons__item buttons__like"><img src="4213423-active-favorite-heart-like-love-romantic_115369.svg" /></button>
               <button className="buttons__item buttons__comment"><img src="comments_alt_icon_125319 (1).svg" /></button>
               <button className="buttons__item buttons__repost"><img src="share-symbol_icon-icons.com_73418.svg" /></button>
            </div>
         </div>

         {/* new post */}
         <div className="post-item post">
            <div className="post__author author">
               <div className="author__image">
                  <img src="https://i.pinimg.com/564x/91/97/f2/9197f24f198f0e93d062e66a702d3be4.jpg" alt="" />
               </div>

               <div className="author__name">
                  Ivan Ivanov
               </div>
               <div className="author__date">
                  May 14 at 19:05
               </div>
            </div>

            <div className="post__text">Post text</div>

            <div className="post__image">
               <img src="https://i.pinimg.com/564x/7b/ce/db/7bcedb2bededd5f48ed0c847ab4b6745.jpg" alt="" />
            </div>

            <div className="post__buttons buttons">
               <button className="buttons__item buttons__like"><img src="4213423-active-favorite-heart-like-love-romantic_115369.svg" /></button>
               <button className="buttons__item buttons__comment"><img src="comments_alt_icon_125319 (1).svg" /></button>
               <button className="buttons__item buttons__repost"><img src="share-symbol_icon-icons.com_73418.svg" /></button>
            </div>
         </div>
      {/* post */}
      </div>
   {/* posts */}
   </div>
   )
}

export default Profile;