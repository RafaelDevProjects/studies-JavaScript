Whenever we work with a Node.js project from scratch, one of the first things we do is create a package.json file using the npm init or yarn init command; Just like for all installations of external libs, we use the 'npm install <package name>' or 'yarn add <package name>' command.
Both are package managers, with NPM standing for Node Package Manager.


## Local vs global installation

These code packages can be installed locally, being available only to the project in which they were installed through the 'node_modules' folder, and globally, being installed in a general NPM directory and being available to all projects on your computer, without the need for install separately in each project.

Most of the time, you will use the local option, with the commands 'npm install <package name>' or 'yarn add <package name>', as it is easier to manage the version of the libs we use and often, a package that we install “pulls” one or several other auxiliary packages that it needs to work. The ideal is not to pollute the global directory with libs that can only be used in one project.

Some more complex libs and frameworks will require installation to be done globally to work. It is always worth consulting the documentation for each one. To perform a global package installation, we use the 'npm install -g <package name>' or 'yarn add global <package name>' commands.


### Chalk Library in JavaScript

Chalk is a JavaScript library designed to enhance text output in the console by adding color and style. Particularly useful for command-line interfaces (CLIs) and Node.js scripts, Chalk provides a range of formatting options to improve readability and user experience.
[CHALK](https://www.npmjs.com/package/chalk)

### *fs* Library in JavaScript

The fs (File System) library in JavaScript is a core module that provides functionality to interact with the file system. It is particularly useful for reading, writing, and manipulating files in a Node.js environment.
[FS](https://nodejs.org/api/fs.html) 
