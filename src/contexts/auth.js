import React, { createContext, useState, useEffect, ActivityIndicator } from 'react';
import AsyncStorage from '@react-native-community/async-storage'
import firebase from '../services/firebaseConnection'


export const AuthContext = createContext({})


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [authLoading, setAuthLoading] = useState(false)

  useEffect(() => {
    async function loadStorage() {
      const storageUser = await AsyncStorage.getItem('Auth_user')

      if (storageUser) {
        setUser(JSON.parse(storageUser))
        setLoading(false)
      }
      setLoading(false)
    }
    loadStorage()
  }, [])


  //cadstro usuario
  async function signUp(email, senha, nome) {
    setAuthLoading(true)
    await firebase.auth().createUserWithEmailAndPassword(email, senha)
      .then(async (value) => {
        let uid = value.user.uid
        await firebase.database().ref('users').child(uid).set({
          saldo: 0,
          nome: nome
        })
          .then(() => {
            let data = {
              uid: uid,
              nome: nome,
              email: value.user.email
            }
            setAuthLoading(false)
            setUser(data)
            storageUser(data)
            
          })
          .catch((error) => {
            setAuthLoading(false)
            alert(error.code)
            setUser(null)

          })
      })
  }

  // login de usuario
  async function signIn(email, senha) {
    setAuthLoading(true)
    await firebase.auth().signInWithEmailAndPassword(email, senha)
      .then(async (value) => {
        let uid = value.user.uid

        await firebase.database().ref('users').child(uid).once('value')
          .then((snapshot) => {
            let data = {
              uid: uid,
              nome: snapshot.val().nome,
              email: value.user.email
            }
            setAuthLoading(false)
            setUser(data)
            storageUser(data)
          })
      })
      .catch((error) => {
        setAuthLoading(false)
        alert(error.code)

      })
  }

  async function storageUser(data) {
    await AsyncStorage.setItem('Auth_user', JSON.stringify(data))
  }

  async function signOut() {
    await firebase.auth().signOut()
    await AsyncStorage.clear()
      .then(() => {
        setUser(null)
      })


  }

  return (
    <AuthContext.Provider
     value={{ signed: !!user, user, signUp, signIn, signOut, loading, authLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;