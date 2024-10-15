import React from 'react'
import Nav from './Nav';
import * as MainStyle from './Main.style'


function Main() {
  return (
    <MainStyle.MainContainer>
      <MainStyle.NavContainer>
        <Nav />
      </MainStyle.NavContainer>
      <MainStyle.BodyContainer>

      </MainStyle.BodyContainer>
    </MainStyle.MainContainer>
  )
}

export default Main