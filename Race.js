class Car {
    constructor(brand, model, year, color, price, gas) {
      this.brand = brand;
      this.model = model;
      this.year = year;
      this.color = color;
      this.price = price;
      this.gas = gas;
    }
  
    honk() {
      console.log("Tuut tuut");
      console.log(`Brand: ${this.brand}`);
      console.log(`Model: ${this.model}`);
      console.log(`Year: ${this.year}`);
      console.log(`Color: ${this.color}`);
      console.log(`Price: ${this.price}`);
      console.log(`Gas: ${this.gas}`);
    }
  }
  
  // Create car objects
  const cars = [
    new Car("Honda", "CR-V", 2023, "Red", 50000, 45),
    new Car("Ford", "F-150", 2020, "Black", 25000, 30),
    new Car("BMW", "X5", 2022, "Green", 60000, 65),
    new Car("Mazda", "CX-5", 2019, "White", 15000, 60),
    new Car("Audi", "Q7", 2018, "Silver", 52000, 47),
    new Car("Kia", "Forte", 2020, "Blue", 21000, 56),
  ];
  
  // Function to simulate the race
  function simulateRace(cars, turns) {
    for (let turn = 1; turn <= turns; turn++) {
      console.log(`Race Turn ${turn}`);
      cars.forEach((car) => {
        let gasLoss = 5 + (new Date().getFullYear() - car.year);
        car.gas = Math.max(car.gas - gasLoss, 0);
        car.honk();
        console.log(`Remaining Gas: ${car.gas} liters`);
        console.log("----------------------------");
      });
    }
  }
  
  function displayOutput() {
    let outputDiv = document.getElementById("output");
    let outputHTML = "";

    for (let turn = 1; turn <= raceTurns; turn++) {
      outputHTML += `<h2>Race Turn ${turn}</h2>`;

      cars.forEach((car) => {
        let gasLoss = 5 + (new Date().getFullYear() - car.year);
        car.gas = Math.max(car.gas - gasLoss, 0);
        outputHTML += "<p>";
        outputHTML += "Tuut tuut<br>";
        outputHTML += `Brand: ${car.brand}<br>`;
        outputHTML += `Model: ${car.model}<br>`;
        outputHTML += `Year: ${car.year}<br>`;
        outputHTML += `Color: ${car.color}<br>`;
        outputHTML += `Price: ${car.price}<br>`;
        outputHTML += `Gas: ${car.gas} liters<br>`;
        outputHTML += "</p>";
      });
    }

    outputDiv.innerHTML = outputHTML;
  }

  const raceTurns = 7;
  displayOutput();