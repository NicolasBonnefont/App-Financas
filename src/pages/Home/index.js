import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';

import { AuthContext } from '../../contexts/auth'

// import { Container } from './styles';

const Home = () => {

  const { user, signOut } = useContext(AuthContext)
  return (
    <View>
      <Text>HOME</Text>
      <Text> {user && user.nome}</Text>
      <Text> {user && user.email}</Text>

      <Button
      title='Sair'
      onPress={()=>signOut()}
      />
    </View>
  );
}

export default Home;