const React = require("react")
const { default: Layout } = require("./src/components/Layout")
const { default: Theme } = require("./src/components/Theme")
exports.wrapPageElement = ({ element, props }) => {
  console.log(props.location)
  if (!props.location.pathname.includes("home")) {
    return (
      <Theme {...props}>
        <Layout>{element}</Layout>
      </Theme>
    )
  }
  return <Theme {...props}>{element}</Theme>
}
