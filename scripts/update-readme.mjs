/**
 * Gathers basic information about all packages in monorepo
 * and inserts them into the root README.md
 */
import path from 'path';
import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const ROOT_PATH = path.resolve(__dirname, '../');
const PACKAGES_FOLDER = path.resolve(ROOT_PATH, 'packages');

const packagesFolders = fs.readdirSync(PACKAGES_FOLDER);

const packages = packagesFolders.map((folder) => {
  const pkgFile = fs.readFileSync(
    path.resolve(PACKAGES_FOLDER, folder, 'package.json'),
    'utf-8'
  );
  const pkgContent = JSON.parse(pkgFile);
  const pkg = {
    name: pkgContent.name,
    description: pkgContent.description,
    version: pkgContent.version,
    license: pkgContent.license,
    folderPath: `./packages/${folder}`,
  };

  const badges = {
    version: `[![npm (scoped)](https://img.shields.io/npm/v/${pkg.name})](https://www.npmjs.com/package/${pkg.name})`,
    license: `[![license](https://img.shields.io/badge/license-${pkg.license}-97ca00)](${pkg.folderPath}/LICENSE)`,
  };

  return {
    ...pkg,
    badges,
  };
});

const rootReadme = fs.readFileSync(
  path.resolve(ROOT_PATH, 'README.md'),
  'utf-8'
);

const regex = /(<!--\sPackages:\sSTART\s-->)(.|\n)*(<!--\sPackages:\sEND\s-->)/gm;

const newRootReadme = rootReadme.replace(
  regex,
  '$1\n' +
    'Package | Description | Version | License\n' +
    '--- | --- | --- | ---\n' +
    packages
      .map((pkg) =>
        [
          `[${pkg.name}](${pkg.folderPath})`,
          pkg.description,
          pkg.badges.version,
          pkg.badges.license,
        ].join(' | ')
      )
      .join('\n') +
    '\n$3'
);

fs.writeFileSync(path.resolve(ROOT_PATH, 'README.md'), newRootReadme);
