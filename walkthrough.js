// (npm init)- first we create our package.json file in order to draw in the node modules. set params.
// (npm install)- create our node modules
// (npm login)- connects us to our account to where we will be uploading our code for public access
// (version: 1.0.0)- this indicates our first version of a functional app. if not complete, mark 0.1.0 (best practice)
// -- the second number represents large features added. third represents security patches or reorganization
// (description: )- this is the details of our package. the more description the more professional it looks
// (entry point: index.js )- this tells the user that this is the first file that they should look at. 
// (git repository: )- used to link to our git.
// (license: )- typically use (MIT). if left blank, no one is allowed to use code without permission
// (index.js)- in this file we set the rules the user must follow or expect (inputs/outputs). ('use strict') indicates that
// -- user must use best practice, strict js rules in order for code to properly read.
// (const moment = require('moment')) sets the functionality of that package equal to our variable
// (npm install --save moment)- this pulls the moment package and saves it into our package dependencies, allowing us to use it
// when we (require('moment') )
// (exports.footer = function(name){...} )- what js will see when its opened is :
// -- exports = {
//      footer: function()
// -- }
// -- however thats not what matters, what does is the return string/ footer we are creating.
// (README.md)- we passed (touch README.md) in our terminal to create our markdown file. inside
// -- we provide a heading (## Devcamp JS footer) then below we provide instructions to anyone working with this. 
// (git init)- to create empty repo
// (touch .gitignore)- type node_modules inside to let git know what files to ignore. 
// (git add .)- adding all our files
// (git commit -m "")
// (git add remote ...)
// (git push origin ...)
// (npm publish)- deploys to the npm registry 