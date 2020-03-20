# API ideas

* Favor declarative verbs
* Idempotent all the things
* Dry-run support
* Use API names of underlying systems e.g. `fs` package from Node.js

## NPM Packages

### `<InstallPackages`

`<InstallPackage name="lodash" version="latest"  />`

### props
* **name**: name of the package(s) to install. Takes a string or an array of strings.
* **version**: defaults to latest
* **dev**: defaults to false (maybe this is a seperate component?)

### `<SetNPMScript>`

```jsx
<SetNpmScript
  name="test"
  command="jest"
/>

<SetNpmScript
  name="test:watch"
  command="jest --watch"
/>
```

#### props
* **name** name of script
* **command** the command

## FileSystem

### `<WriteFile>`

```jsx
<WriteFile path="src/pages/i-dunno.js">
Import React from "react"
export default () => <div>Yeah... I dunno</div>
</WriteFile>
```

```jsx
<WriteFile path="src/utils/something.js" src="./something.js" />
```

#### props
* **path** filepath
* **src** path to file to copy
* **children** can take string to copy out
* **example** this file is written as an example and is skippable if the user doesn't want it.


## Flow control

### `<Config>`

Config for the entire recipe card. By convention is in the inital step.

```jsx
<Config
  packageName="gatsby-recipe-styled-components"
  conflictsWithPackage="styled-components"
/>
```

#### props
* **conflictsWith** List NPM packages that this recipe would conflict with. Users will be warned when running a recipe
if they've already got this package installed or if another recipe in their stack will install it.

### `<Meta>`

Tell the recipe interpreter stuff

```jsx
<Meta stepType="example" />
```

#### props
* **stepType** enum [example] — tell intepreter this step is for adding example content. Can be skipped if user asks for this or on when running card as upgrade.


## Gatsby-specific

### `<InstallGatsbyPlugin>`

Installs a Gatsby Plugin. Reads the plugin's options definition (if one is provided)
and asks the user to provide the options.

```jsx
<InstallGatsbyPlugin
  name="gatsby-plugin-emotion"
/>
```
#### props
* **name** name of hte plugin
* **options** provide defaults for options. The user will be asked for other options (and can still override defaults if desired).
