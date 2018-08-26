export class Car {

  name: string;
  chev: number;
  nbPort: number;
  description: string;

  constructor(values: Object={}) {
    Object.assign(this, values);
  }
}
