global.$ = $;
var $traceurRuntime = global.$traceurRuntime;

var fs = require('fs');
var gui = require('nw.gui');
var active = "nav-home";
var JobManager = require('../Compiled/jobmanager.js');
var Panel = require('../Compiled/panel.js');
var main = null;

class Main{
  constructor() {
    this.win = gui.Window.get();
    this.win.showDevTools();

    this.job_manager = null;
    this.panel = null;
    this.config = {};

    this.loadConfig();
    win.on('close', function (){
      gui.Window.get().hide()
      main.closeWindow();
      gui.Window.get().close(true);
    });
  }

  loadConfig() {
    fs.exists('../config.json', exists => {
      if (exists && false) {
        fs.readFile('../config.json', (err, data) => {
          this.config = JSON.parse(data);
          this.configLoaded();
        });
      } else {
        this.configLoaded();
      }
    });
  }

  configLoaded() {
    this.setUp();
  }

  setUp() {
    this.win.show();
    this.win.maximize();

    this.job_manager = new JobManager();
  }
  serialiseJobs(){
    var openJobs = [];

    for(var job of this.job_manager.jobs){
      openJobs.push(job.serialise());
    }
    return openJobs;
  }
  serialise(){
    var data = this.job_manager.serialise();
    alert(data);
    return data;
  }
  testF(){
    fs.writeFile('config.json', JSON.stringify(this.serialise()), err => {});
  }
  closeWindow(){
    fs.writeFile('config.json', JSON.stringify(this.serialise()), err => {});
  }
}

$(function() {
  main = new Main();
  //gui.Window.get().on('close', main.closeWindow());
});
