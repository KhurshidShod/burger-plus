export const formatCustomNumber = (num) => {
  const str = num.toString();

  if (str.length === 5) {
    return str.slice(0, 2) + "," + str.slice(2);
  } else if (str.length === 6) {
    return str.slice(0, 3) + "," + str.slice(3);
  } else {
    return str;
  }
};
