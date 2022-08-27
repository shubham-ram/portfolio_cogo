var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Hello')
    .pauseFor(2000)
    .deleteAll()
    .typeString('नमस्ते')
    .pauseFor(2000)
    .deleteAll()
    .typeString('नमस्कार')
    .pauseFor(2000)
    .start();