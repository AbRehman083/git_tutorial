console.log('Error Handling by try....catch Method');







//Q#1
//create a variable without assigning any value to it and check its value?

let a;
console.log(a);
console.log(a);

//Q#2
// create a variable assign a string value to it  then assign again its value to typr number  then again to booleran print the end result

let ab='AB Rehman'

 ab=5;
 ab=true;

console.log(ab);
//q#3 
//let s=5;
//const s=6;
console.log(s);        //you cannot redeclare a variable

//q#4
//let q;
//let q;
console.log(q);   //cannot be redelared

//q#5
let c=5;
let d=6;
let e='Ab'
let f='cd'
 
add=c+d;
console.log(add);
l=e+f;
console.log(l);
m=c+e;
 console.log(m);




 //Q#6
let r='Riz'
let b=5
let z=true

nsb=b+r+z;
console.log(nsb);

snb=r+b+z;
console.log(snb);

bns=z+b+r;
console.log(bns);

//q#7

let username='Ali';
let age=5;

let results=`My name is ${username}, I am ${age} years old`
console.log(results);



//q#8
let cd=5;
console.log(typeof(cd));


//q#9
let arr1=[1,2,3,4,5,6,7,8,9,0];
arr1.pop();
arr1.push('asd','bsf');
console.log(arr1.length);
arr1.splice(7,1);
console.log(arr1);



//q#10
const obj={
     Name:'Azlan',
     age:1,

 }

 obj.email='xyz@gmail.com';
 obj.age=true;
console.log(obj);




//q#11
 let temperature='2 degrees';
 if(temperature>='40 degrees'){
     console.log('AC is required');
 }
 else if(temperature<='5 degrees'){
     console.log('heater is reuired')
    
 }
 else{
     console.log('weather seems cool');
 }


//q#12
let naame='bdulRehman';
let aage=15;

if(naame[0]==='A'|| naame[0]==='a'&&aage===15){
    console.log("Person name and age");
}
else if(naame[0]==='X' && !age){
    console.log('Unknown Data');
}
    
    else if(naame.length===10|| age>0){
        console.log('Name contains 10 letter');
    }


    //q#13
    
            
    //Creating left Triangle
    
    
    let vt='*'
      
    for(let i=1;i<=5;i++)
    {
     for(let j=1;j<=i;j++)
     {
      
      console.log(vt);
      vt+='*';
      break
    
     }
    
     
    }
   