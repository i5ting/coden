#!/usr/bin/env node

var child_process = require('child_process');

var argv = process.argv;
argv.shift();

var file_path = __dirname;
var current_path = process.cwd();

var arg0 = '.';
if ( argv.length > 1 ) {
  var first_arg = argv[0];
  if ( first_arg == '-h' || first_arg == '--help' ) {
      console.log('coden = vsc(visual studio code) cli for Mac \n');
      console.log('vsc|coden [somedir]');
  }else{
      arg0 = argv[0];;
  }
}

var s = "/Applications/Visual\\ Studio\\ Code.app/Contents/MacOS/Electron " + arg0
 
if( argv[1] == '-i'){
    console.log(s);
}

// execFile: executes a file with the specified arguments
child_process.exec(s,
  function (error, stdout, stderr) {
    if (error !== null) {
      // console.log('exec error: ' + error);
    }else{
      console.log('vsc start at ' + arg0);
    }
});
 