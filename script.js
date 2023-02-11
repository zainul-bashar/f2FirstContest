/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  arr.map(function(el){
      if(el.marks>50){
        console.log(el);
      }
  })

  //Write your code here , just console.log
}

function PrintStudentsbyForEach() {
  arr.forEach(function(el){
    if(el.marks>50){
      console.log(el);
    }
  })
  //Write your code here , just console.log
}

function addData() {
  
  arr.push({id:4,name:"Susain",age:20,marks:45});
  console.log(arr);
  


  //Write your code here, just console.log
}

function removeFailedStudent() {
 const newArr= arr.filter((student)=>student.marks>=50)
  console.log(newArr);
  //Write your code here, just console.log
}

function concatenateArray() {
  var thirdArr=[
    {id:5,name:"Somu",age:19,marks:55},
    {id:6,name:"Saima",age:21,marks:65},
    {id:7,name:"Shuggu",age:19,marks:85},

  ];
 var result= arr.concat(thirdArr);
 console.log(result);
  

  //Write your code here, just console.log
}
