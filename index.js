var robot = require('robotjs');

function main() {
  console.log('starting');
  sleep(2000);

  robot.moveMouseSmooth(30, 100);
  //   robot.mouseClick();
  sleep(2000);
  console.log('done');
}

function sleep(ms) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

main();
