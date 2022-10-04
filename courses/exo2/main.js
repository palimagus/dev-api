const { asyncFilesReading } = require('../exo1/asyncFileReading');
const { syncFilesReading  } = require('../exo1/syncFileReading');

async function main() {
    
    await asyncFilesReading("./courses/exo1/files");
    syncFilesReading("./courses/exo1/files");
}

main();