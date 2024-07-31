#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { promisify } = require('util');
const mkdir = promisify(fs.mkdir);

const TEMPLATE_DIR = path.join(__dirname, '../templates');

const readTemplate = (filename) => {
  return fs.readFileSync(path.join(TEMPLATE_DIR, filename), 'utf8');
};

const writeFile = async (dir, filename, content) => {
  const filepath = path.join(dir, filename);
  await fs.promises.writeFile(filepath, content, 'utf8');
  console.log(`Created ${filepath}`);
};

const setupProject = async (projectName) => {
  const projectDir = path.join(process.cwd(), projectName);

  try {
    // Create project directory
    await mkdir(projectDir, { recursive: true });

    // Create files in the project directory
    await writeFile(projectDir, 'index.js', readTemplate('index.js'));
    await writeFile(projectDir, 'mongoAuthState.js', readTemplate('mongoAuthState.js'));
    await writeFile(projectDir, 'settings.js', readTemplate('settings.js'));

    // Create package.json with the project name
    let packageJson = readTemplate('package.json');
    packageJson = packageJson.replace(/PROJECT_NAME/g, projectName);
    await writeFile(projectDir, 'package.json', packageJson);

    console.log('Project setup complete!');

    // Install dependencies in the project directory
    console.log('Installing dependencies...');
    execSync('npm install', { cwd: projectDir, stdio: 'inherit' });

    console.log('You can now run your WhatsApp bot with "npm start" inside the project directory.');
  } catch (error) {
    console.error('Error setting up the project:', error);
  }
};

const [,, command, projectName] = process.argv;

if (command === 'create' && projectName) {
  setupProject(projectName);
} else {
  console.log('Usage: wabot create <project name>');
}
