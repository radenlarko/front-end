var item = prompt('Masukan nama makanan / minuman : \n (cth: nasi, daging, susu, hamburger, softdrink');

switch (item) {
    case 'nasi':
    case 'daging':
    case 'susu':
        alert('Makanan / minuman SEHAT');
        break;

    case 'hamburger':
    case 'softdrink':
        alert('Makanan / minuman SEHAT');
        break;

    default:
        alert('Makanan / minuman salah!');
        break;
}