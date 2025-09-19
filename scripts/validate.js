const fs = require('fs');
const path = require('path');

function validateProject() {
    const publicDir = path.join(__dirname, '..', 'public');
    const indexPath = path.join(publicDir, 'index.html');
    const manifestPath = path.join(publicDir, 'manifest.json');

    console.log('🔍 Validating project structure...');

    // Check required files
    const requiredFiles = [indexPath, manifestPath];
    const missing = requiredFiles.filter(file => !fs.existsSync(file));

    if (missing.length > 0) {
        console.error('❌ Missing required files:', missing.map(f => path.basename(f)));
        process.exit(1);
    }

    // Validate HTML structure
    const htmlContent = fs.readFileSync(indexPath, 'utf8');
    const hasTitle = htmlContent.includes('<title>');
    const hasViewport = htmlContent.includes('viewport');
    const hasManifest = htmlContent.includes('manifest.json');

    if (!hasTitle || !hasViewport || !hasManifest) {
        console.error('❌ HTML validation failed - missing required elements');
        process.exit(1);
    }

    // Validate manifest
    try {
        const manifestContent = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
        if (!manifestContent.name || !manifestContent.start_url) {
            console.error('❌ Invalid manifest.json');
            process.exit(1);
        }
    } catch (error) {
        console.error('❌ Invalid JSON in manifest.json:', error.message);
        process.exit(1);
    }

    console.log('✅ Project validation passed');
}

if (require.main === module) {
    validateProject();
}

module.exports = { validateProject };
