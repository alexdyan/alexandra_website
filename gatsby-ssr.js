import React from "react"
import Theme from "./src/components/Theme"
export const wrapPageElement = ({ element, props }) => (
  <Theme {...props}>{element}</Theme>
)
