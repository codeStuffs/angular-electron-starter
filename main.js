const {app, BrowserWindow} = require('electron')
//const path = require('path');
//const url = require('url');


let mainWindow

function createWindow() {
  // create BrowserWindow
  mainWindow =  new BrowserWindow({width: 800, height:600})

  //load the index of the app //index.html
  // mainWindow.loadURL(url.format({
  //   pathname: path.join(__dirname,'index.html'),
  //   protocol: 'file',
  //   slashes: true
  // }))

  mainWindow.loadURL('http://localhost:4200');

  // open the devTools
  mainWindow.webContents.openDevTools()

  //Emmitted when the window is closed
  mainWindow.on('closed', function() {
    //Dereference the window object, ussually would store windows
    //in an array if the app multi windows, this is the time when you
    //should delete the corresponding element.
    mainWindow = null
  })
}


//this method will be calledd when electron has finished initialization and is
//ready to create browser window Some Apis can only be used after this event
app.on('ready', createWindow)

//Quit when all widows are closed
app.on('window-all-closed',() =>{
  //on macOs it is common for applications and their menu bar to stay active until
  // the user quits the app
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', ()=> {
  if (mainWindow === null) {
    createWindow()
  }
})

//in this file you can include the rest of your apps specific main process code
// you can also put them in seperate files and require them here.
