import * as Yup from 'yup';

const entregadorValidator = Yup.object().shape({
    nome: Yup.string()
        .min(2, 'Valor muito curto')
        .max(200, 'Valor muito grande')
        .required('Campo obrigatório')
})

export default entregadorValidator;