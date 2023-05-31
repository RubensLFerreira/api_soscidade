import * as yup from 'yup';

const problemaSchema = yup.object().shape({
  imagem: yup
    .string()
    .url('Campo imagem deve ser passado URL')
    .required('Campo imagem é obrigatório'),
  observacao: yup
    .string()
    .max(300, 'Quantidade máxima de 300 caracteres')
    .notRequired(),
  status: yup.boolean(),
  categoria_id: yup.number()
    .integer('Obrigatório informar id da categoria')
    .moreThan(0, 'Valor do id não pode ser 0')
    .required('Campo categoria_id é obrigatório'),
  cidadao_id: yup.number()
    .integer('Obrigatório informar id do cidadão')
    .moreThan(0, 'Valor do id não pode ser 0')
    .required('Campo cidadao_id é obrigatório'),
  prefeitura_id: yup.number()
    .integer('Obrigatório informar id da prefeitura')
    .moreThan(0, 'Valor do id não pode ser 0')
    .required('Campo prefeitura_id é obrigatório'),
  localizacao_id: yup.number()
    .integer('Obrigatório informar id da localização')
    .moreThan(0, 'Valor do id não pode ser 0')
    .required('Campo localizacao_id é obrigatório'),
  // cidade: yup
  //   .string()
  //   .min(3, 'Login precisa ter no minímo 3 caracteres')
  //   .required('Campo cidade é obrigatório'),
  // bairro: yup
  //   .string()
  //   .min(3, 'Login precisa ter no minímo 3 caracteres')
  //   .required('Campo bairro é obrigatório'),
  // rua: yup
  //   .string()
  //   .min(3, 'Login precisa ter no minímo 3 caracteres')
  //   .required('Campo rua é obrigatório'),
  // tipo: yup
  //   .string()
  //   .min(3, 'Login precisa ter no minímo 3 caracteres')
  //   .required('Campo tipo é obrigatório'),
});

export default problemaSchema;
