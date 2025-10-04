var robot = require('robotjs');

function main() {
  console.log('starting');
  sleep(2000);

  robot.moveMouseSmooth(331, 707);
  robot.mouseClick();
  sleep(1000);

  robot.moveMouseSmooth(355, 732);
  robot.mouseClick();
  console.log('done');
  console.log('hi matt');
}

function sleep(ms) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

main();
