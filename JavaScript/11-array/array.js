// manipulasi Array

// 1. Menambah isi Array (manual)
// var arr = [];
// arr[0] = "yos";
// arr[1] = "sularko";
// arr[2] = "phiul";
// arr[4] = "safira";

// console.log(arr);

// 2. Menghapus isi Array (manual)
// var arr = ["Yos", "sularko", "safira"];
// arr[1] = undefined;
// console.log(arr);


// 3. Menampilkan isi Array
// var arr = ["Yos", "sularko", "safira", "nurulita"];

// for( var i = 0; i < arr.length; i++) {
//     console.log('Mahasiswa ke-' + (i+1) + ' : ' + arr[i]);
// }

// Method pada Array
// 1. join
// var arr = ["Yos", "sularko", "safira"];
// console.log(arr.join(' - '));

// 2. Push & Pop
// var arr = ["Yos", "sularko", "safira"];
// arr.push('nurulita', 'sahlani');
// arr.pop();
// arr.pop();
// console.log(arr.join(' - '));

// 3. unshift & shift
// var arr = ["Yos", "sularko", "safira"];
// arr.unshift('muhammad');
// arr.shift();
// console.log(arr.join(' - '));

// 4. splice
// splice(indexAwal, mauDiHapusBerapa, elemenBaru1, elemenBaru2, ...)
// var arr = ["Yos", "sularko", "safira"];
// arr.splice(1, 1, 'galih', 'ratna')
// console.log(arr.join(' - '));

// 5. slice
// slice(awal,akhir)
// var arr = ["Yos", "sularko", "safira", "nurulita", "sahlani"];
// var arr2 = arr.slice(1,3);
// console.log(arr2.join(' - '));

// 6. forEach
// var angka = [1,2,3,4,5,6,7,8];
// for( var i = 0; i < angka.lenght; i++) {
//     console.log(angka[i]);
// }

// angka.forEach(function(e) {
//     console.log(e);
// });

// var nama = ["Yos", "sularko", "safira"];
// nama.forEach(function(e, i) {
//     console.log('Mahasiswa ke-' + (i+1) + ' adalah : ' + e);
// });

// 7. map
// var angka = [1,2,5,3,6,8,4];
// var angka2 = angka.map(function(e) {
//     return e * 2;
// });

// console.log(angka2.join(' - '));

// 8. sort
// var angka = [1,2,10,5,20,3,6,8,4];
// angka.sort(function(a,b) {
//     return a-b;
// });
// console.log(angka.join(' - '));

// 9. filter (bisa mencari banyak nilai)
// var angka = [1,2,10,5,20,3,6,8,4];
// var angka2 = angka.filter(function(x) {
//     return x > 5;
// });
// console.log(angka2.sort(function(a,b) {return a-b;}).join(' - '));

// 10. find (untuk menemukan 1 nilai)
var angka = [1,2,10,5,20,3,6,8,4];
var angka2 = angka.find(function(x) {
    return x > 5;
});
console.log(angka2);
