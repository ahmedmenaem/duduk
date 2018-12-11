import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';
import pkg from '../../package.json';
import fs from 'fs';
import inquirer from 'inquirer';
import childProcess from 'child_process';

export default {
	version: () => {
		clear();
		console.log(
			chalk.green(
				figlet.textSync('DuDuk', {
					horizontalLayout: 'full'
				})
			)
		);
		console.log(chalk.green('[INFO]'), `duduk version: ${pkg.version}`);
		console.log(chalk.green('[INFO]'), 'for more info please type (duduk --help) or visit our web site!');
	},

	help: () => {},

	default: (command) => {
		console.log(chalk.red('[ERROR]'), `Command "${command}" not found.`);
		console.log(chalk.blue('[INFO]'), 'for more info please type (duduk --help) or visit our web site!');
	},

	init: async () => {
		if (fs.existsSync('.git')) {
			console.log(chalk.green('[INFO]'), `Already git repository exists!`);
		} else {
			console.log(
				chalk.green('[INFO]:'),
				'(duduk init) this command will initialize a new git repository in this directoy!'
			);
			const questions = [
				{
					type: 'confirm',
					name: 'initNewRepo',
					message: 'Intialize new git repository?'
				}
			];
			const data = await inquirer.prompt(questions);
			if (data.initNewRepo) {
				childProcess.exec('git init', (err, stdout, stderr) => {
					if (err) {
						throw new Error(err);
					}
					console.log(chalk.green('[INFO]: '), stdout);
				});
			}
		}
	}
};
