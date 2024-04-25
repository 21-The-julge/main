const remove = <T>(arr: T[], value: T): T[] => {
  return arr.filter((ele) => ele !== value);
};

export default remove;
