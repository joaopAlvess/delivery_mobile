import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import cardValidator from '../../validators/cardValidator'
import { mask } from 'remask'
import { Picker } from '@react-native-picker/picker'

const CardsForm = ({ navigation, route }) => {

  let card = {
    email: '',
    contato: '',
    endereco: '',
    fidelidade: ''
  }

  const [selectedLanguage, setSelectedLanguage] = useState();

  const id = route.params?.id

  if (id >= 0) {
    card = route.params?.card
  }

  function salvar(dados) {

    AsyncStorage.getItem('cards').then(resultado => {

      const cards = JSON.parse(resultado) || []

      if (id >= 0) {
        cards.splice(id, 1, dados)
      } else {
        cards.push(dados)
      }

      AsyncStorage.setItem('cards', JSON.stringify(cards))

      navigation.goBack()
    })
  }

  return (
    <ScrollView style={{ margin: 15 }}>
      <Text>Formulário de card</Text>

      <Formik
        initialValues={card}
        validationSchema={cardValidator}
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
              onChangeText={handleChange('duracao')}
            />
            {(errors.duracao && touched.duracao) &&
              <Text style={{ color: 'red', marginTop: 5 }}>
                {errors.duracao}
              </Text>
            }

            <TextInput
              style={{ marginTop: 10 }}
              mode='outlined'
              label='Contato'
              keyboardType='decimal-pad'
              value={values.contato}
              onChangeText={handleChange('duracao')}
            />
            {(errors.duracao && touched.duracao) &&
              <Text style={{ color: 'red', marginTop: 5 }}>
                {errors.duracao}
              </Text>
            }
            <TextInput
              style={{ marginTop: 10 }}
              mode='outlined'
              label='Endereço'
              value={values.endereco}
              onChangeText={handleChange('duracao')}
            />
            {(errors.duracao && touched.duracao) &&
              <Text style={{ color: 'red', marginTop: 5 }}>
                {errors.duracao}
              </Text>
            }
            <TextInput
              style={{ marginTop: 10 }}
              mode='outlined'
              label='Cartão Fidelidade'
              value={values.fidelidade}
              onChangeText={handleChange('duracao')}
            />
            {(errors.duracao && touched.duracao) &&
              <Text style={{ color: 'red', marginTop: 5 }}>
                {errors.duracao}
              </Text>
            }

            <Picker
              selectedValue={values.modalidade}
              onValueChange={handleChange('modalidade')}>
              <Picker.Item label="Modalidade" value="" />
              <Picker.Item label="Presencial" value="Presencial" />
              <Picker.Item label="EAD" value="EAD" />
              <Picker.Item label="Híbrido" value="Híbrido" />
            </Picker>
            {(errors.modalidade && touched.modalidade) &&
              <Text style={{ color: 'red', marginTop: 5 }}>
                {errors.modalidade}
              </Text>
            }            

            <Button onPress={handleSubmit}>Salvar</Button>
          </View>
        )}

      </Formik>



    </ScrollView>
  )
}

export default CardsForm