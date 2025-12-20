import { mkdir, rm, writeFile } from "node:fs";
import { fmt } from "./format.ts";

export const scanFiles = (pat: string, cwd: string) => Iterator.from(
  new Bun.Glob(pat).scanSync({
    cwd,
    absolute: true,
    followSymlinks: false
  })
);

export const tryWriteAsync = (path: string, content: string) =>
  writeFile(path, content, (err) => {
    if (err !== null)
      console.error('Failed to write file:', fmt.relativePath(path));
    else
      console.log('File written successfully:', fmt.relativePath(path));
  });

export const tryMkdirAsync = (path: string, success: () => any) => {
  mkdir(path, {
    recursive: true
  }, (err) => {
    if (err !== null) {
      console.error('Failed to create directory:', fmt.relativePath(path));
      return;
    }

    console.log('Directory created:', fmt.relativePath(path));
    success();
  });
};

export const tryRmAsync = (path: string) => {
  rm(path, {
    recursive: true,
  }, (err) => {
    if (err !== null) {
      console.error('Failed to remove:', fmt.relativePath(path));
      return;
    }

    console.log('Remove directory successfully:', fmt.relativePath(path));
  })
}
