export const randRng = (min:number, max:number)  => {
  if (min < 0) {
    return Math.floor(Math.random() * max);
  } else {
    return Math.floor(Math.random() * (max + min));
  }
};

export const randDate = ()  => {
  const now = new Date();
  const month = Math.floor(Math.random() * 12)  + 1;
  const year = now.getFullYear() + Math.floor(Math.random() *  5);
  return {
    month,
    year
  }
}