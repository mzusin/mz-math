import esbuild from 'esbuild';
import { settings } from './settings.js';

const args = process.argv.slice(2);
const watch = args.length > 1 && args[1].trim().toLowerCase() === 'watch';

settings.platform = 'node';
settings.entryPoints = ['./src/index-esm.ts'];
settings.outfile = './dist/mz-math.node.cjs';

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
