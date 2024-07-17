const fs = require('fs');
const path = require('path');
const buildDir = path.join(__dirname, 'build');
const uploadsDir = path.join(__dirname, 'uploads');

function copyFiles(srcDir, destDir) {
  fs.readdirSync(srcDir).forEach(file => {
    const srcFile = path.join(srcDir, file);
    const destFile = path.join(destDir, file);
    fs.copyFileSync(srcFile, destFile);
    console.log(`Copied ${file} to ${destDir}`);
  });
}

// Copy all files from 'uploads' to 'build/uploads'
copyFiles(uploadsDir, path.join(buildDir, 'uploads'));
