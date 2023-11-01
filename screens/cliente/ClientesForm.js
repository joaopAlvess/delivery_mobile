import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import clienteValidator from '../../validators/clienteValidator'
import { mask } from 'remask'
import { Picker } from '@react-native-picker/picker'

const ClientesForm = ({ navigation, route }) => {

  let cliente = {
    nome: '',
    contato: '',
    cep: '',
    logradouro: '',
    bairro: '',
    numero: '',
    restaurante_id: '',
    produto_id: ''
  }

  const [selectedLanguage, setSelectedLanguage] = useState();

  const id = route.params?.id

  if (id >= 0) {
    cliente = route.params?.cliente
  }

  function salvar(dados) {

    AsyncStorage.getItem('clientes').then(resultado => {

      const clientes = JSON.parse(resultado) || []

      if (id >= 0) {
        clientes.splice(id, 1, dados)
      } else {
        clientes.push(dados)
      }

      AsyncStorage.setItem('clientes', JSON.stringify(clientes))

      navigation.goBack()
    })
  }

  return (
    <ScrollView style={{ margin: 15 }}>
      <Text>Formulário de cliente</Text>

      <Formik
        initialValues={cliente}
        validationSchema={clienteValidator}
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
              label='CEP'
              keyboardType='decimal-pad'
              value={values.cep}
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
              label='Logradouro'
              value={values.logradouro}
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
              label='Bairro'
              value={values.bairro}
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
              label='Número'
              keyboardType='decimal-pad'
              value={values.numero}
              onChangeText={handleChange('duracao')}
            />
            {(errors.duracao && touched.duracao) &&
              <Text style={{ color: 'red', marginTop: 5 }}>
                {errors.duracao}
              </Text>
            }

            <Picker
              style={{ marginTop: 10, padding: 10, fontSize: 15 }}
              selectedValue={values.restaurante_id}
              onValueChange={handleChange('restaurante_id')
              }>
              <Picker.Item label='Curso' value='' />
              {cursos.map((item, i) => (
                <Picker.Item key={i}
                  label={item.nome}
                  value={item.nome}
                />
              ))}

            </Picker>
            {(errors.duracao && touched.duracao) &&
              <Text style={{ color: 'red', marginTop: 5 }}>
                {errors.duracao}
              </Text>
            }
            
            <Picker
              style={{ marginTop: 10, padding: 10, fontSize: 15 }}
              selectedValue={values.produto_id}
              onValueChange={handleChange('produto_id')
              }>
              <Picker.Item label='Curso' value='' />
              {cursos.map((item, i) => (
                <Picker.Item key={i}
                  label={item.nome}
                  value={item.nome}
                />
              ))}

            </Picker>
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

export default ClientesForm