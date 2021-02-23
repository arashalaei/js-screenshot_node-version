/**
 * @author Arash Alaei <arashalaei22@gmail.com>.
 * @since Tuesday, February 23, 2021.
 * @deprecated A very simple program that takes screenshots.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import screenshot from 'screenshot-desktop';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

screenshot({format: 'png'}).then((img) => {
    fs.writeFileSync(path.join(__dirname,`./${Date.now()}.png`),img);
}).catch((err) => {
    console.log(err);
});

