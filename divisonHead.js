const employeeFactory = require('./employeeFactory.js');

const divisionHead = function(){
    let id = "d-"+random().digit(8);
    let workers = random().discreteRangeIn(20,300);
    let baseSalary = random().discreteRangeIn(10,25)*10;
    function = pay(){
        let yearlypay = baseSalary;
        if(workers > 19){
            yearlypay += workers*50/Math.log(50*w);
        }

        if(managers < 0){
            yearlypay += managers*10;
        }
        let dailypay = baseSalary/365;
        let weeklypay = baseSalary/52

   return paydivisonHead;
   }
   return (id,managers,workers,baseSalary);
};

module.exports = divisionHead;
