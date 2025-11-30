export const formatCustomNumber = (num) => {
  const str = num.toString();

  switch (str.length) {
    case 5:
      return str.slice(0, 2) + "," + str.slice(2);
    case 6:
      return str.slice(0, 3) + "," + str.slice(3);
    case 7:
      return str.slice(0, 1) + "," + str.slice(1, 4) + "," + str.slice(4);
    case 8:
      return str.slice(0, 2) + "," + str.slice(2, 5) + "," + str.slice(5);
    case 9:
      return str.slice(0, 3) + "," + str.slice(3, 6) + "," + str.slice(6);
    default:
      return str;
  }
};
