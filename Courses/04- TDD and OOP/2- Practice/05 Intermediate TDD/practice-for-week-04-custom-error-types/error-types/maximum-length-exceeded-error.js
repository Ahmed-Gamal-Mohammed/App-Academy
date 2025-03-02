const ValidationError = require('./validation-error');

class MaximumLengthExceededError extends ValidationError{
  constructor(excessLength){
    super(excessLength);
    this.name = "MaximumLengthExceededError";
    if (excessLength) {
      this.message = `Maximum length exceeded by ${excessLength}`;
    }else{
      this.message = "Maximum length exceeded";

    }
}
}
// Your code here

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = MaximumLengthExceededError;
} catch {
  module.exports = null;
}
