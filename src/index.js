#!/usr/bin/env node
import cli from './lib/cli';

const start = async () => {
	cli.listenToCommands();
};

start();
