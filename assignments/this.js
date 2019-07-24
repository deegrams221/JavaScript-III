/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global(window) binding makes the value of 'this' refer to the entire window object.
* 2. Implicit binding is when there is a dot function, and the object left of the dot is 'this'.
* 3. New binding is for when 'this' refers to the instance of the object that is created and gets returned by the constructor function.
* 4. Explicit binding is when the methods 'call' or 'apply' are used making 'this' explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
//console.log(this);


// Principle 2
// code example for Implicit Binding
const theHobbit = {
    smokes: 'Pipe-weed',
    drinks: 'Mead',
    hobbit: function (){
        console.log(this.smokes);
    }
};
theHobbit.hobbit();


// Principle 3
// code example for New Binding
function TheElf(elf) {
    this.name = elf.name;
    this.greeting = elf.greeting;
    this.greet = function() {
      console.log(`${this.greeting} ${this.name}`);
      console.log(this);
    };
  }
  
  const kaylee = new TheElf({name: 'Elyssa!', greeting: 'Êl síla erin lû e-govaned vîn'});
  const elyssa = new TheElf({name: 'Kaylee!', greeting: 'Mae govannen'});
  
  kaylee.greet();
  elyssa.greet();

// Principle 4
// code example for Explicit Binding
function TheDwarf(dwarf) {
    this.name = dwarf.name;
    this.type = dwarf.type;
    this.say = function() {
        console.log(`Aye, hello there! I'm ${this.name} and I'm a ${this.type}!`);
        console.log(this);
    };
}

const rathala = new TheDwarf({name: 'Rathala Trollheart', type: 'mountain dwarf'});
const werargumlin = new TheDwarf({name: 'Werargumlin Flintgrog', type: 'hill dwarf'});

rathala.say();
werargumlin.say();

rathala.say.call(werargumlin);
werargumlin.say.apply(rathala);

