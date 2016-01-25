for (var i = 2, sum = 0; i < process.argv.length; i++) {
	sum += +process.argv[i];
}

console.log(sum);