"use strict";
const path = require("node:path");
const { app, BrowserWindow } = require("electron");
let mainWindow = null;
function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1280,
        height: 720,
        frame: false,
        transparent: true
    });
    mainWindow.webContents.loadFile(path.join(__dirname, "../../static", "index.html"));
}
app.once("ready", () => createWindow());
app.once("window-all-closed", () => app.quit());
