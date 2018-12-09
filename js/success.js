(() => {
    //get ref to the lottie container
    const checkmark = document.querySelector('.checkmark');

    let preloadAnim = bodymovin.loadAnimation({
        wrapper : checkmark,
        animType : 'svg',
        loop : false, //change this to false and it'll only play once
        // autoplay : false, //the auto autplay is true so we make it false so that it doesn't start to play until we mouse over it
        path : 'data/email.json'
    });

    function playAnimation() {
        preloadAnim.play();
    }

    checkmark.addEventListener("onload", playAnimation); //this makes it so that when you mouseover it, it starts to spin
})();