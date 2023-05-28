import * as yup from 'yup';

const problemaSchema = yup.object().shape({
  cidade: yup.string().min(3).required('Campo cidade é obrigatório'),
  bairro: yup.string().min(3).required('Campo bairro é obrigatório'),
  rua: yup.string().min(3).required('Campo rua é obrigatório'),
  tipo: yup.string().min(3).required('Campo tipo é obrigatório'),
  observacao: yup.string().max(300).notRequired(),
  cidadao_id: yup
    .number()
    .integer()
    .moreThan(0)
    .required('Deve ser um número inteiro'),
  prefeitura_id: yup
    .number()
    .integer()
    .moreThan(0)
    .required('Deve ser um número inteiro'),
});

export default problemaSchema;
