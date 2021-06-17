#!/usr/bin/env node

import url from 'url'
import path from 'path'
import fs from 'fs-extra'
import glob from 'glob'
import mustache from 'mustache'
import axios from 'axios'

const projectPath = process.cwd()

const error = message => {
  console.error('[x]', message)
  process.exit(1)
}

const dirname = url.fileURLToPath(path.dirname(import.meta.url))
const projectName = path.parse(projectPath).name
const packageJsonPath = path.resolve(projectPath, 'package.json')

fs.existsSync(packageJsonPath) && error('package.json exist')

const templatePath = path.resolve(dirname, 'template')
const templateFiles = glob.sync(path.resolve(templatePath, './**/*'), { dot: true })

const { data: { latest: kdaLatestVersion } } = await axios.get('https://registry.npmjs.org/-/package/kda/dist-tags')
const { data: { latest: kdaBuildLatestVersion } } = await axios.get('https://registry.npmjs.org/-/package/kda-build/dist-tags')

for (const file of templateFiles) {
  const fileName = path.basename(file)
  if (['.DS_Store'].indexOf(fileName) >= 0 || fs.statSync(file).isDirectory()) continue

  // 隐藏文件
  let fileNameHidden
  if (fileName[0] === '_') {
    fileNameHidden = fileName.replace('_', '.')
  }

  let distFile = path.normalize(file).replace(templatePath, projectPath)

  // 重命名隐藏文件
  if (fileNameHidden) {
    distFile = distFile.replace(fileName, fileNameHidden)
  }

  const content = mustache.render(fs.readFileSync(file, 'utf8'), {
    name: projectName,
    kdaVersion: kdaLatestVersion,
    kdaBuildVersion: kdaBuildLatestVersion
  })

  fs.outputFileSync(distFile, content, 'utf8')
}

console.log('🎉 Successfully created project')
console.log('👉 Get started with the following commands:\n')
console.log('$ yarn install')
console.log('$ yarn start')
