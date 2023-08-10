import * as yup from 'yup';

const problemaSchema = yup.object().shape({
  observacao: yup
    .string()
    .max(300, 'Quantidade máxima de 300 caracteres')
    .notRequired(),
  status: yup.boolean(),
  categoria: yup
    .number()
    .integer('Obrigatório informar id da categoria')
    .moreThan(0, 'Valor do id não pode ser 0')
    .required('Campo categoria é obrigatório'),
  usuario: yup
    .number()
    .integer('Obrigatório informar id do usuário')
    .moreThan(0, 'Valor do id não pode ser 0')
    .required('Campo usuário é obrigatório'),
  prefeitura: yup
    .number()
    .integer('Obrigatório informar id da prefeitura')
    .moreThan(0, 'Valor do id não pode ser 0')
    .required('Campo prefeitura é obrigatório'),
  cidade: yup
    .string()
    .min(3, 'Login precisa ter no minímo 3 caracteres')
    .required('Campo cidade é obrigatório'),
  bairro: yup
    .string()
    .min(3, 'Login precisa ter no minímo 3 caracteres')
    .required('Campo bairro é obrigatório'),
  rua: yup
    .string()
    .min(3, 'Login precisa ter no minímo 3 caracteres')
    .required('Campo rua é obrigatório'),
});

export default problemaSchema;
