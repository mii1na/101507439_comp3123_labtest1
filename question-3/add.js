const fs = require('fs');
const path = require('path');
// make the path for the logs folder
const logsDir = path.join(process.cwd(), 'Logs');

// create the folder if it does not exist
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
}

// move into the logs folder
process.chdir(logsDir);

// create 10 log files
for (let i = 0; i < 10; i++) {
    const fileName = `log${i}.txt`;

    fs.writeFileSync(fileName, `This is log file ${i}`);
    console.log(fileName);
}