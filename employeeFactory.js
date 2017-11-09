const client = require('./client.js');
const worker = require('./worker.js');
const divisionHead = require('./divisionHead.js');
const contractor = require('./contractor.js');

const employeeFactory = function(){


     function create(type);{
         if(type == "worker"){
             return worker();
         }
         else if(type == "manager"){
             return manger();
         }

         else if(type == "divisionHead"){
             return divisionHead();
         }
         else if(type == "contractor"){
             return contractor();
         }
     }
return {create};
};

module.exports = employeeFactory;
