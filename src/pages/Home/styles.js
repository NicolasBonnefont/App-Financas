import styled from 'styled-components/native'
//Container, Background, Nome, Saldo, Title 
export const Container = styled.View`
margin-left:15;
margin-bottom:25;


`;

export const Background = styled.View`
flex:1;
background-color:#131313;

`;

export const Nome = styled.Text`
font-size:18px;
color:#fff;
font-style:italic;

`;

export const Saldo = styled.Text`
margin-top:5px;
font-size:30px;
color:#fff;
font-weight:bold;

`;

export const Title = styled.Text`
margin-left:15px;
color:#00b94a;
margin-bottom:10px;

`
export const List = styled.FlatList.attrs({
  marginHorizontal:15
})`
  padding-top:15px;
  background-color:#fff;
  border-top-left-radius:15px;
  border-top-right-radius:15px;
  margin-left:8px;
  margin-right:8px;
`