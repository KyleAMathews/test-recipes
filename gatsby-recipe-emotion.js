# Add Emotion

This recipe helps you start developing with the Emotion CSS in JS library

<Config
  name="gatsbyjs/add-emotion"
  conflictsWith="gatsby-recipe-styled-components"
/>

---

Installing necessary packages

<NPMPackage
  name={"gatsby-plugin-emotion"}
/>
<NPMPackage
  name={"@emotion/core"}
/>
<NPMPackage
  name={"@emotion/styled"}
/>

---

Adding `gatsby-plugin-emotion` to your `gatsby-config.js`. It provides support
for Emotion during Gatsby's server side rendering.

<GatsbyPlugin
  name="gatsby-plugin-emotion"
/>

---

You can now use Emotion in your site!


---

<Meta stepType="example" />

Check out the example Emotion page to start playing with it!

<File example={true} path="src/pages/emotion-sample.js">
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
</File>
