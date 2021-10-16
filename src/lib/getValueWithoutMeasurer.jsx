const getValueWithoutMeasurer = (value, measurerLength) => (
   value.split("").slice(0, -measurerLength).join("")
);

export default getValueWithoutMeasurer;