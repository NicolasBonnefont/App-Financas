import styled from 'styled-components/native'

//Background,Input, SubmitButton, SubmitText

export const Background = styled.View`

flex:1;
background-color:#131313;

`;
export const Input = styled.TextInput.attrs({
  placeHolderTextColor: '#222'
})`
height:50px;
width:90%;
background-color:rgba(255,255,255,0.8);
margin-top:30px;
font-size:17px;

`;

export const SubmitButton = styled.TouchableOpacity`
height:50px;
width:90%;
margin-top:20px;
justify-content:center;
align-items:center;
background-color:#00b94a;

`;

export const SubmitText = styled.Text`
font-size:21px;
font-weight:bold;
color:#fff;
`;