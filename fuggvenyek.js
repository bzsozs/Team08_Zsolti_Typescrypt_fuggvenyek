function IloveTypeScript() {
    document.write("Szeretem a TypeScriptet");
}
function NegyzetKeruletTeruletEljaras(a) {
    var kerulet = 4 * a;
    var terulet = a * a;
    document.write("<br>A(z) ".concat(a, " oldal\u00FA n\u00E9gyzet ker\u00FClete:").concat(kerulet));
    document.write("<br>A(z) ".concat(a, " oldal\u00FA n\u00E9gyzet ter\u00FClete:").concat(terulet));
}
function RandomGeneralo100Fuggveny() {
    return Math.round(Math.random() * 100);
}
function NegyzetKeruletFuggveny(a) {
    return 4 * a;
}
