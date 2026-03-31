import fs from 'fs';

fs.writeFile('output.txt', 'Node.js is awesome!', (err) => {
  if (err) throw err;
  console.log('✅ File has been saved!');
});