// in this workshop using classes, create a 'car' in JavaScript that has the following features

// a car starts with 100% fuel. it cannot go above 100% or below 0%

//a car can accelerates or reverses, it loses fuel

//if a car has no fuel, the car cannot accelerate or reverse

//a car travels a distance as an integer.
// When it accelerates, it increases its distance
// When it reverses, it decreases its distance (can become a negative number)

// Based on the amount of pressure put on the pedal, the amount traveled while accelerating or reversing is increased

// a car has these traits showcased as an object
// const example = {
//   name: "CRV",
//   distance: 0,
//   // remember you cannot do direct percents in JS. 100% is not a usable value
//   fuel: 100,
//   pedalPressure: 0,
// };

class Car {
  // constructor is done
  constructor(name) {
    this.name = name;
    this.distance = 0;
    this.fuel = 100;
    this.pedalPressure = 0;
    this.element = document.createElement("div");
    this.element.className = "car";
    this.render();
  }

  changePedalPressure(vl) {
    this.pedalPressure += vl;
    this.render();
  }

  addPedalPressure() {
    this.changePedalPressure(1);
  }

  subtractPedalPressure() {
    this.changePedalPressure(-1);
  }

  accelerate() {
    if (this.fuel > 0) {
      this.distance += this.pedalPressure;
      this.useFuel();
    } else {
      alert("You've ran out of fuel buddy!");
    }
    this.render();
  }

  reverse() {
    if (this.fuel > 0) {
      this.distance -= this.pedalPressure;
      this.useFuel();
    } else {
      alert("Now look at you, useless with no fuel!");
    }
    this.render();
  }

  useFuel() {
    this.fuel -= this.pedalPressure * 0.1;

    // Fuel will stay within 0-100 range..
    this.fuel = Math.max(0, Math.min(100, this.fuel));
  }

  checkFuel() {
    console.log(`${this.name} has ${this.fuel.toFixed(2)}% fuel remaining.`);
  }

  refuel() {
    this.fuel = 100;
    console.log(`${this.name} has been refueled.`);
    this.render();
  }

  render() {
    this.element.innerHTML = `
    <h2>${this.name}</h2>
    <p>Fuel: <span id="${this.name}-fuel">${this.fuel.toFixed(2)}</span>%</p>
    <p>Distance: ${this.distance}</p>
    <p>Pedal Pressure: ${this.pedalPressure}</p>
    <button onclick="${this.name}.accelerate()">Accelerate</button>
    <button onclick="${this.name}.reverse()">Reverse</button>
    <button onclick="${this.name}.checkFuel()">Check Fuel</button>
    <button onclick="${this.name}.refuel()">Refuel</button>
    <button onclick="${
      this.name
    }.addPedalPressure()">Increase Pedal Pressure</button>
    <button onclick="${
      this.name
    }.subtractPedalPressure()">Decrease Pedal Pressure</button>
  `;
    document.body.appendChild(this.element);
  }
}

const carContainer = document.createElement("div");
carContainer.id = "car-container";
document.body.appendChild(carContainer);

const BMW = new Car("BMW");
const Mercedes = new Car("Mercedes");
const Lamborghini = new Car("Lamborghini");

Lamborghini.changePedalPressure(30);
BMW.changePedalPressure(15);
Mercedes.changePedalPressure(10);

// fill out the below comments

//overarching car class

//accelerate

//reverse

//burn fuel

//check if fuel is empty

//refuel car

//after creating a car, have it be displayed in your html. The car should display its name, fuel, distance, and pedal pressure
//the car should have 3 buttons. Accelerate, Reverse, fuel. Those functions should affect that car only

// you'll need to modify your previous overarching class to work with HTML elements

// feel free while working to import/export JS files to help keep your code cleaner

// After adding 1 car, add a second one to ensure each car can only have its interacts affect itself
