var x=5;
/*
var message="in global";
console.log("global: message = "+message);
var a=function(){
	var message="inside a";
	console.log("a:message = "+ message);
	b();
}

var b=function(){
	console.log("b:message = "+ message);
}

a();*/

// //JavaScritp Types
// var string="hello";
// string +="world"
//  console.log(string+"!");
//  console.log(15/7);

// var sum=0;
// for(var i =0;i<5;++i){
// 	sum=sum+i;
// }
// console.log("sum = " +sum);
// var i =1;
// while(i<7){
// 	sum *=i;
// 	++i;
// }
// console.log("while sum = " +sum);
// /*
// 
// Object creation
// var company = new Object();
// company.ceo = new Object();
// company.name = "Facebook";
// company.ceo.firstname = "Mark";
// company.ceo.lastname = "Zuck";
// console.log(company["name"]);
// // console.log(company.ceo.firstname);
// var course = {
// 	CourseName: {courseNum: "130",
// 	dept: "CSI",
// 	name: "Computational Thinking"
// 	},
// 	hours: 2,
// 	"Start time of course": 12.00
// }
// console.log(course);

// // functions
// function fun(x,y){
// 	return x+y;
// }
// console.log(fun(5,4));
// fun.version = "v.1.0.0";
// console.log(fun.toString() + '\n'+fun.version);
// //********Function Factory  *********************
// function makeMult(multiplier){
// 	var myFun = function(x){
// 		return multiplier * x;
// 	};
// 	return myFun;
// };

// var mult3 = makeMult(3);
// console.log(mult3(10));

// var doubleIt = makeMult(2);
// console.log(doubleIt(6));

// //passing functions as arguments
// function doOp(x, func){
// 	return func(x);
// }

// var result = doOp(5, mult3), dub = doOp(5,doubleIt);
// console.log("Result:"+result+"   Double: "+dub);

//function constructors
function Circle(radius){
	console.log(this);
	this.radius = radius;
	
}

Circle.prototype.getArea =  function(){
		return Math.PI * Math.pow(this.radius, 2);
	};

var myCircle = new Circle(10);
console.log(myCircle.getArea());
console.log(myCircle);

var other = new Circle(20);
console.log(other.getArea());
console.log(other);

//Object literals and "this"
var literalCircle = {
	radius:10,
	getArea:function(){
		console.log(this + " refers to the local 'this', not global.");
		return Math.PI*Math.pow(this.radius,2);
	}
};

literalCircle.getArea();
console.log(literalCircle.getArea());