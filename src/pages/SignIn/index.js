import React, { useEffect, useState, useContext } from 'react';
import { View, Platform, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import { AuthContext } from '../../contexts/auth'

import {
  Background, Container, Logo, AreaInput, Input, SubmitButton,
  SubmitText, Link, LinkText
} from './styles';
import logo from '../../assets/Logo.png'



const SignIn = () => {

  const navigation = useNavigation()
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const { signIn, authLoading } = useContext(AuthContext)


  function handleLogin() {
    signIn(email, senha)

  }

  return (
    <Background>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >
        <Logo source={logo} />

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

        <SubmitButton onPress={handleLogin} disabled={authLoading === false ? false : true} >

          {authLoading === false ?
            (<SubmitText> Acessar </SubmitText>)
            :
            (<ActivityIndicator size={30} color='#fff' />
            )}


        </SubmitButton>

        <Link onPress={() => navigation.navigate('SignUp')}>
          <LinkText>Criar uma conta!</LinkText>
        </Link>


      </Container>
    </Background>
  );
}

export default SignIn;