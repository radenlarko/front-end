// Membuat Object
// Object Literal
var mhs1 = {
    nama : 'Yos Sularko',
    nrp : '047890754',
    email : 'yossularko@gmail.com',
    jurusan : 'Manajemen Informatika'
}

var mhs2 = {
    nama : 'Safira Nurulita',
    nrp : '047897835',
    email : 'safira@gmail.com',
    jurusan : 'Manajemen Informatika'
}

// Function Declaration
function buatObjectMahasiswa(nama, nrp, email, jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

var mhs3 = buatObjectMahasiswa('Bima', '047897629', 'bima@gmail.com', 'Manajemen Informatika');

// Constructor
function Mahasiswa(nama, nrp, email, jurusan) {
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
}

var mhs4 = new Mahasiswa('john', '047872629', 'john@gmail.com', 'Manajemen Informatika');