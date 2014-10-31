
var
    ansi = require('../ansi'),
    downloads;

downloads = [
    { file: 'test1', progress: 0 },
    { file: 'test2', progress: 0 },
    { file: 'test3', progress: 0 }
];

ansi.clear();

function update() {

    downloads.forEach(function (download, index) {
        var
            bar = '', pg = download.progress,
            lineNum = index + 1;

        while (pg > 0) {
            if (pg > 1) {
                bar += '\u2588';
            } else {
                bar += '\u2590';
            }
            pg -= 2;
        }

        ansi.move(lineNum)
            .clearLine()
            .print('> %s', download.file)
            .col(-52).print('[')
            .col(-51).print(bar)
            .col(-1).print(']');
            //.col(20).print(download.progress.toFixed(1));
    });
}

function simulate() {
    var
        finished = 0;

    downloads.forEach(function (download) {

        download.progress += Math.random() * 5;

        if (download.progress >= 100) {
            download.progress = 100;
            finished++;
        }
    });

    update();

    if (finished == downloads.length) {

        process.exit(0);

    } else {

        setTimeout(simulate, Math.random() * 300);
    }
}

setTimeout(simulate, Math.random() * 300);
