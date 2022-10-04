const fs = require('fs');

async function asyncFilesReading(dirPath) {
    console.time("AsyncExecTime");
    try {
        const files = await fs.readdirSync(dirPath, "utf-8");
        files.forEach(async f => {
            const data = await fs.readFileSync(dirPath + "/" + f, "utf-8");
            console.log(data);
        })
        
    } catch (error) {
        console.error(error);
    }
    console.timeEnd("AsyncExecTime");
}

exports.asyncFilesReading = asyncFilesReading;