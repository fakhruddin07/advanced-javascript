// list of undefined:

// No.1
let num;
console.log(num);
// Note : kono variable declare korar por jodi tar value deoa na thake tokhon jodi take call kora hoy tahole ta undefined dekhabe.

// No.2
function add(num11, num21){
    console.log(num11 + num21);
}
const result1 = add(15, 16);
console.log(result1);
// Note : kono function declare korar por jodi return korar drkr hoy, r return na kora hoy tahole ta undefined dekhabe.

// No.3
function add(num12, num22){
    console.log(num12 + num22);
    return
}
const result2 = add(15, 16);
console.log(result2);
// Note : kono function declare korar por jodi return korar drkr hoy, r return likha hoise, kintu ullek kora hoy nai ki return kora hobe tahole ta undefined dekhabe.

// No.4
function add(num13, num23){
    console.log(num13, num23);
}
const result3 = add(15,);
console.log(result3);
// Note : kono function declare korar por jodi function er parameter pass na kora hoy, tahole ta undefined dekhabe.

// No.4
const info = { name:'Fakhruddin', phone:087973}
console.log(info.age)
// Note : kono object er vitor property jodi na thake, r ta jodi chech kora hoy/read kora hoy tahole ta undefined dekhabe.

// No.5
let fun = undefined;
console.log(fun);
// Note : jodi kono variable er value set kora hoy undefined, tahole ta undefined dekhabe.

// # Null : jokhon kono kisur value zero ashe ba khali thake, tokhon tar joon null set kora hoy .


/*IMPORTANT FOR INTERVIEW
      difference between null and undefined*/