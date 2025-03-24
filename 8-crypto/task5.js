/* Решила замахнуться на рекурсивный алгоритм.
Сделала через костыли, но цель была просто отработать навыки.
Также хромает читабельность кода. 
Сначала пароль преобразовываем в массив. 
Если длина массива 2 или 3 меняем местами элементы.

Если длина массива больше трех, то делим 
на половинки (в случае, если длина нечетная - на условные половинки) 
и каждую часть также прогоняем через функцию.
Результат объединяем. 
 */

function cryptoPassword(passwordArray) {
    const lenArr = passwordArray.length;
    switch (true) {
        case (lenArr === 1):
            return passwordArray;

        case (lenArr === 2):
            return passwordArray.reverse();

        case (lenArr === 3):
            const [one, two, three] = passwordArray;
            const final = [one, three, two];
            return final;

        case (lenArr % 2 === 0):
            const firstHalfPassword = passwordArray.slice(0, lenArr / 2); 
            const twoHalfPassword = passwordArray.slice(lenArr / 2, lenArr + 1);
            return cryptoPassword(firstHalfPassword).concat(cryptoPassword(twoHalfPassword));

        default:
            const firstHalfPasswordOdd = passwordArray.slice(0, lenArr / 2 + 1);
            const twoHalfPasswordOdd = passwordArray.slice(lenArr / 2 + 1, lenArr + 1);
            return cryptoPassword(firstHalfPasswordOdd).concat(cryptoPassword(twoHalfPasswordOdd));

    }
}
    
function check(dePassword, password) {
    const checkPassword = cryptoPassword(dePassword.split('')).join('');
    return checkPassword === password;
}

const password = prompt("Введите пароль");
const dePassword = cryptoPassword(password.split('')).join('');

console.log(`Исходный пароль - ${password}, \nЗашифрованный пароль ${dePassword}`);
const finalCheck = check(dePassword, password);
console.log(`Проверка на корректную работу шифратора: ${finalCheck} `);