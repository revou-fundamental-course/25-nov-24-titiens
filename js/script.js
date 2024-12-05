// Ini File Javascript

function calculate(){
    const BB = document.getElementById('berat-badan').value
    const Tinggi = document.getElementById('tinggi-badan').value
    var hasilbmi = 0;
    var tb1 = Tinggi/100;
    tbl *= tbl;
    hasilbmi = BB/tbl;
    hasilbmi = hasilbmi.toFixed(1);
    document.getElementById('hasilbmi').innerText = hasilbmi;

    if(hasilbmi < 18.5){
        document.getElementById('tampilkan').innerText = "Kekurangan Berat Badan";
        document.getElementById('tampilkan2').innerText = "Berat Badan Anda Kurang";
    } else if(hasilbmi >=18.5 && hasilbmi < 25.0){
        document.getElementById('tampilkan').innerText = "Normal (Ideal)";
        document.getElementById('tampilkan2').innerText = "Berat Badan Anda Normal (Ideal)";
    } else if(hasilbmi >=25.0 && hasilbmi < 30.0){
        document.getElementById('tampilkan').innerText = "Kelebihan Berat Badan";
        document.getElementById('tampilkan2').innerText = "Berat Badan Anda Berlebih";
    } else {
        document.getElementById('tampilkan').innerText = "Kegemukan (Obesitas)";
        document.getElementById('tampilkan2').innerText = "Anda Kegemukan";
    }
}

function validateForm() {
    let inputBeratBadan = document.getElementById('berat-badan').value;
    let inputUsia = document.getElementById('usia').value;
    let inputTinggiBadan = document.getElementById('tinggi-badan').value;

    console.log('BB:' + inputBeratBadan);
    console.log('Usia:' + inputUsia);
    console.log('Tinggi:' + inputTinggiBadan);
    if (inputBeratBadan != '' && inputUsia != '' && inputTinggiBadan != '') {
        let calculate = parseInt(inputBeratBadan) + parseInt(inputTinggiBadan);
        updateResult(calculate);
    } else {
        alert('Mohon Lengkapi Data yang Anda masukkan');
    }
}