import * as vscode from 'vscode';
async function rickrollCommand() {

    vscode.window.showInformationMessage("Get rick rolled!!!");
    vscode.env.openExternal(vscode.Uri.parse("https://www.youtube.com/watch?v=dQw4w9WgXcQ"));
}

type Command = {
    name: string,
    callback: () => Promise<void>
};

export const commands: Command[] = [{ name: "rickroll", callback: rickrollCommand }];
