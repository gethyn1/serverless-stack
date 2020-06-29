import React, { useEffect } from 'react'
import netlifyIdentity from "netlify-identity-widget"
import { Container, Heading, Button, Flex } from 'theme-ui'

export default () => {
  useEffect(() => {
    netlifyIdentity.init({})
  }, [])

  return (
    <Container>
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
