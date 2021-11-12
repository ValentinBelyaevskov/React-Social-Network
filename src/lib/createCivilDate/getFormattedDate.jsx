import getCivilDate from "./getCivilDate";
import { getPostDate } from "./getPostDate";
import { getDialogDate } from "./getDialogDate";
import { getMessageDate } from "./getMessageDate";

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