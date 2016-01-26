var myModule = require('./module.js')
var dir = process.argv[2]
var filterString = process.argv[3]

myModule(dir, filterString, function (err, list) {
	if (err)
		return console.error('Error: ', err)

	list.forEach(function (file) {
		console.log(file)
	})
})