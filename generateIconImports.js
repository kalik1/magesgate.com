const fs = require('fs');
const path = require('path');

// Directory containing your icons
const iconsDir = path.join(__dirname, 'src/assets/images/icongrid');
// Output file that will contain the imports and export
const outputFile = path.join(__dirname, 'src/components/IconGrid/icons.js');

const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

fs.readdir(iconsDir, (err, files) => {
    if (err) {
        console.error("Could not list the directory.", err);
        process.exit(1);
    }

    const iconBounds = [41, 71]

    const shuffled_files = shuffle(files)
    let importStatements = shuffled_files.map((file, index) => {
        // Assuming all files are .png - adjust if your files have different extensions
        if (index >= iconBounds[0] && index <iconBounds[1]) {
            const variableName = `icon_${index - iconBounds[0] + 1}`;
            const filePath = `../../assets/images/icongrid/${file}`;
            return `import ${variableName} from '${filePath}';`;
        }
        return undefined;
    }).filter(e => !!e);

        const exportStatement = `export const icons = [${importStatements.map((filename, index) => filename.split(" ")[1]).join(', ')}];`;

    const content = `
// This file is auto-generated by generateIconImports.js. Do not edit manually.
${importStatements.join('\n')}
${exportStatement}
`;

    fs.writeFile(outputFile, content, (err) => {
        if (err) {
            console.error("Could not write the file.", err);
            return;
        }

        console.log("Icon imports generated successfully!");
    });
});
