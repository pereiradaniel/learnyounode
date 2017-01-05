for (i = 2, sum = 0; i < process.argv.length; i++) {
	sum += +process.argv[i];
};

console.log(sum);

// Alternate Solution
  // for (i = 2, sum = 0; i < process.argv.length; i++) {
  //   sum += Number(process.argv[i]);
  // };

  // console.log(sum);

// OFFICIAL SOLUTION
  // var result = 0   
  // for (var i = 2; i < process.argv.length; i++)  
  //  result += Number(process.argv[i])  
  // console.log(result)  

//  Read my blog post for an explanation and breakdown of this challenge:
//  https://medium.com/coding-and-web-development/learnyounode-exercise-2-677f3a9d32f1#.2ls4dyw3t