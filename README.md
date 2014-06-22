Hour Monitor
==============
*v.2014-06-20*

An hour tracking tool. Hour Monitor keeps track of hours worked, overtime, holiday, double time, etc..

Technologies Used
------------------
1. [nodeJs](https://nodejs.org/).
2. [Node-Webkit](https://github.com/rogerwang/node-webkit).
3. [Traceur](https://github.com/google/traceur-compiler).
4. [Glyphicons](https://glyphicons.com/).
5. Skeleton from [Spritzup](https://github.com/dennmat/spritzup/).

Setup Instructions
------------------
1. NodeJs - Install and add to path with installer.
2. Node-webkit - Clone to somewhere, add main folder to path.
3. Node Modules - cd to project folder in cmd, type npm install -g gulp to setup global gulp, then type npm install to install all dependencies from package.json file.
4. Check node_modules folder for: .bin, gulp, gulp-sass, gulp-traceur, traceur folders.
5. download jquery (using 2.1.1.min.js atm) and place it in Tools/External/.
6. download bootstrap and place the files in Tools/External/.

Run Instructions
----------------
#### Windows
1. Setup the dependencies.
2. If run.bat available: run it.
3. If run.bat not available: Open cmd window and cd to project folder, type gulp, if setup was ok then gulp should compile all js and scss files into Compiled/ and run program.

Screenshots
-----------
![Bootstrap Implemented](https://raw.githubusercontent.com/rassweiler/HourMonitor/master/Screens/screen001.png "Bootstrap Implemented")