import AgeCalculator from '../src/js/agecalculator.js';

describe('AgeCalculator', () => {

  test('should correctly calculate mercury age correctly', () => {
    const ageCalculator = new AgeCalculator(24);
    expect(ageCalculator.mercuryAge).toBe(100);
  });

  test('should correctly determine whether three lengths are not a triangle', () => {
    const notTriangle = new Triangle(3,9,22);
    expect(notTriangle.checkType()).toEqual("not a triangle");
  });

});