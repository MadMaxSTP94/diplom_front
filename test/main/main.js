function targetClick () {
    const el = document.querySelector('#testId');
    const buttons1 = document.querySelectorAll('button1');


el.addEventListener('click', e => {
    console.log(el)
})
}
targetClick()

function setButtonsActive() {
    const buttonP = document.querySelector('#buttonP');
    const buttonG = document.querySelector('#buttonG');
    setButtonActive(buttonP);
    setButtonActive(buttonG);

    console.log(buttonP);
    console.log(buttonG);
}

function setButtonActive(button) {
    button.addEventListener('load', function() {
        this.classList.add('active');
        console.log(this.classList);
    });
}


setButtonsActive();

button.addEventListener('click', function getButtonStyle() {
    if(this.classList.contains('active')){
        this.classList.remove('active');
    }
    else this.classList.add('active');
});