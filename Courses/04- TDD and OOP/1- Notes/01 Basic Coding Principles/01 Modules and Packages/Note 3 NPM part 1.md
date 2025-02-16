let's dig further into the details of how to use npm to perform common tasks.
We'll cover:

- verifying what version of npm is installed and how to use npm to update itself to the latest version;
- using npm to initialize a new package or project;
- using the npm registry to find a package;
- using npm to install a package;
- using an npm package in code;
- and understanding the difference between a dependency and a development dependency.

`sudo npm install -g npm@latest`
The **sudo** command allows you to run a command with the security privileges of another user   

# Using npm part 1
**Any Node.js project that contains a `package.json` file is technically an npm package**
## Using npm to manage npm
To confirm if you have the npm CLI installed, you can run the command `npm --version` or `npm -v`. If you have the npm CLI installed, you'll see its version number displayed in the console. If you don't have the npm CLI installed, you receive an error.

The npm CLI is available as an npm package, which allows you to use the npm CLI to update itself. If you're using Linux, you can update the npm CLI to the latest version by running the following command:
`npm install -g npm@latest`

If you installed Node.js using the default installer, you might need to prefix the above command with `sudo` like this:
`sudo npm install -g npm@latest`

The `sudo` command allows you to run a command with the security privileges of another user, typically your computer's administrator or superuser account. When using the `sudo` command, you'll be prompted for your account's password.


## Using npm to manage a project's dependencies 
Now let's walk through the steps to initialize a project to use npm, Then you'll use npm to install and use a dependency in code 

### initializing a project to use npm 
Any Node.js project that contains a `package.json` file is technically an npm package, though most of these projects will never be published to the npm registry for consumption by the general development community. Given that, it's common to refer to these unpublished npm packages as just "projects".

If you haven't already, create a folder for your project, then use the `cd` command to browse to that folder. From within your project folder, run the following command:
```
npm init
```
npm will prompt you to supply the following field values, one at a time:

1. `package name` (or simply `name`) - If you're going to publish your package, setting your package name to something useful is very important. For typical development projects, it's okay to just accept the default value, which will be the name of the current folder.
2. `version` - Node uses the `semver` (semantic versioning) package to manage your package/project's versioning. The default is `1.0.0`, but the recommended standard is `0.1.0`, indicating the first minor version. See [here](https://semver.org/) for an introduction to SemVer.
3. `description` - A description is really only necessary if you're going to publish your package, as it's displayed to users when they're searching the npm registry.
4. `entry point` (or `main`) - The file to use as the entry point to your application (typically `index.js` or `app.js`).
5. `test command` - If you're going to write tests for your package, you can provide the command to run those tests. For now, just press enter without providing a value to accept the default value.
6. `git repository` - If you want other developers to be able to find the Git repository for your package, you can provide the URL to the repo here. For now, it's okay to skip it by pressing enter.
7. `keywords` - Keywords are used to help people find your package in the npm registry. For now, just leave this field blank.
8. `author` - If you're the author of the package and you want your name (and contact information) associated with the package, you can provide that information here. For now, let's just leave this field blank.
9. `license` - This is the license for your package. It's only important to provide if you're going to publish your package. This defaults to the [ISC License](https://opensource.org/licenses/ISC), which for our purposes, will work just fine (since we're not going to publish our package).

   **Pro tip:** If you're like the majority of developers, you'll get tired of stepping through the above prompts time and time again when initializing a project to use npm. To save valuable time, you can pass the `--y` flag to the `npm init` command to generate a `package.json` file with all of the default values like this: `npm init --y`.
### Finding packages in the npm registry 
With more than a million packages in the npm registry, there's literally a whole world's worth of code for you to explore and to incorporate into your projects and applications.

When selecting a package, it's helpful to ask yourself the following questions:
1. - **Does the package do what I need?** Most packages in the npm registry will include some documentation on how to use the package. Usually you can review that documentation to determine if the package will suit your needs. Sometimes, you might need to review any additional documentation that's available in the package's code repository (i.e. GitHub, GitLab, or wherever the package's source code lives). Alternatively, you can install the package into a throwaway project to safely test it in a sandbox environment.
2. - **How popular is the package?** Popularity isn't always everything, but it can be an effective way to determine if a package is useful and reliable. It also increases the likelihood that other developers on your team might have experience with using a particular package.
3. - **Is the package being maintained?** If you're going to take a dependency on a package, you need to have confidence that the package is actively being maintained by its developer(s). To do that, review the package's associated code repository (i.e. GitHub, GitLab, etc.) Have there been recent commits and recent releases? Review the repository's issues to see if consumers of the package are getting their questions answered and bugs are being fixed.

It's also possible to search the npm registry from the terminal using the `search` command. For more information about that command, see [this page in the npm documentation](https://docs.npmjs.com/cli-commands/search.html).
```
npm search <search term> [<search term> ...] 
aliases: find, s, se
```

### Installing a dependency
Now that you've initialized your project using `npm init` (which generated a `package.json` file), you can use `npm install` to install an npm package locally into your project.

To install the `colors` npm package, run the following command:
```
npm install colors
```
 The installation process generates the following output 
```
npm WARN introduction-to-npm@1.0.0 No repository field.

+ colors@1.4.0
added 1 package from 2 contributors and audited 1 package in 0.346s
found 0 vulnerabilities 
```

### Git and the `node_modules` folder
- When using `npm install` to install an npm package locally into your project. npm downloads and installs the specified package to the `node_modules` folder.

- If the installed package has its own dependencies (npm packages often depend upon other npm packages), npm will automatically download those dependencies into the `node_modules` folder.

- This process recursively continues until all of the required dependencies are accounted for. Because of this, the `node_modules` folder tends to be very large, containing many folders and files.

- If you're using Git for source control, you'll need to add a `.gitignore` file to the root of your project and add the entry `node_modules/` so that the `node_modules` folder won't be tracked by Git. Later in this lesson you'll see that you only need to commit the `package.json` and `package-lock.json` files to your repository as that's all that npm needs to download and install your project's dependencies.

- **Pro Tip:** while configuring Git to not track the `node_modules` folder is important to do, it's not necessarily the only thing you want to configure Git not to track 

### Using a dependency in code
After installing an npm package, you can import it into a Node.js module using the `require` function

in js file, use `require` function to import colors module 
```jsx
const colors = require("colors");
```

After importing the module. you can use it to add color to your `console.log()` method calls like this 
```jsx
console.log('hello'.green); // outputs green text
console.log('i like cake and pies'.underline.red) // outputs red underlined text
console.log('inverse the color'.inverse); // inverses the color
console.log('OMG Rainbows!'.rainbow); // rainbow
console.log('Run the trap'.trap); // Drops the bass
```

## Dependency types
npm tracks two types of dependencies in the `package.json` file
1. **Dependencies** (`dependencies`) - These are the packages that your project needs in order to successfully run when in production (i.e your application has been deployed or published to a server that can be accessed by your users)
2. **Development dependencies** (devDependencies) - These are the package that are needed locally when doing development work on the project. Development dependencies often include one or more tools that are used to build and test your application 

There are actually three additional types dependencies that npm can track including **peer dependencies (`peerDependencies`)**, **bundled dependencies (`bundledDependencies`)** and **optional dependencies (`optionalDependencies`)**   These dependency types are less often used

### Installing a development dependency
To install a development dependency, you simply add the `--save-dev` flag:
`npm install mocha --save-dev`

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

