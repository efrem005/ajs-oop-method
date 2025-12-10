import Bowerman from '../Bowerman'
import Character from '../Character'
import Daemon from '../Daemon'
import Magician from '../Magician'
import Swordsman from '../Swordsman'
import Undead from '../Undead'
import Zombie from '../Zombie'

describe('Character', () => {
  describe('валидация конструктора', () => {
    test('должен выбрасывать ошибку, если имя не является строкой', () => {
      expect(() => new Character(123, 'Bowman')).toThrow('Имя должно быть строкой от 2 до 10 символов')
      expect(() => new Character(null, 'Bowman')).toThrow('Имя должно быть строкой от 2 до 10 символов')
      expect(() => new Character(undefined, 'Bowman')).toThrow('Имя должно быть строкой от 2 до 10 символов')
      expect(() => new Character({}, 'Bowman')).toThrow('Имя должно быть строкой от 2 до 10 символов')
    })

    test('должен выбрасывать ошибку, если имя слишком короткое', () => {
      expect(() => new Character('A', 'Bowman')).toThrow('Имя должно быть строкой от 2 до 10 символов')
      expect(() => new Character('', 'Bowman')).toThrow('Имя должно быть строкой от 2 до 10 символов')
    })

    test('должен выбрасывать ошибку, если имя слишком длинное', () => {
      expect(() => new Character('VeryLongName', 'Bowman')).toThrow('Имя должно быть строкой от 2 до 10 символов')
      expect(() => new Character('12345678901', 'Bowman')).toThrow('Имя должно быть строкой от 2 до 10 символов')
    })

    test('должен выбрасывать ошибку, если тип невалидный', () => {
      expect(() => new Character('ValidName', 'InvalidType')).toThrow('Некорректный тип персонажа')
      expect(() => new Character('ValidName', 'Warrior')).toThrow('Некорректный тип персонажа')
      expect(() => new Character('ValidName', '')).toThrow('Некорректный тип персонажа')
      expect(() => new Character('ValidName', null)).toThrow('Некорректный тип персонажа')
    })

    test('должен создавать Character с валидным именем и типом', () => {
      const character = new Character('TestName', 'Bowman')
      expect(character.name).toBe('TestName')
      expect(character.type).toBe('Bowman')
      expect(character.health).toBe(100)
      expect(character.level).toBe(1)
    })

    test('должен принимать все валидные типы', () => {
      const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie']
      types.forEach((type) => {
        const character = new Character('TestName', type)
        expect(character.type).toBe(type)
      })
    })

    test('должен принимать имя минимальной длины (2)', () => {
      const character = new Character('AB', 'Bowman')
      expect(character.name).toBe('AB')
    })

    test('должен принимать имя максимальной длины (10)', () => {
      const character = new Character('1234567890', 'Bowman')
      expect(character.name).toBe('1234567890')
    })
  })
})

describe('Bowerman', () => {
  test('должен создавать Bowerman с правильными свойствами', () => {
    const bowerman = new Bowerman('Legolas')
    expect(bowerman.name).toBe('Legolas')
    expect(bowerman.type).toBe('Bowman')
    expect(bowerman.health).toBe(100)
    expect(bowerman.level).toBe(1)
    expect(bowerman.attack).toBe(25)
    expect(bowerman.defence).toBe(25)
  })

  test('должен выбрасывать ошибку, если имя невалидное', () => {
    expect(() => new Bowerman('A')).toThrow('Имя должно быть строкой от 2 до 10 символов')
  })
})

describe('Swordsman', () => {
  test('должен создавать Swordsman с правильными свойствами', () => {
    const swordsman = new Swordsman('Aragorn')
    expect(swordsman.name).toBe('Aragorn')
    expect(swordsman.type).toBe('Swordsman')
    expect(swordsman.health).toBe(100)
    expect(swordsman.level).toBe(1)
    expect(swordsman.attack).toBe(40)
    expect(swordsman.defence).toBe(10)
  })

  test('должен выбрасывать ошибку, если имя невалидное', () => {
    expect(() => new Swordsman('A')).toThrow('Имя должно быть строкой от 2 до 10 символов')
  })
})

describe('Magician', () => {
  test('должен создавать Magician с правильными свойствами', () => {
    const magician = new Magician('Gandalf')
    expect(magician.name).toBe('Gandalf')
    expect(magician.type).toBe('Magician')
    expect(magician.health).toBe(100)
    expect(magician.level).toBe(1)
    expect(magician.attack).toBe(10)
    expect(magician.defence).toBe(40)
  })

  test('должен выбрасывать ошибку, если имя невалидное', () => {
    expect(() => new Magician('A')).toThrow('Имя должно быть строкой от 2 до 10 символов')
  })
})

describe('Daemon', () => {
  test('должен создавать Daemon с правильными свойствами', () => {
    const daemon = new Daemon('Balrog')
    expect(daemon.name).toBe('Balrog')
    expect(daemon.type).toBe('Daemon')
    expect(daemon.health).toBe(100)
    expect(daemon.level).toBe(1)
    expect(daemon.attack).toBe(10)
    expect(daemon.defence).toBe(40)
  })

  test('должен выбрасывать ошибку, если имя невалидное', () => {
    expect(() => new Daemon('A')).toThrow('Имя должно быть строкой от 2 до 10 символов')
  })
})

describe('Undead', () => {
  test('должен создавать Undead с правильными свойствами', () => {
    const undead = new Undead('Lich')
    expect(undead.name).toBe('Lich')
    expect(undead.type).toBe('Undead')
    expect(undead.health).toBe(100)
    expect(undead.level).toBe(1)
    expect(undead.attack).toBe(25)
    expect(undead.defence).toBe(25)
  })

  test('должен выбрасывать ошибку, если имя невалидное', () => {
    expect(() => new Undead('A')).toThrow('Имя должно быть строкой от 2 до 10 символов')
  })
})

describe('Zombie', () => {
  test('должен создавать Zombie с правильными свойствами', () => {
    const zombie = new Zombie('Walker')
    expect(zombie.name).toBe('Walker')
    expect(zombie.type).toBe('Zombie')
    expect(zombie.health).toBe(100)
    expect(zombie.level).toBe(1)
    expect(zombie.attack).toBe(40)
    expect(zombie.defence).toBe(10)
  })

  test('должен выбрасывать ошибку, если имя невалидное', () => {
    expect(() => new Zombie('A')).toThrow('Имя должно быть строкой от 2 до 10 символов')
  })
});

