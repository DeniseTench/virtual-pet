const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
  });

  describe('constructor', () => {  
    it('has a initial age of 0', () => {
      const pet = new Pet('Fido');
  
      expect(pet.age).toEqual(0);
    });
  });

  describe('growUp', () => {
    it('increments the age by 1', () => {
      const pet = new Pet('Fido');
  
      pet.growUp();
  
      expect(pet.age).toEqual(1);
    });

    it('increments hunger by 5', () => {
      const pet = new Pet('Fido');

      expect(pet.hunger).toEqual(0);
    });
  
  it('decrements fitness by 3', () => {
    const pet = new Pet('Fido');

    expect(pet.fitness).toEqual(10);
  });
});

describe ('walk', () => {
  it('increments fitness by 4', () => {
    const pet = new Pet('Fido');

    expect(pet.fitness).toEqual(10);
  });
});