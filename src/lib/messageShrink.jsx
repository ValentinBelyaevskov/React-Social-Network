const messageShrink = message => (
   message.length > 40 ? `${message.split("").slice(0, 40).join("")}...` : message
)

export default messageShrink