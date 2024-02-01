const heroes = [
{
  name: "Jerms",
  emoji: "🦞",
  hp: 15, 
  skill: 4,
  cost: 0,
  level: 1,
  bought: true,
},

{
  name: "Mick",
  emoji: "🐏",
  hp: 30,
  skill: 1,
  cost: 0,
  level: 1,
  bought: true,
},

{
  name: "Paul Bunyan",
  emoji: "🧑‍🚒",
  hp: 20,
  skill: 8,
  cost: 300,
  level: 3,
  bought: false,
},

{
  name: "Paul Revere",
  emoji: "🏇",
  hp: 25,
  skill: 5,
  cost: 500,
  level: 4,
  bought: false,
},
{
  name: "Jake",
  emoji: "🐍",
  hp: 200,
  skill: 30,
  cost: 1000,
  level: 10,
  bought: false,
}
]

const boss = {
  name: "Tony Hawk",
  emoji: "🦅",
  hp: 30,
  totalHp: 30,
  skill: 2,
  gold: 50,
  level: 1
}


let gold = 0

function attackToBoss() {
  let damageDealt = 0
  let purchasedHeroes = heroes.filter(hero => hero.bought == true)
  console.log('the heroes attack!')
  // purchasedHeroes.forEach()
  purchasedHeroes.forEach(hero => damageDealt += hero.skill)
  // console.log(damageDealt);
  boss.hp -= damageDealt
  if (boss.hp < 0){
    boss.hp = 0
    window.alert(`You killed the boss ${boss.name, boss.emoji} Level: ${boss.level}. You gained ${gold} and all your heros leved up!`)
    boss.level++
    boss.totalHp *=1.5
    boss.hp = boss.totalHp
    boss.gold *= 1.5
    purchasedHeroes.forEach(hero => {hero.level++, 
    hero.skill++, hero.hp+2})
  }
  console.log(`${boss.hp}`);
}

function attackToHeroes(){
  let damageDealt = boss.skill
  let purchasedHeroes = heroes.filter(hero => hero.bought == true)
  if (boss.hp == 0) {
    return
  }
  purchasedHeroes.forEach(hero => {
    hero.hp -= damageDealt
    if (hero.hp < 0) {
      hero.hp = 0
      hero.bought = false

    }
  })
  console.log('the boss attacks!')

  // Clamp 
  
}


function purchaseHero() {
  let unpledgedHeroes = heroes.forEach(hero => !hero.bought)
  

}
setInterval(attackToHeroes, 5000)