export { };
function TeglalapKeruletTerulet(a: number, b: number): void {

    let kerulet: number = 2 * (a + b);
    let terulet: number = a * b;
    document.write(`<br>A ${a},${b} oldalú téglalap kerülete: ${kerulet}`);
    document.write(`<br>A ${a},${b} oldalú téglalap területe: ${terulet}`);
}