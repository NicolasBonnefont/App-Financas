import React, { useContext, useState, useEffect } from 'react';
import { format } from 'date-fns'
import { View, Text, Button } from 'react-native';
import firebase from '../../services/firebaseConnection'
import Header from '../../components/Header'
import HistoricoList from '../../components/HistoricoList'
import { AuthContext } from '../../contexts/auth'

import { Container, Background, Nome, Saldo, Title, List } from './styles';

const Home = () => {
  const { user } = useContext(AuthContext)

  const [historico, setHistorico] = useState([])
  const [saldo, setSaldo] = useState(0)

  const uid = user && user.uid

  useEffect(() => {
    async function loadList() {
      await firebase.database().ref('users').child(uid).on('value', (e) => {
        setSaldo(e.val().saldo)
      })
      await firebase.database().ref('historico')
        .child(uid)
        .orderByChild('date').equalTo(format(new Date(), 'dd/MM/yy'))
        .limitToLast(10).on('value', (e) => {
          setHistorico([])
          e.forEach((item) => {
            let list = {
              key: item.key,
              tipo: item.val().tipo,
              valor: item.val().valor
            }
            setHistorico(old => [...old, list].reverse())
          })
        })
    }
    loadList()
  }, [])


  return (
    <Background>
      <Header />


      <Container>
        <Nome> {user && user.nome} </Nome>
        <Saldo>Saldo: R$ {saldo.toFixed(2)}</Saldo>
      </Container>

      <Title> Ultimas Movimentações :</Title>


      <List
        showsVerticalScrollIndicator={false}
        data={historico}
        keyExtractor={item => item.key}
        renderItem={({ item }) => (<HistoricoList data={item} />)}
      />


    </Background>
  );
}

export default Home;