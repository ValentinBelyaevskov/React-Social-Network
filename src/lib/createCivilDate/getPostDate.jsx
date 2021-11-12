export const getPostDate = (dateObjects, dateStrings) => {
   if ( dateObjects.civilPostDate.year < dateObjects.now.getFullYear() ) {
      return `${dateStrings.date} ${dateStrings.year} at ${dateStrings.time}`;
   } else if ( (dateObjects.now.getMonth() > dateObjects.postDate.getMonth()) || 
               ((dateObjects.now.getDate() - dateObjects.postDate.getDate() >= 2) && 
                (dateObjects.now.getMonth() == dateObjects.postDate.getMonth())) ) {
      return `${dateStrings.date} at ${dateStrings.time}`;
   } else if ( dateObjects.now.getMonth() == dateObjects.postDate.getMonth() && 
               dateObjects.now.getDate() - dateObjects.postDate.getDate() >= 1 ) {
      return `yesterday at ${dateStrings.time}`;
   } else if ( dateObjects.differenceMs > 4 * 60 * 60 * 1000 &&
               dateObjects.now.getMonth() == dateObjects.postDate.getMonth() &&
               dateObjects.now.getDate() == dateObjects.postDate.getDate() ) {
      return `today at ${dateStrings.time}`;
   } else if ( dateObjects.differenceMs > 1 * 60 * 60 * 1000 ) {
      return `${dateObjects.havePassed.hours} hours ago`;
   } else if ( dateObjects.differenceMs > 60 * 1000 ) {
      return `${dateObjects.havePassed.minutes} minutes ago`;
   } else if ( dateObjects.differenceMs <= 60 * 1000 ) {
      return "just now";
   }
}