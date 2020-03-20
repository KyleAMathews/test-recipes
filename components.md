# API ideas

* Favor declarative verbs
* Idempotent all the things
* Dry-run support
* Use API names of underlying systems e.g. `fs` package from Node.js

## NPM Packages

### `<InstallPackage`

`<InstallPackage name="lodash" version="latest"  />`

### props
* **name**: name of the package
* **version**: defaults to latest
* **dev**: defaults to false (maybe this is a seperate component?)

### `<SetNPMScript>`

```
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

```
<WriteFile path="src/pages/i-dunno.js">
Import React from "react"
export default () => <div>Yeah... I dunno</div>
</WriteFile>
```

```
<WriteFile path="src/utils/something.js" src="./something.js" />
```

### props
* **path** filepath
* **src** path to file to copy
* **children** can take string to copy out


## Flow control

## `<Meta>`

Tell the recipe interpreter stuff

`<Meta stepType="example" />`

### props
* **stepType** enum [example] — tell intepreter this step is for adding example content. Can be skipped if user asks for this or on when running card as upgrade.


## Gatsby-specific
