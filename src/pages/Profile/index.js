import React, { useContext } from 'react';
import { Container, Nome, NewLink, NewText, Logout, LogoutText } from './styles'

import { useNavigation } from '@react-navigation/native'

import { AuthContext } from '../../contexts/auth'
import Header from '../../components/Header'

export default function Profile() {

  const { signOut, user } = useContext(AuthContext)
  const navigation = useNavigation()

  return (
    <Container>
      <Header />
      <Nome> {user.nome} </Nome>

      <NewLink onPress={() => navigation.navigate('Registrar')}>
        <NewText> Registrar Gastos </NewText>
      </NewLink>

      <Logout onPress={signOut}>
        <LogoutText> Sair </LogoutText>
      </Logout>


    </Container>
  );
}