window.onload = function () {
    const MENU_LATERAL = document.getElementById('menu-lateral');
    const ICONE_USUARIO = document.getElementById('icone-usuario');
    const ICONE_FECHAR = document.getElementById('icone-fechar');

    ICONE_USUARIO.addEventListener('click', () => MENU_LATERAL.style.display = 'flex');
    ICONE_FECHAR.addEventListener('click', () => MENU_LATERAL.style.display = 'none');
}