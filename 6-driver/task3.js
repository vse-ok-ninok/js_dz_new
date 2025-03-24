/*  Пользователь может вести машину только если ему больше 18 лет, он имеет права
и он НЕ пьян*/
const age = Number(prompt("Сколько тебе лет?"));
const isDrunk = prompt("Вы трезвый? да/нет") == "нет" ? true : false;
const hasLicense = prompt("У вас есть лицензия? да/нет") == "да" ? true : false;

const canDrive = (age >=18) && !isDrunk && hasLicense;
console.log(`Водитель ${canDrive ? 'может' : 'не может'} водить транспортное средство`);