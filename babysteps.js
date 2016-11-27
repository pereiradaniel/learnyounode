for (i = 2, sum = 0; i < process.argv.length; i++) {
	// Also works:
	// sum += Number(process.argv[i]);
	sum += +process.argv[i];
	// console.log(sum);
};

console.log(sum);