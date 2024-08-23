import React from 'react'
import * as S from './style'
import { TextC } from '../Typography'

const Header = () => {
  return (
    <S.Header>
      <S.UserLogged>
        <TextC.Title level={1}>Olá,</TextC.Title>
        <TextC.Title level={1}>Usuário Logado</TextC.Title> 
      </S.UserLogged> 
    </S.Header>
  )
}

export default Header