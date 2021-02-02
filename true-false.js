// Falsy list:
// 0; = (value jodi 0 set kore tahole false hobe)
// ""; = (value jodi empty string set kore tahole false hobe)
// false; = (value jodi false set kore tahole false hobe)
// undefined; = (value jodi set na kore tahole undefined ashbe, r undefined always false hobe)
// null; = (value jodi null set kore tahole false hobe)
// NaN; = (value jodi NaN set kore tahole false hobe)

// truthy list:
// '0', " ", [], "false" (amn aro onk gula ase. Falsy list gula chara baki sob e true hobe.)


const firstName = "Fakhruddin";
if(firstName.length > 0){
    console.log("condition is true")
}
else{
    console.log("condition is false")
}