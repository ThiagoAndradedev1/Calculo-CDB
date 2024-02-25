const calculateDiscountedValueCdb = (
  totalValue: number,
  months: number
): number => {
  if (months > 0 && months <= 6) {
    return totalValue * (22.5 / 100);
  }

  if (months > 6 && months <= 12) {
    return totalValue * (20 / 100);
  }

  if (months > 12 && months <= 24) {
    return totalValue * (17.5 / 100);
  }

  if (months > 24) {
    return totalValue * (15 / 100);
  }

  return -1;
};

export { calculateDiscountedValueCdb };
