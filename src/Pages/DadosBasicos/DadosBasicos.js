window.onload = function () {
    const INPUT_FILE = document.getElementById('foto');
    const TAG_IMG = document.getElementById('img-preview');
    if (INPUT_FILE != null) {
        INPUT_FILE.addEventListener('change', () => TAG_IMG.src = window.URL.createObjectURL(INPUT_FILE.files[0]));
    }
}