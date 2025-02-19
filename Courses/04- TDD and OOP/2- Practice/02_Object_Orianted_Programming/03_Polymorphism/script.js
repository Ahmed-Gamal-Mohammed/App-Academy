// // will be child of Object class
// class Charity {}

// // will be child of Object class
// class Business {
//   toString() { return 'Give us your money.'; }
// }

// class Restaurant extends Business {
//   toString() { return 'Eat at Joe\'s!'; }
// }

// class AutoRepairShop extends Business {}

// class Retail extends Business {
//   toString() { return 'Buy some stuff!'; }
// }

// class ClothingStore extends Retail {}

// class PhoneStore extends Retail {
//   toString() { return 'Upgrade your perfectly good phone, now!'; }
// }

// console.log(new PhoneStore().toString());
// console.log(new ClothingStore().toString());
// console.log(new Restaurant().toString());
// console.log(new AutoRepairShop().toString());
// console.log(new Charity().toString());


// Super
class ExampleParent{
    print(arg){
        console.log(arg);
    }
}

class ExampleChild extends ExampleParent{
    print(args){
        args.forEach(arg => (super.print(arg)));
    }
}

let args = ["Ahmed", "Gamal",'Mohamed'];

const child = new ExampleChild();

child.print(args);
