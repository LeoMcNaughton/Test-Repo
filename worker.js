const employeeFactory = require('./employeeFactory.js');

const worker = function(){
 let id = "w-"+random().digit(8);
 let wage = random().discreteRangeIn(8,50);
 let hours = random().discreteRangeIn(4,7)*5;

 function = pay(){
  let payworker = [daily,weekly,yearly];
  let dailypay = hours*wage/5;
  let weeklypay = hours*wage;
  let yearlypay = hours*wage*52;
  return payworker;
}
return (pay,id,wage,hours)
};
module.exports = worker;
