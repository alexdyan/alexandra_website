const React = require("react")
const { default: Layout } = require("./src/components/Layout")
const { default: Theme } = require("./src/components/Theme")
exports.wrapPageElement = ({ element, props }) => (
  <Theme {...props}>{element}</Theme>
)
