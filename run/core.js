import esbuild from 'esbuild';
import fs from 'fs';
import path from 'path';

/*
import pkg from 'npm-dts';
const { Generator } = pkg;

// generate typescript types
new Generator({
    entry: './src/index.ts',
    output: './dist/index.d.ts',
}).generate();
*/

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
    outfile: './dist/tc-math.min.js',
    banner: {
        js: `/* 
Tool Cool Math Helpers
Version: ${version}
Documentation: https://github.com/toolcool-org/toolcool-math
License: MIT License        
Author: Tool Cool, toolcool.org@gmail.com>                          
*/`,
    },
};

const args = process.argv.slice(2);
const watch = args.length > 1 && args[1].trim().toLowerCase() === 'watch';

if(watch){
    // ------------- watch ---------------
    settings.watch = {
        onRebuild(error, result) {

            if (error){
                // console.error(error);
            }
            else {
                console.log('Succeeded.');
            }
        },
    };
}

esbuild
    .build(settings)
    .then(result => {
        console.log(watch ? 'Watching...' : 'Done.');
    })
    .catch(() => process.exit(1));

/*
// compile for node.js
esbuild
    .build({
        ...settings,
        platform: 'node',
    })
    .then(result => {
        console.log(watch ? 'Watching...' : 'Done.');
    })
    .catch(() => process.exit(1));*/