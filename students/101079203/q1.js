
const mixedArray = ['PIZZA' , 10 , true , 25 ,false ,Wings]

const lowerCaseWords  =  mixedArray => {
	return new Promise(function (resolve, reject) {

		if (mixedArray) {
			resolve(mixedArray.filter(f => typeof f === 'number').map(f => " "));
		} else {
			reject("no")

		}
	});
}
		lowerCaseWords(mixedArray)
		.then(result => console.log(result))
		.catch(error => console.log(error));
