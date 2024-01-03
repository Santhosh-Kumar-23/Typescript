//typescript basics types
var id = 5;
var company = "colan";
var isCompanyOpen = true;
var x = 2;
//array
var ids = [1, 2, 3, 4, 5]; //number array
var ellameVenum = ["1", 2, true]; //any array
//tuple type
var employee = [2, "santhosh", true];
//tuple array in repeat multiple in same type
var employees = [
    [1, "santhosh", true],
    [2, "love", true],
    [3, "preethi", true]
];
//union (more than atleast one particular type)
var eid;
eid = 6;
eid = "yyyyy";
//enum(number constant) how to assign variable like constants -----> using enum
var dircetional1;
(function (dircetional1) {
    dircetional1[dircetional1["up"] = 0] = "up";
    dircetional1[dircetional1["down"] = 1] = "down";
    dircetional1[dircetional1["left"] = 2] = "left";
    dircetional1[dircetional1["right"] = 3] = "right";
})(dircetional1 || (dircetional1 = {}));
console.log(dircetional1.down);
//string constant
var dircetional2;
(function (dircetional2) {
    dircetional2["up"] = "up";
    dircetional2["down"] = "down";
    dircetional2["left"] = "left";
    dircetional2["right"] = "right";
})(dircetional2 || (dircetional2 = {}));
var user = {
    id: 1,
    name: "santhohs"
};
//type assert (convert one type to another type)
var x3 = 6;
var comId = x3; //type 1
var comId2 = x3; //type 2
// using type in function and also returned in number type 
function doMath(a, b) {
    return a + b;
}
console.log(doMath(10, 10));
//returned type in any (return type ethuva venalum irukalam)
function logMe(x) {
    console.log("No return type", x);
}
logMe("s");
//returned type number or string or any type ==>using union operation
function logMe1(x) {
    if (typeof x == "number")
        console.log("Hi number");
    if (typeof x == "string")
        console.log("Hi string");
}
logMe1("sf");
