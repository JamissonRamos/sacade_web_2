import React from 'react'
import * as S from './style'
import { TextC } from '../Typography'

const Header = () => {
  return (
    <S.Header>
      <S.UserLogged>
        <TextC.Display level={1}>Olá</TextC.Display>
        <TextC.Display level={1}>Olá</TextC.Display>
      </S.UserLogged> 
    </S.Header>
  )
}

export default Header