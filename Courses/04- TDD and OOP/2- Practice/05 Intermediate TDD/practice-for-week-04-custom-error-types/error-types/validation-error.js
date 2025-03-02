// Your code here
class ValidationError extends Error{
  constructor(message) {

    super(message);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this,ValidationError);
    }
    this.name = "ValidationError";
    this.message = message || 'Invalid input';
  }
}
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = ValidationError;
} catch {
  module.exports = null;
}
