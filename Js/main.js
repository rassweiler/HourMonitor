global.$ = $;
var $traceurRuntime = global.$traceurRuntime;

var fs = require('fs');
var gui = require('nw.gui');
var active = "nav-home";
var JobManager = require('../Compiled/job.js');

class Main{
  constructor() {
    this.win = gui.Window.get();
    this.win.showDevTools();

    this.job_manager = null;
    this.config = {};

    this.loadConfig();
  }

  loadConfig() {
    fs.exists('../sconfig.json', exists => {
      if (exists) {
        fs.readFile('../sconfig.json', (err, data) => {
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
}

$(function() {
  var m = new Main();
});