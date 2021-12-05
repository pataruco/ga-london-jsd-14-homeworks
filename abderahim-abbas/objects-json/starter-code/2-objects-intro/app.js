'use strict';

// 1. Create an object called car

const car = {};

// 2. Add a current speed property to the car object and give it the value of 30

car.speed = 30;

// 3. Add a fuel level to the object and give it the value of 10

car.fuellevel = 10;

// 4. Add a method called go. When car.go is invoked, it should console.log('Here we go!')

car.go = function () {
    console.log('Here we go!');
}

// 5. Add a method called accelerate. When car.acceletate is invoked, the current speed should increase by 1 and fuel level should decrease by 1.

car.accelerate = function () {
    car.speed = car.speed++;
    car.fuellevel = car.fuellevel--;
}

// 6. Add a method called decelerate. When car.decelerate is invoked, the current speed should decrease by 1.

car.decelerate = function (speed) {
    speed = speed--;
}
car.decelerate(10)
// 7. Add a method called refuel. When car.refuel is invoked, the fuel level should go back to 10.

car.refuel = function () {
    car.fuellevel = 10;
}

// BONUS adapt the code to console log a warning if the fuel level drops below 2.

car.fuelwarning = function () {
    return car.fuellevel < 2 ? console.log('Warning'): console.log('Fuel level safe');
}

car.fuelwarning()
