import React from 'react'
import * as S from './style'
import { TextC } from '../Typography'
import { useAuth } from "../../contexts/authContext/AuthContex"

const Header = () => {
  const { currentUser } = useAuth()
  const { firstName } = currentUser || {}
  console.log(currentUser);
  
  return (
    <S.Header>
      <S.UserLogged>
        <TextC.Title level={1}>Olá,</TextC.Title>
        <TextC.Title level={1}>{firstName}</TextC.Title> 
      </S.UserLogged> 
    </S.Header>
  )
}

export default Header