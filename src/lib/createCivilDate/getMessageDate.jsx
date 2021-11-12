export const getMessageDate = (dateObjects, dateStrings) => {
   const time = dateStrings.time;
   let date;
   if ( dateObjects.civilPostDate.year < dateObjects.now.getFullYear() ) {
      date = `${dateStrings.date} ${dateStrings.year}`;
   } else if ( (dateObjects.now.getMonth() > dateObjects.postDate.getMonth()) || 
               ((dateObjects.now.getDate() - dateObjects.postDate.getDate() >= 2) && 
                (dateObjects.now.getMonth() == dateObjects.postDate.getMonth())) ) {
      date = dateStrings.date;
   } else if ( dateObjects.now.getMonth() == dateObjects.postDate.getMonth() && 
              dateObjects.now.getDate() - dateObjects.postDate.getDate() >= 1 ) {
      date = "yesterday";
   } else if ( dateObjects.differenceMs <= 24 * 60 * 60 * 1000 ) {
      date = "today";
   }

   return {time, date}
}