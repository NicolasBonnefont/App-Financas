import React from 'react';
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'



import { Container, ButtonMenu } from './styles';

const Header = () => {

  const navigation = useNavigation()

  return (
    <Container>
      <ButtonMenu onPress={() => navigation.toggleDrawer() }>
        <Feather name='menu' color='#fff' size={30}/>

      </ButtonMenu>
    </Container>
  );
}

export default Header;