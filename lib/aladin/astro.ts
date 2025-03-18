function signNumber(theNumber: number) {
  return `${theNumber > 0 ? "+" : "-"}${Math.abs(theNumber)
    .toString()
    .padStart(2, "0")}`;
}

export function deg2hms({
  angle,
  sign = false,
}: {
  angle: number;
  sign: boolean;
}) {
  angle = angle / 15.0;
  const hrs = Math.floor(angle);
  const min = Math.floor((angle - hrs) * 60);
  let sec = Math.round(100 * (angle - hrs - min / 60) * 3600) / 100;
  if (sec < 0.000001) sec = 0.0;

  return {
    degrees: angle,
    hms: [hrs, min, sec],
    string: [
      sign ? signNumber(hrs) : hrs.toString().padStart(2, "0"),
      min.toString().padStart(2, "0"),
      sec
        .toFixed(2)
        .split(".")
        .map((v) => v.padStart(2, "0"))
        .join("."),
    ].join(":"),
  };
}
