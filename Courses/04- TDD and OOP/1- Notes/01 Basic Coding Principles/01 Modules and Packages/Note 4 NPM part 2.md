# Using NPM part 2
## installing an existing project's dependencies 
- When getting started with an existing project that already contains `package.json` and `package-lock.json` files, you'll need to use npm to install its dependencies. If you don't install a project's dependencies, you'll almost always receive errors when attempting to run the application.

- To install an existing project's dependencies, simply run the `npm install` command without providing any package names. This causes npm to install the dependencies listed in the `package-lock.json` file.

- During the package installation process, npm will display the overall status as it downloads and installs each package. When the installation process is completed, npm will display information in the terminal that summarizes what was done:

-  Older versions of npm didn't utilize `package-lock.json` files, so sometimes you'll work with existing projects that'll only have a `package.json` file. If there's just a `package.json` file, then running the `npm install` command will install the dependencies listed in that file.

## uninstalling a dependency 
Sometimes you'll install a dependency only to later on realize you actually don't need it. When this happens, you can use npm to remove the dependency from your project.

Imagine that you install the `lodash` package by running the following command:
`npm install lodash`

To uninstall it 
`npm unistall lodash`

## Updating a dependency 
Being able to leverage code that you didn't write yourself can be a huge timesaver. And while you don't have to directly maintain code contained within a package that you've taken as a dependency, you might find yourself needing to maintain the dependency itself.

For example, a package might contain a bug or the developer of the package might add a new feature that you now want to use in your application. When this happens, you can use npm to update the package.

Imagine that you added the `lodash` package as a dependency to a project awhile ago; back when the latest version of `lodash` was `3.0.0`. You can simulate this situation by installing a specific version of `lodash`:
`npm install lodash@3.0.0`

**if you want to update `lodash` you can use the following command** 
`npm update lodash` 


**if you want to update all project dependencies use the following command** 
`npm update`

**if you want to Re-install a dependency with updated semver information use the following command**
`npm install lodash@4.0.0` 

**Pro-Tip:** You can easily update a package to the latest version by specifying `latest` for the version **use the following command** 
`npm install lodash@latest` 

## Finding and fixing a package security vulnerabilities
use **npm audit** to report all security vulnerabilities 

in the audit report, you can use the `severity` field to determine how important it is to address the issue, npm defines four security levels:

- **Critical** => Address immediately 
- **High** => Address as quickly as possible 
- **Moderate** => Address as time allows
- **Low** => Address at your discretion 


**You can use the following command to fix the vulnerabilities**
`npm audit fix`

if the vulnerabilities not solved you can use the following command 
`npm audit fix --force`

## writing and running npm scripts 
In addition to helping you manage your project dependencies, npm also gives you a convenient way to define and run scripts that execute one or more commands that you'd normally run from the terminal.

npm scripts are defined using the `scripts` field in the `package.json` file:
```node.js
{
  "scripts": {
    "start": "node index.js"
  }
}
```

Once you've defined the `start` script, you can run it from a terminal like this:
`npm start`

It's also common to use a script to run tools that are installed using npm. For example, if you were writing unit tests for your project, you might install the `mocha` npm package and write a `test` script to execute `mocha` like this:

```node.js
{
  "scripts": {
    "start": "node index.js",
    "test": "mocha --watch"
  }
}
```
And to run the `test` script, you run the following command:
`npm test`

### Defining custom scripts
You can also define custom scripts. Imagine that you installed the `nodemon` package, a file watcher that will restart your application when changes are made to project files.

Defining a custom script for starting your application using `nodemon` allows you leave the `start` just as it is. That way you've got the flexibility to start your application with or without file watching.

To define a custom script, simply define a script with a name that's not in the list of predefined npm scripts:

```node.js
{
  "scripts": {
    "start": "node index.js",
    "test": "mocha --watch",
    "watch": "nodemon index.js"
  }
}
```
To run the `watch` script, you'd run it like this from the terminal:
`npm run watch`

`nodemon` will start your application and begin watching your project files for changes. If you make a change to the `index.js` file, `nodemon` will stop and restart the application so that you can see the result of your code change.

