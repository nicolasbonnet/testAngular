import { Car } from './car';

describe('Car', () => {
  it('should create an instance', () => {
    expect(new Car()).toBeTruthy();
  });

  it('should modify and acceess to property', () => {
    let car = new Car();
    car.description = "one description";
    car.name = "name";
    car.nbPort = 5;

    expect(car.description).toEqual("one description");
    expect(car.name).toEqual("name");
    expect(car.nbPort).toEqual(5);
  });
});
