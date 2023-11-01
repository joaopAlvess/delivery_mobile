import AsyncStorage from '@react-native-async-storage/async-storage'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import entregadorValidator from '../../validators/entregadorValidator'
import { mask } from 'remask'
import { Picker } from '@react-native-picker/picker'

const EntregadorsForm = ({ navigation, route }) => {

  let entregador = {
    nome: '',
    email: '',
    telefone: '',
    cpf: ''
  }

  const [selectedLanguage, setSelectedLanguage] = useState();

  const id = route.params?.id

  if (id >= 0) {
    entregador = route.params?.entregador
  }

  function salvar(dados) {

    AsyncStorage.getItem('entregadores').then(resultado => {

      const entregadores = JSON.parse(resultado) || []

      if (id >= 0) {
        entregadores.splice(id, 1, dados)
      } else {
        entregadores.push(dados)
      }

      AsyncStorage.setItem('entregadores', JSON.stringify(entregadores))

      navigation.goBack()
    })
  }

  return (
    <ScrollView style={{ margin: 15 }}>
      <Text>Formulário de entregador</Text>

      <Formik
        initialValues={entregador}
        validationSchema={entregadorValidator}
        onSubmit={values => salvar(values)}
      >
        {({ values, handleChange, handleSubmit, errors, touched, setFieldValue }) => (
          <View>

            <TextInput
              style={{ marginTop: 10 }}
              mode='outlined'
              label='Nome'
              value={values.nome}
              onChangeText={handleChange('nome')}
            />
            {(errors.nome && touched.nome) &&
              <Text style={{ color: 'red', marginTop: 5 }}>
                {errors.nome}
              </Text>
            }

            <TextInput
              style={{ marginTop: 10 }}
              mode='outlined'
              label='Email'
              value={values.email}
              onChangeText={handleChange('email')}
            />
            {(errors.email && touched.email) &&
              <Text style={{ color: 'red', marginTop: 5 }}>
                {errors.email}
              </Text>
            }

            <TextInput
              style={{ marginTop: 10 }}
              mode='outlined'
              label='Telefone'
              keyboardType='decimal-pad'
              value={values.telefone}
              onChangeText={handleChange('telefone')}
            />
            {(errors.telefone && touched.telefone) &&
              <Text style={{ color: 'red', marginTop: 5 }}>
                {errors.telefone}
              </Text>
            }

            <TextInput
              style={{ marginTop: 10 }}
              mode='outlined'
              label='CPF'
              keyboardType='decimal-pad'
              value={values.cpf}
              onChangeText={handleChange('cpf')}
            />
            {(errors.cpf && touched.cpf) &&
              <Text style={{ color: 'red', marginTop: 5 }}>
                {errors.cpf}
              </Text>
            }         

            <Button onPress={handleSubmit}>Salvar</Button>
          </View>
        )}

      </Formik>



    </ScrollView>
  )
}

export default EntregadorsForm;