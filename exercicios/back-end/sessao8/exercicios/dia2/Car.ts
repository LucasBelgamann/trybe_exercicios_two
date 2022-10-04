class Car {
  brand: string;
  color: string;
  doors: number;

  constructor(brand: string, color: string, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }
  honk(): void {
    console.log("honk honk");
  }

  turnOn(): void {
    console.log("aiin o carro ligou");
  }

  turnOff(): void {
    console.log("aiin o carro desligou");
  }

  speedUp(): void {
    console.log("o carro acelerou");
  }

  speedDown(): void {
    console.log("o carro desacelerar");
  }

  stop(): void {
    console.log("o carro desligou");
  }

  turn(direction: string): void {
    console.log(`o carro virou para a ${direction}`);
  }
}
