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
 
  }else{
      arg0 = argv[0];;
  }
}

var s = "ps -ef|grep Visual\\ Studio\\ Code.app|awk '{print $2}'|xargs kill -9 ";
 
if( argv[1] == '-i'){
    console.log(s);
}

// execFile: executes a file with the specified arguments
child_process.exec(s,
  function (error, stdout, stderr) {
    if (error !== null) {
      //console.log('vsc error: ' + error);
    }else{
      console.log('vsc stop success!');
    }
});
 