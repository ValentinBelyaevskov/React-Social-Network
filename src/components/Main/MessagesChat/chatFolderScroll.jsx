const chatFolderScroll = () => {
   let scrollHeight = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight,
   );
   let clientHeight = document.documentElement.clientHeight;
   document.documentElement.scrollTop = scrollHeight - clientHeight;
}

export default chatFolderScroll