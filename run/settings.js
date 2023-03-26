import fs from 'fs';
import path from 'path';

const packageJson = fs.readFileSync(path.join(process.cwd(), './package.json'), 'utf-8');
let version = '1.0.0';

try {
    const parsed = JSON.parse(packageJson);
    version = parsed.version;
} catch (ex) {}

export const settings = {
    entryPoints: ['./src/index.ts'],
    bundle: true,
    sourcemap: 'linked', // external
    minify: true,
    target: ['es6'],
    outfile: './dist/mz-math.min.js',
    banner: {
        js: `/* 
TypeScript Math Helpers
Version: ${version}
Documentation: https://github.com/mzusin/mz-math
License: MIT License        
Author: Miriam Zusin, miriam.zusin@gmail.com>                          
*/`,
    },
};