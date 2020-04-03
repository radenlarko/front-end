var tanya = true;
while (tanya) {
    //menangkap pilihan pemain
    var pemain = prompt('pilih: gajah, semut, atau orang');

    //menangkap pilihan computer
    //membangkitkan bilangan random
    var comp = Math.random();

    if (comp < 0.34) {
        comp = 'gajah';
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'orang';
    } else {
        comp = 'semut';
    }

    var hasil = '';
    //menentukan rules
    if (pemain == comp) {
        hasil = 'SERI';
    } else if (pemain == 'gajah') {
        // if (comp == 'orang') {
        //     hasil = 'MENANG';
        // } else {
        //     hasil = 'KALAH';
        // }
        hasil = (comp == 'orang') ? 'MENANG' : 'KALAH';
    } else if (pemain == 'orang') {
        hasil = (comp == 'gajah') ? 'KALAH' : 'MENANG';
    } else if (pemain == 'semut') {
        hasil = (comp == 'gajah') ? 'MENANG' : 'KALAH';
    } else {
        hasil = 'memasukan pilihan yang salah';
    }

    //tampilkan hasil
    alert ('kamu memilih : "' + pemain + '" dan komputer memilih : "' + comp + '" \nMaka hasilnya kamu : ' + hasil);

    tanya = confirm('ingin bermain lagi?');
}

alert('Terimakasih sudah bermain :)');