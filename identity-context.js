const React = require('react')
const netlifyIdentity = require("netlify-identity-widget")

const { useEffect, useState } = React
const IdentityContext = React.createContext({})

exports.IdentityContext = IdentityContext

const IdentityProvider = props => {
  useEffect(() => {
    netlifyIdentity.init({})
  }, [])

  netlifyIdentity.on('login', user => {
    netlifyIdentity.close()
    setUser(user)
  })
    netlifyIdentity.on('logout', user => setUser())

  const [user, setUser] = useState()

  return (
    <IdentityContext.Provider value={{ identity: netlifyIdentity, user }}>
      {props.children}
    </IdentityContext.Provider>
  )
}

exports.Provider = IdentityProvider
