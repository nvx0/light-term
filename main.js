var shell = require('shelljs');
var chalk = require('chalk');

  
  process.on('uncaughtException', function (err) {
  });

  var readline = require('readline'),
  rl = readline.createInterface(process.stdin, process.stdout);

var username = require("os").userInfo().username
var platform = require("os").platform();

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

console.clear()
process.title = "LightTerm 1.0.0";

console.log(`Welcome back ${username}!`)


rl.setPrompt(`${username} # `);
rl.prompt();

rl.on('line', function(line) {
  switch(line.trim()) {
      case 'info':
        console.log("  ")
        process.title = "LightTerm 1.0.0";
          console.log(chalk.white.bgBlack.bold('Light') + chalk.blue.bgBlack.bold('Term'))
          console.log("Version: 1.0.0 alpha\nCoded by cloud3 in " + chalk.white.bgBlack.bold('Pol') + chalk.red.bgBlack.bold('and') + " with love!")
          console.log("Supported for 2023, for downloading new version please visit https://lightterm.tk/download!")
          console.log("  ")
          break;
          case 'clear':
            console.clear()
            break;
            case 'meow':
              process.title = "LightTerm 1.0.0";
            console.log("wow you have found super secret easteregg!")
            break;
            case 'exit':
              process.title = "LightTerm 1.0.0";
            console.log("Thanks for using LightTerm..")
            process.exit(0);
            break;
      default:
        process.title = "LightTerm 1.0.0";
        shell.exec(line)
        process.title = "LightTerm 1.0.0";
      break;
  }
  rl.prompt();
}).on('close', function() {
  console.log('CTRL+C or other interuption');
  process.exit(0);
});
