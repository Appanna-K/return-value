
function calculateSachinBtechFYResult(subject1,subject2,subject3,subject4,subject5,subject6)
{
    let total;
    let perc;
    let result;
    let passMarks=35;


if (subject1>=passMarks && subject2>=passMarks && subject3>=passMarks && subject4>=passMarks && subject5>=passMarks && subject6>=passMarks)
{
    result = true ;
}else{
    result = false ;
}
  total = subject1+subject2+subject3+subject4+subject5+subject6 ;
  perc = ((total/600)*100).toFixed(2);

  let summary =
  {
      res : result,
      tot : total, 
      per : perc 
  }
  return summary ;
  
  if(sachinBtechFY1Summary.res==true && sachinBtechFY1Summary.res==false)
  {
      console.log(`${sachin} passed in FY1 graduation`)
  } else {
      console.log(`${sachin}failed in FY1 graduation`)
  }
  



// if(calculateBtechFYResult.res==true && calculateBtechFYResult.res==false)
// {
//     console.log(`passed in second year`)
// } else {
//     console.log(`failed in second year`)
// }

}




let sachinBtechFY1Summary = calculateSachinBtechFYResult(90,80,70,85,78,90);
let sachinBtechFY12Summary = calculateSachinBtechFYResult(45,64,34,54,85,75);
let sachinBtechFY21Summary = calculateSachinBtechFYResult(85,64,75,54,65,75);
let sachinBtechFY22Summary = calculateSachinBtechFYResult(75,45,85,44,79,43);
let sachinBtechFY31Summary = calculateSachinBtechFYResult(85,64,75,54,85,45);
let sachinBtechFY32Summary = calculateSachinBtechFYResult(63,66,32,85,65,75);
let sachinBtechFY41Summary = calculateSachinBtechFYResult(85,64,31,64,36,65);
let sachinBtechFY42Summary = calculateSachinBtechFYResult(65,55,75,54,45,55);


console.log(sachinBtechFY1Summary)
console.log(sachinBtechFY12Summary)
console.log(sachinBtechFY21Summary)
console.log(sachinBtechFY22Summary)
console.log(sachinBtechFY31Summary)
console.log(sachinBtechFY32Summary)
console.log(sachinBtechFY41Summary)
console.log(sachinBtechFY42Summary)




function calculateRahulBtechFYResult(subject21,subject22,subject23,subject24,subject25,subject26)
{
    let total;
    let perc;
    let result;
    let passMarks=35;


if (subject21>=passMarks && subject22>=passMarks &&subject23>=passMarks &&subject24>=passMarks &&subject25>=passMarks && subject26>=passMarks)
{
    result = true ;
}else{
    result = false ;
}
  total = subject21+subject22+subject23+subject24+subject25+subject26 ;
  perc = ((total/600)*100).toFixed(2);

  let summary =
  {
      res : result,
      tot : total, 
      per : perc 
  }
  return summary ;


  if(calculateRahulBtechFYResult.res==true && calculateRahulBtechFYResult.res==false)
  {
      console.log(`passed in first year ${Rahul} `)
  } else {
      console.log(`failed in first year ${SRahul} `)
  }

}

let rahulBtechFY1Summary = calculateRahulBtechFYResult(80,80,60,85,78,90);
let rahulBtechFY12Summary = calculateRahulBtechFYResult(55,64,34,54,85,75);
let rahulBtechFY21Summary = calculateRahulBtechFYResult(95,64,75,54,62,75);
let rahulBtechFY22Summary = calculateRahulBtechFYResult(65,34,85,44,79,43);
let rahulBtechFY31Summary = calculateRahulBtechFYResult(85,64,75,54,45,45);
let rahulBtechFY32Summary = calculateRahulBtechFYResult(53,66,32,55,65,75);
let rahulBtechFY41Summary = calculateRahulBtechFYResult(75,64,36,64,35,65);
let rahulBtechFY42Summary = calculateRahulBtechFYResult(65,55,75,34,45,55);


console.log(rahulBtechFY1Summary)
console.log(rahulBtechFY12Summary)
console.log(rahulBtechFY21Summary)
console.log(rahulBtechFY22Summary)
console.log(rahulBtechFY31Summary)
console.log(rahulBtechFY32Summary)
console.log(rahulBtechFY41Summary)
console.log(rahulBtechFY42Summary)


function calculateKohliBtechFYResult(subject31,subject32,subject33,subject34,subject35,subject36)
{
    let total;
    let perc;
    let result;
    let passMarks=35;


if (subject31>=passMarks && subject32>=passMarks &&subject33>=passMarks &&subject34>=passMarks &&subject35>=passMarks && subject36>=passMarks)
{
    result = true ;
}else{
    result = false ;
}
  total = subject31+subject32+subject33+subject34+subject35+subject36 ;
  perc = ((total/600)*100).toFixed(2);

  let summary =
  {
      res : result,
      tot : total, 
      per : perc 
  }
  return summary ;


  if(calculateKohliBtechFYResult.res==true && calculateKohliBtechFYResult.res==false)
  {
      console.log(`passed in first year ${kohli} `)
  } else {
      console.log(`failed in first year ${kohli} `)
  }

}

let kohliBtechFY1Summary = calculateKohliBtechFYResult(90,80,70,85,78,90);
let kohliBtechFY12Summary = calculateKohliBtechFYResult(45,64,35,54,85,75);
let kohliBtechFY21Summary = calculateKohliBtechFYResult(85,64,75,54,65,75);
let kohliBtechFY22Summary = calculateKohliBtechFYResult(75,34,85,44,79,43);
let kohliBtechFY31Summary = calculateKohliBtechFYResult(85,64,75,54,85,45);
let kohliBtechFY32Summary = calculateKohliBtechFYResult(63,66,32,85,65,75);
let kohliBtechFY41Summary = calculateKohliBtechFYResult(85,64,36,64,35,65);
let kohliBtechFY42Summary = calculateKohliBtechFYResult(65,55,75,54,45,55);


console.log(kohliBtechFY1Summary)
console.log(kohliBtechFY12Summary)
console.log(kohliBtechFY21Summary)
console.log(kohliBtechFY22Summary)
console.log(kohliBtechFY31Summary)
console.log(kohliBtechFY32Summary)
console.log(kohliBtechFY41Summary)
console.log(kohliBtechFY42Summary)
