import React from 'react'
import { Button, Text } from 'react-native-paper'

const Alunos = ({navigation}) => {
  return (
    <>
        <Text>Alunos</Text>
        <Button 
            icon='plus' 
            mode='contained' 
            onPress={()=>navigation.push('alunos-form')}
        >
            Novo
        </Button>
    </>
  )
}

export default Alunos