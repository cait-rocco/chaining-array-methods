var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

let newInt = integers.sort(function(a, b) {
	return b - a;
}).filter(function(c){
	return c <= 19;
}).map(function(d) {
	return (d * 1.5) - 1
}).reduce(function(prev, curr) {
	return prev + curr;
});

console.log("Exercise answer:", newInt);