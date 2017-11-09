const employeeFactory = require('./employeeFactory.js');

const manager = function(){
 let id = "m-"+random().digit(8);
 let workers = random().discreteRangeIn(4,20);
 let baseSalary = random().discreteRangeIn(4,9)*10;

 function = pay(){

     let yearlypay = baseSalary;
     if(workers < 10){
         yearlypay+=workers*250;
     }
     else if(workers > 10){
         yearlypay+=sworkers*400;
     }
     let paymanager = [daily,yearly,weekly]
     let dailypay = baseSalary/365;
     let weeklypay = baseSalary/52;


     return paymanager;
 }
 return (pay,id,workers,baseSalary);
};

module.exports = manager;
