import inquirer from 'inquirer';
import minimist from 'minimist';
import { execute } from './executer';
import commander from 'commander';

export default {
	listenToCommands: () => {
		const argv = minimist(process.argv.slice(2));
		const commands = argv._;
		const argvKeys = Object.keys(argv);
		if (commands.length === 0) {
			if (argvKeys.length > 1) {
				execute(argvKeys[1]);
			} else {
				execute('version');
			}
		} else {
			execute(commands[0]);
		}

		// console.log(argvKeys.length);
		// if (argvKeys.length === 1) {
		// 	if (commands.length === 1) {
		// 		execute(commands[0]);
		// 	} else if (commands.length > 1) {
		// 		// need to solve
		// 		execute(commands.join(' '));
		// 	} else {
		// 		execute('version');
		// 	}
		// } else {
		// 	console.log(commands.length);
		// 	if (commands.length === 1) {
		// 		let arg = [];
		// 		let obj = {};
		// 		console.log(argvKeys);
		// 		for (let key in argvKeys) {
		// 			console.log(key);
		// 			if (key !== '_') {
		// 				let argKey = key.length > 1 ? `--${key}` : `-${key}`;
		// 				obj[argKey] = argv[key];
		// 				console.log(obj);
		// 				arg.push(obj);
		// 			}
		// 		}
		// 		const options = execute(commands[0], arg);
		// 	} else {
		// 	}
		// if (commands.length) {
		// 	execute(commands[0]);
		// } else {
		// 	console.log(typeof argv[argvKeys[1]]);
		// 	console.log(execute(argvKeys[1]));
		// }
		// }
	}
};
