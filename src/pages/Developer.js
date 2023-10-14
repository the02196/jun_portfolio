import React from 'react'
import Header from '../components/developer/Header'
import Nav from '../components/nav/Nav'

function Developer() {
  return (
    <>
      <Header/>
      <Nav brighteness={"brighteness(1.5)"} grayscale={"grayscale(1)"} hide={"none"} bg_color={"black"} />
    </>
  )
}

export default Developer