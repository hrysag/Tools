const os = require('os');
const platform = os.platform();
const args = process.argv;
const release = args[2] == 'release';
const { spawnSync } = require('child_process');
const suffix = release ? '-release' : '';

let child;

switch (platform) {
  case 'darwin':
    console.log('偵測到mac作業系統，cocos打包中');
    child = spawnSync('npm', ['run', `cocos${suffix}`], { stdio: 'inherit' })
    break;
  case 'win32':
    console.log('偵測到windows作業系統，cocos打包中');
    child = spawnSync('npm.cmd', ['run', `win-cocos${suffix}`], { stdio: 'inherit' }); 
    break;
  default:
    console.log('unsupported OS');
    process.exit(1);
}

if (child.error) {
  console.error('Error executing command:', child.error);
  process.exit(1);
}
