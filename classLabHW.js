class Hamster {
    constructor(name){
      this.owner = ''
      this.name = name
      this.price = 15
    }
    wheelRun(){
      console.log('squeak squeak')
    }
    eatFood(){
      console.log('nibble nibble')
    }
    getPrice(){
      return this.price
    }
  }
  class Person {
    constructor(name){
      this.name = name
      this.age = 0
      this.height = 0
      this.weight = 0
      this.mood = 0
      this.hamsters = []
      this.bankAccount = 0
    }
    getName(){
      return this.name
    }
    getAge(){
      return this.age
    }
    getWeight(){
      return this.weight
    }
    greet(){
      console.log(`I am ${this.name} hello`)
    }
    eat(){
        this.weight++
      this.mood++
    }
    exercise(){
      this.weight--
    }
    ageUp(){
      this.age++
      this.height++
      this.weight++
      this.mood--
      this.bankAccount+=10
    }
    buyHamster(hamster){
      this.hamsters.push(hamster)
      this.mood+=10
      this.bankAccount-=hamster.getPrice()
    }
  }

  // 1. Instantiate a new Person named Timmy
let timmy = new Person("Timmy")
// 2. Age Timmy five years
timmy.age =5
//   3. At this point Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. Have him eat five times.
timmy.mood="bummed"

for( let i=0;i<5; i++) timmy.eat()

//   4. Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good. Have him exercise five times
for (let i=0;i<5; i++ ) timmy.exercise()

//   5. Age Timmy 9 years
for(let i=0; i<9; i++ ) timmy.ageUp()

//   6. Create a hamster named "Gus"
let gus = new Hamster("Gus")
//gus.name = "Gus"
//   7 .Set Gus's owner to the string "Timmy"
gus.owner = "Timmy"
//   8. Have Timmy "buy" Gus
timmy.buyHamster(gus)
//   9. Age Timmy 15 years
for(let i=0;i<15;i++) timmy.ageUp()

//   10. Have Timmy eat twice
timmy.eat()
timmy.eat()
//   11. Have Timmy exercise twic
timmy.exercise()
timmy.exercise()
console.log(timmy);
console.log(gus);
