export function getRandomNum(min, max) {
  if (!max) (max = min), (min = 0);
  return (Math.random() * (max - min + 1) + min) | 0;
}
