import { calculateDiscountedValueCdb } from './investment-calculation.util';

describe('InvestimentCalculationUtil', function () {
  it('should return 22.5 percent when the number of months is less than six', function () {
    expect(calculateDiscountedValueCdb(1000, 1)).toEqual(225);
  });

  it('should return 20 percent when the number of months is greater than six and less than twelve', function () {
    expect(calculateDiscountedValueCdb(1000, 12)).toEqual(200);
  });

  it('should return 17.5 percent when the number of months is greater than twelve and less than twenty four', function () {
    expect(calculateDiscountedValueCdb(1000, 24)).toEqual(175);
  });

  it('should return 15 percent when the number of months is greater than twenty four', function () {
    expect(calculateDiscountedValueCdb(1000, 60)).toEqual(150);
  });

  it('should return -1 when the numbers of months is invalid', function () {
    expect(calculateDiscountedValueCdb(1000, -1)).toEqual(-1);
  });
});
