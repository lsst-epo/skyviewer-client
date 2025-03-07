/** Replace with [Intl.DurationFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat) some day when support is more widespread */
const formatDuration = (second: number) => {
  if (second < 0) second = -second;
  const time = {
    minute: Math.floor(second / 60),
    second: Math.floor(second) % 60,
  };

  return Object.values(time)
    .map((value) => value.toString().padStart(2, "0"))
    .join(":");
};

export default formatDuration;
