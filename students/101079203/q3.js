
var fm = require('fs');
var filePath = process.cwd() + "/logs";

if (fm.existsSync(filePath)) {
	process.chdir('logs');
	for (var index = 0; index < 10; index++) {
		console.log(('deleted files...log' + [index] + ".txt"));
		fm.unlinkSync('log' + [index] + ".txt");
	}
	process.chdir('../');
	fm.rmdirSync('logs');

} else {
	fm.mkdirSync("logs");
	process.chdir('logs');

	for (var index = 0; index < 10; index++) {
		console.log(('log' + [index] + ".txt"));
		fm.writeFileSync('log' + [index] + ".txt", "!!!");
	}

}

