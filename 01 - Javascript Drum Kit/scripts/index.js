`Instead of using transitionend event listener on each key to remove the
 transition, as taught in the course, I used setTimeout to remove the transition.
 Because when I use the transitionend property, and if a user continuously
 pressses keys, the playing class doesn't get removed from the div because
 the user presses the key again before the transition ends, so the transitionend
 event never fires, and the playing class doesnt get removed.`

const keys = document.querySelectorAll(".key");

function playSound(dataKey) {
    const audio = document.querySelector(`audio[data-key=${dataKey}]`);
    const key = document.querySelector(`.key[data-key=${dataKey}]`);
    if(!audio) return;
    key.classList.add("playing");
    audio.currentTime = 0;
    audio.play();

    setTimeout(() => {
        key.classList.remove("playing");
    }, 70);
}

window.addEventListener('keydown', e => {
    playSound(e.key);
});
keys.forEach(key => key.addEventListener('click', () => {
    playSound(key.getAttribute("data-key"));
}));