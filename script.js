let shipName = prompt("Введите название корабля🛰️")
let fuelAmount = prompt("Введите количество топлива в корабле⛽")
let maxFuelAmount = prompt("Введите максимальное количество топлива в корабле⛽")
let shipSpeed = prompt("Введите скорость корабля🔜")

alert(`Корабль 🛰️${shipName} готов к вылету!`)
alert(`Текущее количество топлива в корабле ${fuelAmount}⛽`)
alert(`Максимальное количество топлива в корабле ${maxFuelAmount}⛽`)
alert(`Скорость корабля ${shipSpeed}км/с🔜`)

function calculateFlightTime(distance, speed) {
  const time = distance / speed
  alert(`Время полета до первой звездной системы🌠 ${time} часов.`)
  return time
}

function calculateFuelConsumption(flightTime, speed) {
  const fuelConsumption = flightTime * speed
  alert(`Расход топлива во время полета⛽ ${fuelConsumption} литров.`)
  return fuelConsumption
}

function checkFuel(fuelAmount, fuelConsumption) {
  if (fuelAmount >= fuelConsumption) {
    alert("Полет прошел успешно✅")
  } else {
    alert("Корабль ломается при нехватке топлива❌")
  }
}

const distanceToStarSystem = prompt('Введите расстояние до первой звездной системы🌠 ')
const flightSpeed = 200 
const flightTime = calculateFlightTime(distanceToStarSystem, flightSpeed) 
const fuelConsumption = calculateFuelConsumption(flightTime, flightSpeed)
checkFuel(fuelAmount, fuelConsumption) 

const starSystems = ['Система Альфа🪐', 'Система Бета🪐', 'Система Гамма🪐']
let currentFuel = fuelAmount
const speed = shipSpeed

for (let i = 0; i < starSystems.length; i++) {
  const distance = Math.floor(Math.random() * 1000) + 1 
  alert(`Начинаем полет к ${starSystems[i]}`)
  const flightTime = calculateFlightTime(distance, speed)
  alert(`Время полета до ${starSystems[i]}: ${flightTime} часов`)
  const fuelConsumption = calculateFuelConsumption(flightTime, speed)
  alert(`Расход топлива во время полета до ${starSystems[i]}: ${fuelConsumption} литров⛽`)
  
  currentFuel -= fuelConsumption
  if (currentFuel < 0) {
    alert(`Корабль ${shipName} ломается! Недостаточно топлива для следующего полета❌`)
    break
  } else {
    alert(`Полет к ${starSystems[i]} прошел успешно✅ Остаток топлива: ${currentFuel} литров.`)
  }
}

alert(`Все звездные системы посещены! Путешествие завершено ✅✅✅`)