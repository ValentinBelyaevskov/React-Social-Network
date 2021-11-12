export const getDialogDate = (dateObjects, dateStrings) => {
   if ( dateObjects.civilPostDate.year < dateObjects.now.getFullYear() ) {
      return `${dateStrings.date} ${dateStrings.year}`;
   } else if ( (dateObjects.now.getMonth() > dateObjects.postDate.getMonth()) || 
               ((dateObjects.now.getDate() - dateObjects.postDate.getDate() >= 2) && 
                (dateObjects.now.getMonth() == dateObjects.postDate.getMonth())) ) {
      return dateStrings.date;
   } else if ( dateObjects.now.getMonth() == dateObjects.postDate.getMonth() && 
              dateObjects.now.getDate() - dateObjects.postDate.getDate() >= 1 ) {
      return "yesterday";
   } else if ( dateObjects.differenceMs <= 24 * 60 * 60 * 1000 ) {
      return dateStrings.time;
   }
}