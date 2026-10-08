const fs = require('fs');
const path = require('path');
// make the path for the logs folder
const logsDir = path.join(process.cwd(), 'Logs');

// check if the logs folder exists
if (fs.existsSync(logsDir)) {
    // get all files inside the folder
    const files = fs.readdirSync(logsDir);
    // delete each file
    files.forEach(file => {
        console.log(`delete files...${file}`);
        fs.unlinkSync(path.join(logsDir, file));
    });

    // remove the logs folder
    fs.rmdirSync(logsDir);
}