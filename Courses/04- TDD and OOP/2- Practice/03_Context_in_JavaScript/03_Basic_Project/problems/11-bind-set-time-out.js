function boundFuncTimer(obj, func, delay) {
  // Your code here

  return setTimeout(func.bind(obj),delay);
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = boundFuncTimer;
