export default class Character {
  constructor(name, type) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Имя должно быть строкой от 2 до 10 символов')
    }

    const validTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie']
    if (!validTypes.includes(type)) {
      throw new Error('Некорректный тип персонажа')
    }

    this.name = name
    this.type = type
    this.health = 100
    this.level = 1
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('нельзя повысить уровень умершего')
    }

    this.level += 1
    this.attack *= 1.2
    this.defence *= 1.2
    this.health = 100
  }

  damage(points) {
    if (this.health === 0) {
      return
    }

    const damagePoints = points * (1 - this.defence / 100)
    this.health -= damagePoints

    if (this.health < 0) {
      this.health = 0
    }
  }
}