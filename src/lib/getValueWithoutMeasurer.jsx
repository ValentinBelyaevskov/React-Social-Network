const getValueWithoutMeasurer = (value) => (
   value.split("").slice(0, -2).join("")
);

export default getValueWithoutMeasurer;