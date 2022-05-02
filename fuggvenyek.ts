function IloveTypeScript(): void {
    document.write("Szeretem a TypeScriptet");
}
function NegyzetKeruletTeruletEljaras(a: number): void {
    let kerulet: number = 4 * a;
    let terulet: number = a * a;
    document.write(`<br>A(z) ${a} oldalú négyzet kerülete:${kerulet}`);
    document.write(`<br>A(z) ${a} oldalú négyzet területe:${terulet}`);
}

function RandomGeneralo100Fuggveny(): number {
    return Math.round(Math.random() * 100);

}

function NegyzetKeruletFuggveny(a: number): number {
    return 4 * a;
}