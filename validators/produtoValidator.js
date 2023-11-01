import * as Yup from 'yup';

const produtoValidator = Yup.object().shape({
    restaurante: Yup.string()
        .min(2, 'Valor muito curto')
        .max(200, 'Valor muito grande')
        .required('Campo obrigatório'),
    nome_produto: Yup.string()
        .min(2, 'Valor muito curto')
        .max(200, 'Valor muito grande')
        .required('Campo obrigatório'),
    preco_produto: Yup.string()
        .min(2, 'Valor muito curto')
        .max(200, 'Valor muito grande')
        .required('Campo obrigatório'),
    pagamento: Yup.string()
        .min(2, 'Valor muito curto')
        .max(200, 'Valor muito grande')
        .required('Campo obrigatório'),
    informacoes: Yup.string()
        .min(2, 'Valor muito curto')
        .max(200, 'Valor muito grande')
        .required('Campo obrigatório'),
    restaurante: Yup.string()
        .min(2, 'Valor muito curto')
        .max(200, 'Valor muito grande')
        .required('Campo obrigatório'),
})

export default produtoValidator;