// First solve the problem. Then, write the code."
window.onload = function () {
    const tw = new Typewriter('#typewriter', { loop: true });
    tw.changeDelay(40).
        changeDeleteSpeed(5).
        typeString('_').
        pauseFor(1_000).
        // deleteAll().
        typeString('Hello, friend.').
        pauseFor(10_000).
        start();
}
