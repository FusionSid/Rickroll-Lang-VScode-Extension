import * as vscode from 'vscode';
async function rickrollLinkCommand() {

    vscode.window.showInformationMessage("Get rick rolled!!!");
    vscode.env.openExternal(vscode.Uri.parse("https://www.youtube.com/watch?v=dQw4w9WgXcQ"));
}

async function rickrollCommand() {
    const panel = vscode.window.createWebviewPanel(
        "rickroll.video",
        "Get Rickrolled!!!",
        {
            viewColumn: vscode.ViewColumn.Beside,
            preserveFocus: true,
        },
        { enableScripts: true }
    );

    panel.reveal();
    panel.webview.html = `
        <html lang="en"> 
            <head>
                <meta charset="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>
                    #video {
                        display: flex;
                        flex-flow: column nowrap;
                        justify-content: center;
                        align-items: center;
                        width: 100%;
                        height: 100%;
                    }
                </style>
            </head>
            <body>
                <div id="video">
                    <video autoplay muted controls>
                        <source src="https://yewtu.be/latest_version?id=dQw4w9WgXcQ">
                    </video>
                </div>
            </body>
        </html>
    `;
}

type Command = {
    name: string,
    callback: () => Promise<void>
};

export const commands: Command[] = [
    { name: "rickroll", callback: rickrollCommand },
    { name: "rickrollLink", callback: rickrollLinkCommand }
];
