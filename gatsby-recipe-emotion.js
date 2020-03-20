# Emotion

This recipe helps you start developing with the Emotion CSS in JS library

<Config
  conflictsWith="gatsby-recipe-styled-components"
/>

---

Install necessary packages

<InstallPackages
  name={["gatsby-plugin-emotion", "@emotion/core", "@emotion/styled"]}
/>

---

Adding `gatsby-plugin-emotion` to your `gatsby-config.js`. It provides support
for Emotion during Gatsby's server side rendering.

<InstallGatsbyPlugin
  name="gatsby-plugin-emotion"
/>

---

You can now use Emotion in your site!


---

<Meta stepType="example" />

Check out the example Emotion page to start playing with it!

<WriteExampleFile path="src/pages/emotion-sample.js">
import React from "react"
import { css } from "@emotion/core"

export default () => (
  <div>
    <p
      css={{
        background: "pink",
        color: "blue",
      }}
    >
      This page is using Emotion.
    </p>
  </div>
)
</WriteExampleFile>
