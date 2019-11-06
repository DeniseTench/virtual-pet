function Pet(name) {
   this.name = name;
   this.age = 0; 
   this.hunger = 0;
   this.fitness = 10; 
   this.growUp = function() {
      this.age += 1;
      this.hunger += 5; 
      this.fitness -= 3;
   };
   this.walk = function() {
      this.fitness += 4;
      if(fitness >= 11) {
         console.log(10);  
        } else {
          console.log();
        }      
   };
}

module.exports = Pet;

//A pet's fitness level should never go above 10, so if the fitness level is 9, walk should increase fitness to 10