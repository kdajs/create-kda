#!/usr/bin/env node

const path = require('path')
const fs = require('fs-extra')
const execa = require('execa')
const glob = require('glob')
const mustache = require('mustache')
const axios = require('axios')
const projectPath = process.cwd()

const error = message => {
  console.error('[x]', message)
  process.exit(1)
}

;(async () => {
  const projectName = path.parse(projectPath).name
  const packageJsonPath = path.resolve(projectPath, 'package.json')

  fs.existsSync(packageJsonPath) && error('package.json exist')

  const templatePath = path.resolve(__dirname, './template')
  const templateFiles = glob.sync(path.resolve(templatePath, './**/*'), { dot: true })

  const { data: { latest: kdaLatestVersion } } = await axios.get('https://registry.npmjs.org/-/package/kda/dist-tags')

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
      kdaVersion: kdaLatestVersion
    })

    fs.outputFileSync(distFile, content, 'utf8')
  }

  // 安装默认依赖
  await execa.command('yarn install', { cwd: projectPath, stdio: 'inherit' })
})()
