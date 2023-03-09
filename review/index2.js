// let person={
//     firstName:'john',
//     lastName:'mwania',
//     age:34,
//     fullName: function(){
//        return this.firstName+' '+this.lastName;
//     }
    
// };
//console.log(person.fullName);

const person = {
    firstName: "John",
    lastName : "Doe",
    age       : 56,
    get fullName () {
      return this.firstName + " " + this.lastName;
    }
    
  };
  for(let y in person) {
      console.log(person[y]);
  }
  console.log(person.firstName +' is ' +person.age+ ' years old');

  const perso = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
  };
  perso.name = function() {
    return this.firstName + " " + this.lastName;
  };