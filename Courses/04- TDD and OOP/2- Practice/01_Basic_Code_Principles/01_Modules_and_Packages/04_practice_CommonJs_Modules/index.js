
// Your code here
const sayHelloTo = require("./send-messages/say-hello-to");
const giveMessageToMrsPotato = require("./send-messages/give-message-to-mrs-potato");

// if you use the following way you must give the same names to the expotrs items
// const {message1,message2,message3} = require("./messages/index");
const messages = require("./messages/index");
const msg1 = messages.message1;
const msg2 = messages.message2;
const msg3 = messages.message3;
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

sayHelloTo("Mr. Potato");
giveMessageToMrsPotato(msg1);
giveMessageToMrsPotato(msg2);
giveMessageToMrsPotato(msg3);
