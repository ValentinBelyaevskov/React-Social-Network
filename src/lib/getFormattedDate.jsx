import getCivilDate from "./getCivilDate";

const getPostDate = (dateObjects, dateStrings) => {
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

const getDialogDate = (dateObjects, dateStrings) => {
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

const getMessageDate = (dateObjects, dateStrings) => {
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

const getFormattedDate = (postDateStr, contentType) => {
   const dateObjects = {
      now: new Date(),
      postDate: new Date(postDateStr),
      differenceMs: new Date().getTime() - new Date(postDateStr).getTime(),
      civilPostDate: getCivilDate(postDateStr),
      havePassed: {
         minutes: new Date().getMinutes() < new Date(postDateStr).getMinutes() ? ((new Date().getMinutes() + 60) - new Date(postDateStr).getMinutes()) : (new Date().getMinutes() - new Date(postDateStr).getMinutes()),
         hours: new Date().getHours() < new Date(postDateStr).getHours() ? ((new Date().getHours() + 24) - new Date(postDateStr).getHours()) : (new Date().getHours() - new Date(postDateStr).getHours()),
      }
   }

   const dateStrings = {
      time: `${dateObjects.civilPostDate.hours}:${dateObjects.civilPostDate.minutes} ${dateObjects.civilPostDate.amOrPm}`,
      date: `${dateObjects.civilPostDate.day} ${dateObjects.civilPostDate.month}`,
      year: `${dateObjects.civilPostDate.year}`,
   }

   if (contentType === "posts") {
      return getPostDate(dateObjects, dateStrings);
   } else if (contentType === "dialog") {
      return getDialogDate(dateObjects, dateStrings);
   }  else if (contentType === "message") {
      return getMessageDate(dateObjects, dateStrings);
   }
}

export default getFormattedDate;