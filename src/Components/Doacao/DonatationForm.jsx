import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const StyledField = styled(Field)`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: #ff5a5f;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #e04e4a;
  }
`;

const validationSchema = Yup.object({
  name: Yup.string().required('Nome é obrigatório'),
  email: Yup.string().email('Email inválido').required('Email é obrigatório'),
  amount: Yup.number().positive('Valor deve ser positivo').required('Valor é obrigatório')
});

const stripePromise = loadStripe('SUA_CHAVE_PUBLICA_STRIPE');

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (values, { setSubmitting }) => {
    if (!stripe || !elements) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
      billing_details: {
        name: values.name,
        email: values.email,
      },
    });

    if (error) {
      console.log(error);
    } else {
      console.log(paymentMethod);
      // Aqui você deve enviar `paymentMethod.id` e `values.amount` para seu servidor para processar o pagamento
    }

    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', amount: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <StyledForm>
          <StyledField name="name" type="text" placeholder="Nome" />
          {errors.name && touched.name ? <div>{errors.name}</div> : null}

          <StyledField name="email" type="email" placeholder="Email" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}

          <StyledField name="amount" type="number" placeholder="Valor da Doação" />
          {errors.amount && touched.amount ? <div>{errors.amount}</div> : null}

          <CardElement />
          
          <Button type="submit">Doar</Button>
        </StyledForm>
      )}
    </Formik>
  );
};

const DonationForm = () => (
  <Container>
    <h1>Formulário de Doação</h1>
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  </Container>
);

export default DonationForm;
