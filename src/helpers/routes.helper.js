import fs from "fs";
import path from "path";

const routerEndsWith = "index.js";
const routerHandler = "router";

function findJsFiles(dirPath) {
  const files = fs.readdirSync(dirPath);
  const arrayOfFiles = [];
  for (const file of files) {
    if (file.endsWith(routerEndsWith)) {
      const fullPath = path.join(dirPath, file);
      arrayOfFiles.push(fullPath);
    }
  }
  return arrayOfFiles;
}

function importAllFiles(files) {
  const modules = files.map((file) => require(file)[routerHandler]);
  return modules;
}

exports.getRoutesArray = (dirPath) => {
  try {
    const files = findJsFiles(dirPath);
    const exportsArray = importAllFiles(files);
    return exportsArray.flat(1);
  } catch (error) {
    console.error("Failed to read module exports:", error);
    return [];
  }
};
