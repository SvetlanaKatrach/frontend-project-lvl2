import fs from 'fs';

const filePathAbsolute1 = path.resolve('/fictures', '/file1.json');
const filePathAbsolute2 = path.resolve('/fictures', '/file2.json');

const fileName1 = 'file1.json';
const fileName2 = 'file2.json';

const filePathCWD1 = `${process.cwd()}${fileName1}`;
const filePathCWD2 = `${process.cwd()}${fileName2}`;

const data1 = fs.readFileSync(filePathAbsolute1, 'utf-8', {key, value});
const data2 = fs.readFileSync(filePathAbsolute2, 'utf-8', {key, value});