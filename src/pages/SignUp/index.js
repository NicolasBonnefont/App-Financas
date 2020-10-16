import React, { useEffect, useState, useContext } from 'react';
import { View, Platform, ActivityIndicator } from 'react-native';

import { AuthContext } from '../../contexts/auth'

import {
  Background, Container, Logo, AreaInput, Input, SubmitButton,
  SubmitText
} from '../SignIn/styles';


const SignIn = () => {

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [nome, setNome] = useState('')

  const { signUp, authLoading } = useContext(AuthContext)

  function handleSignUp() {
    signUp(email, senha, nome)

  }
  return (
    <Background>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >
        <AreaInput>
          <Input
            placeholder='Nome'
            autoCorrect={false}
            autoCapitalize='none'
            value={nome}
            onChangeText={(e) => setNome(e)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder='Email'
            autoCorrect={false}
            autoCapitalize='none'
            value={email}
            onChangeText={(e) => setEmail(e)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder='Senha'
            autoCorrect={false}
            autoCapitalize='none'
            value={senha}
            onChangeText={(e) => setSenha(e)}
          />
        </AreaInput>

        <SubmitButton onPress={handleSignUp} disabled={authLoading === false ? false : true} >

          {authLoading === true ?
            (<ActivityIndicator size={30} color='#fff' />)
            :
            (<SubmitText> Cadastrar </SubmitText>)
          }

        </SubmitButton>



      </Container>
    </Background>
  );
}

export default SignIn;