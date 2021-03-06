import React, { useContext } from 'react'
import { Router, Link } from '@reach/router'
import { Flex, Heading, Button, NavLink, Container } from 'theme-ui'
import { IdentityContext } from '../../identity-context'

let Dash = () => {
  const { user, identity: netlifyIdentity } = useContext(IdentityContext)

  return (
    <Container>
      <Flex as='nav'>
        <NavLink as={Link} to="/" p={2}>
          Home
        </NavLink>
        <NavLink as={Link} to="/app" p={2}>
          Dashboard
        </NavLink>
        {user && (
          <NavLink href="#!" onClick={() => netlifyIdentity.logout()} p={2}>
            Log out {user.user_metadata.full_name}
          </NavLink>
        )}
      </Flex>
      <Flex sx={{ flexDirection: "column", padding: 3 }}>
        <div>Dash hasUser: {user && user.user_metadata.full_name}</div>
      </Flex>
    </Container>
  )
}

let DashLoggedOut = props => {
  const { user, identity: netlifyIdentity } = useContext(IdentityContext)

  return (
    <Container>
      <Flex as='nav'>
        <NavLink as={Link} to="/" p={2}>
          Home
        </NavLink>
        <NavLink as={Link} to="/app" p={2}>
          Dashboard
        </NavLink>
        {user && (
          <NavLink as={Link} to="/app" p={2}>
            {user.user_metadata.full_name}
          </NavLink>
        )}
      </Flex>
      <Flex sx={{ flexDirection: "column", padding: 3 }}>
        <Heading as="h1">Save some evidence</Heading>
        <Button
          sx={{ marginTop: 2 }}
          onClick={() => {
            netlifyIdentity.open()
          }}
        >Log In</Button>
      </Flex>
    </Container>
  )
}

export default props => {
  const { user } = useContext(IdentityContext)

  if (!user) {
    return (
      <Router>
        <DashLoggedOut path="/app" />
      </Router>
    )
  }

  return (
    <Router>
      <Dash path="/app" />
    </Router>
  )
}
