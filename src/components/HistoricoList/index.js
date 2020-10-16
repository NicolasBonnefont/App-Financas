import React from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons'

import { Container, Tipo, IconView, TipoText, ValorText } from './styles';
import { database } from 'firebase';

const HistoricoList = ({ data }) => {
  return (
    <Container>
      <Tipo>
        <IconView tipo={data.tipo}>
          <Feather 
          name={data.tipo ==='despesa' ? 'arrow-down': 'arrow-up'}
          color='#fff'
          size={20} />
          <TipoText>{data.tipo}</TipoText>
        </IconView>
      </Tipo>
      <ValorText>
        R$ {data.valor.toFixed(2)}
      </ValorText>
    </Container>
  ); 
}

export default HistoricoList;