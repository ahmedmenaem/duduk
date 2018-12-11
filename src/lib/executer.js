import commander from './commander';

export const execute = (command, option) => {
	switch (command) {
		case 'version':
		case 'v':
			commander.version();
			break;
		case 'help':
		case 'h':
			commander.help();
			break;
		default:
			commander.default(command);
			break;
		case 'init':
			commander.init();
			break;
	}
};
