//typescript basics types

let id:number=5
let company:string="colan"
let isCompanyOpen:boolean=true
let x:any=2

//array
let ids:number[]=[1,2,3,4,5] //number array
let ellameVenum:any[]=["1",2,true] //any array

//tuple type
let employee :[number,string,boolean]=[2,"santhosh",true]

//tuple array in repeat multiple in same type
let employees : [number,string,boolean][]=[
    [1,"santhosh",true],
    [2,"love",true],
    [3,"preethi",true]
]

//union (more than atleast one particular type)

let eid:string|number
eid=6
eid="yyyyy"

//enum(number constant) how to assign variable like constants -----> using enum

enum dircetional1{
    up,
    down,
    left,
    right
}

console.log(dircetional1.down)

//string constant
enum dircetional2{
    up="up",
    down="down",
    left="left",
    right="right"
}

//object 

type usertype={
    id:number,
    name:string
}

let user:usertype={
    id:1,
    name:"santhohs"
}

//type assert (convert one type to another type)

let x3:any=6
let comId=x3 as number //type 1
let comId2=<number>x3 //type 2

// using type in function and also returned in number type 

function doMath(a:number,b:number):number{
    return a+b
}
console.log(doMath(10,10))

//returned type in any (return type ethuva venalum irukalam)

function logMe(x:string):any{
    console.log("No return type",x)
}
logMe("s")

//returned type number or string or any type ==>using union operation

function logMe1(x:string|number):void{
    if( typeof x=="number") console.log("Hi number")
    if( typeof x=="string") console.log("Hi string")
}

logMe1("sf")