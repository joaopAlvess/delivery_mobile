import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'

const CursosForm = ({ navigation, route }) => {

  const curso = route.params?.curso || {}
  const id = route.params?.id

  // const [dados, setDados] = useState(curso)

  // function handleChange(valor, campo) {
  //   setDados({ ...dados, [campo]: valor })
  // }

  function salvar(dados) {

    AsyncStorage.getItem('cursos').then(resultado => {

      const cursos = JSON.parse(resultado) || []

      if (id >= 0) {
        cursos.splice(id, 1, dados)
      } else {
        cursos.push(dados)
      }

      AsyncStorage.setItem('cursos', JSON.stringify(cursos))

      navigation.goBack()
    })

  }

  return (
    <ScrollView style={{ margin: 15 }}>
      <Text>Formulário de Curso</Text>

      <Formik
        initialValues={curso}
        onSubmit={values => salvar(values)}
      >
        {( {values, handleChange, handleSubmit} ) => (
          <View>
            <TextInput
              style={{ marginTop: 10 }}
              mode='outlined'
              label='Nome'
              value={values.nome}
              onChangeText={handleChange('nome')}
            />

            <TextInput
              style={{ marginTop: 10 }}
              mode='outlined'
              label='Duração'
              keyboardType='decimal-pad'
              value={values.duracao}
              onChangeText={handleChange('duracao')}
            />

            <TextInput
              style={{ marginTop: 10 }}
              mode='outlined'
              label='Modalidade'
              value={values.modalidade}
              onChangeText={handleChange('modalidade')}
            />
            <Button onPress={handleSubmit}>Salvar</Button>
          </View>
        )}

      </Formik>



    </ScrollView>
  )
}

export default CursosForm