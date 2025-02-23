function allTheArgs(func, ...args) {
  return function(...additionalArgs) {
    return func(...args, ...additionalArgs);
  };
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;
