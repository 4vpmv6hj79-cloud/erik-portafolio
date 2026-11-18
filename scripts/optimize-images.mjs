import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const imagesDirectory = path.resolve('src/assets/projects');

const files = (await fs.readdir(imagesDirectory)).filter((file) =>
  file.toLowerCase().endsWith('.png')
);

for (const file of files) {
  const inputPath = path.join(imagesDirectory, file);
  const outputPath = path.join(
    imagesDirectory,
    `${path.parse(file).name}.webp`
  );

  await sharp(inputPath)
    .webp({ quality: 82, effort: 6 })
    .toFile(outputPath);

  const originalSize = (await fs.stat(inputPath)).size;
  const optimizedSize = (await fs.stat(outputPath)).size;
  const reduction = ((1 - optimizedSize / originalSize) * 100).toFixed(1);

  console.log(
    `${file}: ${(originalSize / 1024).toFixed(0)} KB → ${(optimizedSize / 1024).toFixed(0)} KB (${reduction}% menos)`
  );
}

console.log('\nOptimización finalizada.');
