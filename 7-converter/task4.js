const сurrencyRub = ['rouble', '₽', 'RUB', 'рубли'];
const сurrencyDollar = ['dollar', '$', 'USD', 'доллары'];
const сurrencyEuro = ['euro', '€', 'EUR', 'евро'];

/* Обменный курс актуален на момент 23.03.25, по курсу ЦБ РФ:
    1 USD = 84.6400 RUB
    1 USD = 0.9258 EUR
    1 RUB = 0.0118 USD
    1 RUB = 0.0109 EUR
    1 EUR = 1.0802 USD
    1 EUR = 91.4262 RUB */
function currencyСonversion (money, fromCurrency, toCurrency) {
    switch (true) {
        case сurrencyDollar.includes(fromCurrency):
            if (сurrencyRub.includes(toCurrency)) {
                return money * 84.64; 
            } else if (сurrencyEuro.includes(toCurrency)) {
                return money * 0.9258; //
            } else {
                return null; //возвращаем null - валюта не найдена
            }
        case сurrencyRub.includes(fromCurrency):
            if (сurrencyDollar.includes(toCurrency)) {
                return money * 0.0118; // 
            } else if (сurrencyEuro.includes(toCurrency)) {
                return money * 0.0109; //
            } else {
                return null; //возвращаем null - валюта не найдена
            }
        case сurrencyEuro.includes(fromCurrency):
            if (сurrencyDollar.includes(toCurrency)) {
                return money * 1.0802; //
            } else if (сurrencyRub.includes(toCurrency)) {
                return money * 91.4262; //
            } else {
                return null; //возвращаем null - валюта не найдена
            }
    }
}
const moneyUser = Number(prompt('Сколько у Вас денег?'));
const toCurrencyUser = prompt('В какой они валюте?');
const fromCurrencyUser = prompt('На какую валюты Вы хотите обменять?');

const finalConversion = currencyСonversion(moneyUser, toCurrencyUser,fromCurrencyUser);
if (finalConversion === undefined) {
    console.log('Вы ввели некорректное наименование валюты, попробуйте снова');
} else {
    console.log(`На момент 23.03.25 года по курсу ЦБ РФ ${moneyUser} ${toCurrencyUser} = ${finalConversion} ${fromCurrencyUser}`);
}