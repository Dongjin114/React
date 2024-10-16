import React from 'react'
import Nav from './Nav';
import * as MainStyle from './Main.style'
import Toastgrid from '../components/toastgrid/ToastGrid';
import AgGrid from '../components/aggrid/AgGrid';


function Main() {
  return (
    <MainStyle.MainContainer>
      <MainStyle.NavContainer>
        <Nav />
      </MainStyle.NavContainer>
      <MainStyle.BodyContainer>
        <MainStyle.GridContainer>
          <AgGrid width={800} height={400} />
        </MainStyle.GridContainer>
      </MainStyle.BodyContainer>
    </MainStyle.MainContainer>
  )
}

export default Main