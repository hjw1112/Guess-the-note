function start() {
    const hiddenPage = document.querySelector('.game');
    const button = document.getElementById(start_button)
    if (hiddenPage.style.display === 'none' || hiddenPage.style.display === '') {
        hiddenPage.style.display = 'block'; 
        startButton.style.display = 'none';
    }
}
