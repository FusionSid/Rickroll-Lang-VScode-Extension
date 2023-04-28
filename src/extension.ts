import * as vscode from 'vscode';
import { commands } from './commands';

export function activate(context: vscode.ExtensionContext) {
	console.log('Extension "rickroll" is now active!');

	let helloWorld = vscode.commands.registerCommand('rickroll.helloWorld', () => {
		vscode.window.showInformationMessage('i just wanna tell you how im feeling "Hello World! from Rickroll-Lang"');
	});

	commands.map(({ name, callback }) => {
		let _command = vscode.commands.registerCommand(`rickroll.${name}`, callback);
		context.subscriptions.push(_command);
	});

	context.subscriptions.push(helloWorld);
	let hoverHandler = vscode.languages.registerHoverProvider('rickroll', {
		provideHover(document, position, token) {
			const range = document.getWordRangeAtPosition(position);
			const word = document.getText(range).split(" ");
			if (word.length === 1)
				return new vscode.Hover(word[0]);
		}
	});
	context.subscriptions.push(hoverHandler);


}

export function deactivate() { }
