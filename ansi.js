// http://en.wikipedia.org/wiki/ANSI_escape_code#CSI_codes

"use strict";

function update() {
    clear();
    moveToCenter();
    printSize();
}

function clear() {
    process.stdout.write('\x1b[2J');
}

function moveToCenter() {
    var
        x = Math.round(process.stdout.rows / 2),
        y = Math.round(process.stdout.columns / 2);

    process.stdout.write('\x1b[' + x + ';' + y + 'H');
}

function printSize() {
    process.stdout.write(Math.round(process.stdout.rows / 2) + 'x' + Math.round(process.stdout.columns / 2));
}

process.stdout.on('resize', function() {
    update();
});

// keep process alive http://stackoverflow.com/questions/23622051
setInterval(function(){}, Math.POSITIVE_INFINITY);

update();
