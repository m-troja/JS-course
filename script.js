﻿
let mark = {
    fullName: 'Mark Miller',
    mass: '78',
    height: '1.69',

    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

let john = {
    fullName: 'John Smith',
    mass: '92',
    height: '1.95',
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}
mark.calcBMI();
john.calcBMI();
if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`);
}
else console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);