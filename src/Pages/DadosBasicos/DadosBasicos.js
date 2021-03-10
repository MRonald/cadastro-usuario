window.onload = function () {
    const INPUT_FILE = document.getElementById('foto');
    const TAG_IMG = document.getElementById('img-preview');
    
    INPUT_FILE.addEventListener('change', () => document.getElementById('img-preview').src = window.URL.createObjectURL(INPUT_FILE.files[0]));
}