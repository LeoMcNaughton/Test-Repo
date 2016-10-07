//Write your constructor function below.
//You should have 2 instance variables and 1 instance function included.
function octocat(n,a){
this.name = n
this.arms = a
this.slap = function Slap(){

for(var i=0;i<this.arms;i++){
  console.log("SLAP")
}
}
}








//Write your 3 new octocat objects below here.
var kaisercat = new octocat ("William",66)
var Emperor = new octocat ("Harry",99)
var Prince = new octocat ("Jaffar",2)
