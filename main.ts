function celsiusToFahrenheit (celsius: number): number {
    return(celsius * 9/5) + 32;
}
function FahrenheitTocelsius(Fahrenheit: number): number {
    return(Fahrenheit -32) * 5/9;
}
console.log(celsiusToFahrenheit(20));
console.log(FahrenheitTocelsius(68));