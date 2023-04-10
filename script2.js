// let shipName = prompt("Введите название корабля:");
// let currentFuel = prompt("Введите текущее количество топлива в корабле:");
// let maxFuel = prompt("Введите максимальное количество топлива в корабле:");
// let shipSpeed = prompt("Введите скорость корабля:");

// console.log("Корабль готов к вылету");
// console.log("Текущее количество топлива: " + currentFuel);
// console.log("Максимальное количество топлива: " + maxFuel);
// console.log("Скорость корабля: " + shipSpeed);

// // 1.1-1.4 Получение данных о корабле

// // 2.1-2.4 Вывод данных о корабле

// // 3.1 Функция для вычисления времени полета
// function calculateFlightTime(distance, speed) {
//   const time = distance / speed;
//   return time;
// }

// // 3.2 Функция для вычисления расхода топлива
// function calculateFuelConsumption(time, speed) {
//   const consumption = 0.1 * speed * time;
//   return consumption;
// }

// // 3.3 Функция для проверки остатка топлива
// function checkFuel(fuel, consumption) {
//   if (fuel < consumption) {
//     console.log("Корабль ломается при нехватке топлива!");
//   } else {
//     console.log("Полет прошел успешно.");
//   }
// }

// // 4.1 Массив звездных систем
// const starSystems = ["Земля", "Марс", "Альфа Центавра", "Сириус", "Тау Кита"];

// // 4.2-4.3 Цикл для полета к звездным системам
// let fuel = currentFuel;
// for (let i = 0; i < starSystems.length; i++) {
//   const distance = (i + 1) * 10; // расстояние до звездной системы в световых годах
//   const speed = prompt(`Введите скорость для полета к звездной системе ${starSystems[i]}`);
//   const time = calculateFlightTime(distance, speed);
//   const consumption = calculateFuelConsumption(time, speed);
//   console.log(`Для полета к звездной системе ${starSystems[i]} потребуется ${time} лет.`);
//   console.log(`Расход топлива составит ${consumption}.`);
//   checkFuel(fuel, consumption);
//   fuel -= consumption;
//   if (fuel < 0) {
//     console.log("Корабль ломается при нехватке топлива!");
//     break;
//   }
// }

// // 4.4 Вывод сообщения о завершении путешествия
// console.log("Путешествие завершено.");

