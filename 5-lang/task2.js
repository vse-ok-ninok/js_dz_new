const langUser = prompt("en/rus/de/es/fr").toLowerCase();
console.log(langUser);

switch (langUser) {
    case "en":
        console.log("Hello!");
        break;
    case "rus":
        console.log("Привет!");
        break;
    case "de":
        console.log("Guten Tag!");
        break;
    case "es":
        console.log("Hola!");
        break;
    case "fr":
        console.log("Bonjour à!");
        break;
    default:
        console.log("Don't found :(");
}