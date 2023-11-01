import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { Image, ScrollView, StyleSheet, View } from 'react-native'
import { Button, RadioButton, Text, TextInput } from 'react-native-paper'
import restauranteValidator from '../../validators/restauranteValidator'
import { mask } from 'remask'
import { Picker } from '@react-native-picker/picker'

const RestaurantesForm = ({ navigation, route }) => {

  let restaurante = {
    nome: '',
    telefone: '',
    cep: '',
    tempo_entrega: '',
    funcionamento: '',
    avaliacao: '',
    entregador_id: ''
  }
  const [entregadores, setEntregadores] = useState([])

  const [selectedLanguage, setSelectedLanguage] = useState();

  const [checked, setChecked] = React.useState();

  const id = route.params?.id

  if (id >= 0) {
    restaurante = route.params?.restaurante
  }

  function salvar(dados) {

    AsyncStorage.getItem('restaurantes').then(resultado => {

      const restaurantes = JSON.parse(resultado) || []

      if (id >= 0) {
        restaurantes.splice(id, 1, dados)
      } else {
        restaurantes.push(dados)
      }

      AsyncStorage.setItem('restaurantes', JSON.stringify(restaurantes))

      navigation.goBack()
    })
  }

  return (
    <ScrollView style={styles.container}>
      <Text>Cadastro de restaurante</Text>

      <Image style={{ height: '30%', width: '100%' }}
        source={require('..//..//assets/restaurante2.jpg')} />

      <Formik
        initialValues={restaurante}
        validationSchema={restauranteValidator}
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
              label='CEP'
              keyboardType='decimal-pad'
              value={values.cep}
              onChangeText={handleChange('cep')}
            />
            {(errors.cep && touched.cep) &&
              <Text style={{ color: 'red', marginTop: 5 }}>
                {errors.cep}
              </Text>
            }

            <Picker
              selectedValue={values.tempo_entrega}
              onValueChange={handleChange('tempo_entrega')}>
              <Picker.Item label="Tempo em Minutos" value="" />
              <Picker.Item label="0-20 Minutos" value="" />
              <Picker.Item label="20-40 Minutos" value="" />
              <Picker.Item label="40-60 Minutos" value="" />
            </Picker>
            {(errors.tempo_entrega && touched.tempo_entrega) &&
              <Text style={{ color: 'red', marginTop: 5 }}>
                {errors.tempo_entrega}
              </Text>
            }



            <RadioButton
              value="first"
              status={checked === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('first')}
            />
            <RadioButton
              value="second"
              status={checked === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('second')}
            />



            <TextInput
              style={{ marginTop: 10 }}
              mode='outlined'
              label='Tempo Entrega'
              keyboardType='decimal-pad'
              value={values.tempo_entrega}
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
              label='Funcionamento'
              keyboardType='decimal-pad'
              value={values.funcionamento}
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
              label='Avaliacao'
              keyboardType='decimal-pad'
              value={values.avaliacao}
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
              label='Entregador'
              keyboardType='decimal-pad'
              value={values.entregador}
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

export default RestaurantesForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 60,
  }
})