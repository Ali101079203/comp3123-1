
const resolvedPromise = num => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('done!')
			resolve(num * num);
		}, 500);
	});
}

const rejectedPromise = num => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('done!')
			resolve(num * num);
		}, 500);
	});
}

Promise.all([rejectedPromise(6), resolvedPromise(7)]).then((val) => {
	console.log(val);
});
