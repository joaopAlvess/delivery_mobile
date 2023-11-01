import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import produtoValidator from '../../validators/produtoValidator'
import { mask } from 'remask'
import { Picker } from '@react-native-picker/picker'

const ProdutosForm = ({ navigation, route }) => {

  let produto = {
    restaurante_id: '',
    nome_produto: '',
    preco_produto: '',
    pagamento: '',
    informacoes: ''
  }

  const [selectedLanguage, setSelectedLanguage] = useState();

  const id = route.params?.id

  if (id >= 0) {
    produto = route.params?.produto
  }

  function salvar(dados) {

    AsyncStorage.getItem('produtos').then(resultado => {

      const produtos = JSON.parse(resultado) || []

      if (id >= 0) {
        produtos.splice(id, 1, dados)
      } else {
        produtos.push(dados)
      }

      AsyncStorage.setItem('produtos', JSON.stringify(produtos))

      navigation.goBack()
    })
  }

  return (
    <ScrollView style={{ margin: 15 }}>
      <Text>Formulário de produto</Text>

      <Formik
        initialValues={produto}
        validationSchema={produtoValidator}
        onSubmit={values => salvar(values)}
      >
        {({ values, handleChange, handleSubmit, errors, touched, setFieldValue }) => (
          <View>


            <Picker
              style={{ marginTop: 10, padding: 10, fontSize: 15 }}
              selectedValue={values.restaurante_id}
              onValueChange={handleChange('restaurante_id')
              }>
              <Picker.Item label='Restaurante' value='' />
              {cursos.map((item, i) => (
                <Picker.Item key={i}
                  label={item.nome}
                  value={item.nome}
                />
              ))}
            </Picker>


            <TextInput
              style={{ marginTop: 10 }}
              mode='outlined'
              label='Restaurante'
              value={values.restaurante}
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
              label='Nome Produto'
              value={values.nome_produto}
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
              label='Preço Produto'
              value={values.preco_produto}
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
              label='Pagamento'
              value={values.pagamento}
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
              label='Informações Adicionais'
              value={values.informacoes}
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

export default ProdutosForm;