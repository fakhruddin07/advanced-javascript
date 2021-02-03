// Simple Way :
const students = [
    { id: 21, name: 'Fakhruddin'},
    { id: 22, name: 'Ahmed'},
    { id: 23, name: 'Noman'},
];
const output = [];
for(let i = 0; i < students.length; i++){
    const element = students[i];
    const input = element.name;
    output.push(input);
}
console.log(output);


// Advanced way by MAP
const student = [
    { id: 11, name: 'Salah'},
    { id: 21, name: 'Uddin'},
    { id: 31, name: 'Ahmed'},
    { id: 41, name: 'Nayeem'},
];

const names = student.map( s => s.name);
const ids = student.map( s => s.id);
const idsAll = student.filter( s => s.id > 30);
console.log(idsAll);
