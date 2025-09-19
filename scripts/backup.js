const fs = require('fs');
const path = require('path');

function createBackup() {
    const timestamp = new Date().toISOString().split('T')[0];
    const backupDir = path.join(__dirname, '..', 'backups');

    // Create backups directory if it doesn't exist
    if (!fs.existsSync(backupDir)) {
        fs.mkdirSync(backupDir, { recursive: true });
    }

    // Copy entire public directory
    const publicDir = path.join(__dirname, '..', 'public');
    const backupPath = path.join(backupDir, `backup-${timestamp}`);

    fs.cpSync(publicDir, backupPath, { recursive: true });
    console.log(`Backup created: ${backupPath}`);
}

if (require.main === module) {
    createBackup();
}

module.exports = { createBackup };
