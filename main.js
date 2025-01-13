// Contoh interaksi sederhana
// document.addEventListener("DOMContentLoaded", function() {
//     alert("Selamat datang di website saya!");
// });


// Program Segitiga Bintang
document.getElementById('generateBtn').addEventListener('click', function() {
    const rows = document.getElementById('rowInput').value;
    let result = '';
    for (let i = 1; i <= rows; i++) {
        result += ' '.repeat(rows - i) + '* '.repeat(i) + '<br>';
    }
    document.getElementById('resultContent').innerHTML = result;
});

// Program Luas Persegi Panjang
function hitungLuas() {
    const panjang = document.getElementById('panjang').value;
    const lebar = document.getElementById('lebar').value;
    const luas = panjang * lebar;
    document.getElementById('luasResult').innerText = `Luas: ${luas}`;
}

// Program Kipas Angin
const fanImage = document.getElementById("fanImage");
const startButton = document.getElementById("startButton");

startButton.addEventListener("click", function(event) {
    event.preventDefault();
    if (fanImage.src.includes("mati.png")) {
        fanImage.src = "./images/hidup.gif";
        startButton.textContent = "Matikan Kipas";
        startButton.classList.remove("btn-primary");
        startButton.classList.add("btn-danger");
    } else {
        fanImage.src = "./images/mati.png";
        startButton.textContent = "Aktifkan";
        startButton.classList.remove("btn-danger");
        startButton.classList.add("btn-primary");
    }
});

// Program 5 Lampu
const toggleLampuBtn = document.getElementById("toggleLampuBtn");
const lampuElements = [
    document.getElementById("lampu1"),
    document.getElementById("lampu2"),
    document.getElementById("lampu3"),
    document.getElementById("lampu4"),
    document.getElementById("lampu5")
];

let lampuHidup = false;

toggleLampuBtn.addEventListener("click", function () {
    lampuHidup = !lampuHidup;
    lampuElements.forEach(lampu => {
        if (lampuHidup) {
            lampu.classList.add("lampu-hidup");
            lampu.classList.remove("lampu-mati");
        } else {
            lampu.classList.add("lampu-mati");
            lampu.classList.remove("lampu-hidup");
        }
    });
    toggleLampuBtn.textContent = lampuHidup ? "Matikan Lampu" : "Hidupkan Lampu";
    toggleLampuBtn.classList.toggle("btn-danger", lampuHidup);
    toggleLampuBtn.classList.toggle("btn-primary", !lampuHidup);
});

// Program Koreksi Jawaban Pilihan Ganda
const correctAnswers = ['A', 'B', 'C', 'D', 'C', 'B', 'A', 'C', 'D', 'E',
    'A', 'B', 'D', 'E', 'A', 'E', 'B', 'C', 'D', 'B'];

function checkAnswers() {
let score = 0;
let resultText = '';
for (let i = 0; i < 20; i++) {
const userAnswer = document.querySelector(`input[name="q${i+1}"]:checked`);
if (userAnswer) {
if (userAnswer.value === correctAnswers[i]) {
score++;
resultText += `${i + 1}: Benar (${userAnswer.value})\n`;
} else {
resultText += `${i + 1}: Salah (${userAnswer.value}, seharusnya ${correctAnswers[i]})\n`;
}
} else {
resultText += `${i + 1}: Tidak dijawab\n`;
}
}

resultText += `\nSkor Anda: ${score} / 20`;
document.getElementById('result').innerText = resultText;
}

function previewImage(event) {
const image = document.getElementById('uploadedImage');
image.src = URL.createObjectURL(event.target.files[0]);
image.style.display = 'block';
}