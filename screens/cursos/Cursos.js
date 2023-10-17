import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'
import { Button, Card, FAB, IconButton, MD3DarkTheme, Text } from 'react-native-paper'

const Cursos = ({ navigation }) => {

  const [cursos, setCursos] = useState([])

  useFocusEffect(
    React.useCallback(() => {

      AsyncStorage.getItem('cursos').then(resultado => {

        resultado = JSON.parse(resultado) || []

        console.log(resultado)
        setCursos(resultado)
      })

    }, [])
  );

  return (
    <>

      <ScrollView style={{ padding: 15 }}>

        {cursos.map((item, i) => (
          <Card key={i} mode='outlined' style={{ marginBottom: 10 }}>
            <Card.Content>
              <Text variant="titleLarge">{item.nome}</Text>
              <Text variant="bodyMedium">Duração: {item.duracao} sem.</Text>
              <Text variant="bodyMedium">Modalidade: {item.modalidade}</Text>
            </Card.Content>
            <Card.Actions>
              <IconButton icon='pencil-outline' />
              <IconButton icon='trash-can-outline' />
            </Card.Actions>
          </Card>
        ))}


      </ScrollView>

      <FAB
        icon="plus"
        size='small'
        style={{ position: 'absolute', right: 10, bottom: 10 }}
        onPress={() => navigation.push('cursos-form')}
      />

    </>
  )
}

export default Cursos