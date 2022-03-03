#!/usr/bin/env node

/**  */
import { program } from 'commander';
import inquirer from 'inquirer';
import { devRun, mainBuild, runElectron } from '../plugin';

program
  .command('dev')
  .description('调试项目')
  .alias('c')
  .action((projectName, options) => {
    createInquirer(options, (name) => {
      console.log('选择调试：', name)
      switch (name) {
        case "编译":
          mainBuild();
          break;
        case "运行":
          // runElectron(3000);
          break;
        case "打包编译":
          break;
        default:
          break;
      }
    })
  })
program
  .command('build')
  .description('编译项目')
  .action((projectName, options) => {
    createInquirer(options, (name) => {
      console.log('选择了', name)
      switch (name) {
        case "张拉":
          break;

        default:
          break;
      }
    })
  })
program
  .command('run <service-port>')
  .description('调试运行')
  .alias('r')
  .action(servicePort => {
    console.log('run', servicePort)
    const port = Number(servicePort);
    if (port % 1 === 0) {
      console.log(`${process.cwd()} -> 调试监听：${port}`)
    } else {
      console.log('请输入正确的端口号')
    }
    // createInquirer(options, (name) => {
    // })
  })
program
  .command('builder')
  .description('打包')
  .alias('b')
  .action(() => {
  })


function createInquirer(options, callback) {
  const { _name, _description } = options
  inquirer
    .prompt([
      {
        type: 'list',
        name: _name,
        message: `请选择${_description}`,
        choices: ['编译运行', '运行', '打包编译', '顶推', '步履']
      }
    ])
    .then((answer) => {
      console.log('选择结果', _name, answer[_name]);
      // console.log('路径__dirname', __dirname);
      // console.log('路径__filename', __filename);
      callback(answer[_name])
    })
}


program.version('1.0.0').parse(process.argv)
