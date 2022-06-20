const controllerBuilder = require('artisan/route');
// require('sca')

let code = controllerBuilder("Foo/Payment","Foo/Payment","configs");
code.commit();
// console.log(__dirname);
