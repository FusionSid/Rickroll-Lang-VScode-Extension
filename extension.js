const vscode = require('vscode');
/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	console.log('Congratulations, your extension "rickroll" is now active!');

	let disposable = vscode.commands.registerCommand('rickroll.helloWorld', function () {
		vscode.window.showInformationMessage('Hello World!');
	});

	let rickroll = vscode.commands.registerCommand("rickroll.rickroll", async function () {

		vscode.window.showInformationMessage("Get rick rolled!!!");
		vscode.env.openExternal(`https://www.youtube.com/watch?v=dQw4w9WgXcQ`);
	});


	context.subscriptions.push(disposable);
	context.subscriptions.push(rickroll);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
