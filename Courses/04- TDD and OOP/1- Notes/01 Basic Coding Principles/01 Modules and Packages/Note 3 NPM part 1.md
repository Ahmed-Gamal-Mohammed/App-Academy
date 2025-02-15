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

# Using npm
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
