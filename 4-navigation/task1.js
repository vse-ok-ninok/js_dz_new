/*Написать код, рассчитывающий дистанцию объекта
    - adressLat - адрес назначения Lat (например, 10)
    - adressLong - адрес назначения long
    - positionLat - текущее положение пользователя lat
    - positionLong - текущее положение пользователя long
    
Рассчитать расстояние от текущего местоположения до назначения*/

const positionLat = Number(prompt("Ваше текущее Lat "));
const positionLong = Number(prompt("Ваше текущее Long "));

const adressLat = Number(prompt("Lat места назначения "));
const adressLong = Number(prompt("Long места назначения"));

console.log(`Расстояние до места назначения по прямой:  ${Math.sqrt((adressLong - positionLong)**2 + (adressLat - positionLat)**2)}`);

