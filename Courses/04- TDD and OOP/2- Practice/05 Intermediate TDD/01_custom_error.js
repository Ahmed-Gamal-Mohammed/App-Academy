// class SearchSyntaxError extends SyntaxError{
//     constructor(...params){
//         // pass all arguments to parent constructor
//         super(...params);

//         // Maintains proper stack trace for where was thrown (available on VB)
//         if (Error.captureStackTrace) {
//             Error.captureStackTrace(this,SearchSyntaxError);
//         }

//         // The name property should match the class's name
//         this.name = 'SearchSyntaxError';
//     }
// }

// // Example 2 - Additional information and custom message
// class MissingRequiredFieldError extends Error{
//     constructor(fieldName = "field", ...params){
//         // pass all arguments to parent constructor
//         super(...params);

//         // Maintains proper stack trace for where was thrown (available on VB)
//         if (Error.captureStackTrace) {
//             Error.captureStackTrace(this,MissingRequiredFieldError);
//         }

//         // The name property should match the class's name
//         this.name = "MissingRequiredFieldError";

//         // Custom debuging inforamtion
//         this.fieldName = fieldName;
//         this.message = `Missing required field ${this.fieldName}.`;
//         this.date = new Date();
//     }
// }


// // Here is some code that throw the error and display what happend with it
// try {
//     throw new MissingRequiredFieldError("email");
// } catch (e) {
//     console.error(e.name);  // MissingRequiredFieldError
//     console.error(e.fieldName); // email
//     console.error(e.message); // `Missing required field email`
//     console.error(e.stack); // Stacktrace
// }

class NameError extends Error {
    constructor(name = null, ...params) {
      super(...params);

      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, NameError);
      }

      this.name = 'NameError';
      this.message = this.message || `There was a problem with the name '${name}'`;
    }
  }

  try {
    const name = 5;
    if (typeof name !== 'string') {
      throw new NameError('Name cannot be a string');
    }
  } catch(e) {
    console.log(e);
  }
