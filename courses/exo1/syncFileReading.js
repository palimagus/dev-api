const fs = require('fs');

function syncFilesReading(dirPath) {
    console.time("SyncExecTime");
    fs.readdir(dirPath, 'utf-8', (err, files) => {
        if (err) {
            console.error(err);
            return 1;
        } else {
            files.forEach(path => {
                fs.readFile(dirPath + "/" + path, 'utf-8', (err, data) => {
                    if (err) {
                        console.error(err);
                        return 2;
                    } 
                    console.log(data);
                });
            })
        }
    })
    console.timeEnd("SyncExecTime");
}

exports.syncFilesReading = syncFilesReading;