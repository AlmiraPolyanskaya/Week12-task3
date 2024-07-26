const alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
const btn = document.getElementById('generateWord');
const textElem = document.getElementById('word');

btn.addEventListener('click', function generateWord() {
    let index1 = Math.floor(Math.random() * alphabet.length);
    let index2 = Math.floor(Math.random() * alphabet.length);
    let index3 = Math.floor(Math.random() * alphabet.length);
    let index4 = Math.floor(Math.random() * alphabet.length);

    let word = alphabet[index1] + alphabet[index2] + alphabet[index3] + alphabet[index4];
    textElem.textContent = word;
})
