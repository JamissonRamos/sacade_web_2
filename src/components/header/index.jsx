import React from 'react'
import * as S from './style'
import { TextC } from '../Typography'
import { useAuth } from "../../contexts/authContext/AuthContex"
import { Badge } from 'react-bootstrap'

const Header = () => {
  const { currentUser } = useAuth()
  const { firstName, status } = currentUser || {}  
  return (
    <S.Header>
      <S.UserLogged >
        <TextC.Title level={1}>Olá,</TextC.Title>
        <TextC.Title level={1}>{firstName}</TextC.Title> 
      </S.UserLogged> 
      <S.StatusLogged >

        {
          status === 'Visitante' ? 
            <Badge bg="warning" >
              Status: {status}
            </Badge>
          :
            <Badge bg="success" >
              Status: {status}
            </Badge>
        }
        {
          status === 'Assistente' &&
            <Badge bg="info" >
              Status: {status}
            </Badge>
        }
      </S.StatusLogged>
    </S.Header>
  )
}

export default Header