
var
    tty = require('../'),
    downloads;

downloads = [
    { file: 'test1', progress: 0 },
    { file: 'test2', progress: 0 },
    { file: 'test3', progress: 0 }
];

downloads.forEach(function (download, index) {
    var
        lineNum = index + 1;

    tty
        .line(lineNum)
        .col(0).write('> %s', download.file)
        .col(-10).write('%.1d%', download.progress);
});

function simulate() {

    downloads.forEach(function (download) {

        download.progress += Math.random() * 5;

        if (download.progress > 100) {
            download.progress = 100;
        }
    });

    update();

    setTimeout(simulate, Math.random() * 1000);
}

setTimeout(simulate, Math.random() * 1000);
