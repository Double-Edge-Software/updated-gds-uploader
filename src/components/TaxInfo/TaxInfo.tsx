import * as React from 'react';
import { Header, MainContainer, Form, Input, PrimaryButton } from "../../sharedComponents/";

import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { SliceTypes, chooseTaxYear } from '../../rootslice';
import Typography  from '@material-ui/core/Typography';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export interface TaxInfoProps {
}

const schema = yup.object().shape({
  taxYear: yup
  .string()
  .matches(/^([^A-Za-z]*)$/, 'Tax Year should only contain numbers')
  .required('Tax Year is a required Field'),
})

export const  TaxInfo = (props: TaxInfoProps) => {

  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema)
  });
  const dispatch = useDispatch()
  const taxYear = useSelector( (state:SliceTypes) => state.taxYear)
  const history = useHistory();

  const onSubmit = (data: any) => {
    dispatch(chooseTaxYear(data.taxYear))
    history.push("./upload");
  };

  return (
    <>
      <Header />
      <MainContainer>
        <Typography component='h2' variant='h5'>
          Please Provide Your Tax Year
        </Typography>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            ref={register}
            name="taxYear"
            label="Tax Year"
            error = {!!errors.taxYear}
            helperText={errors?.taxYear?.message}
          />
          <PrimaryButton type="submit">Next</PrimaryButton>
        </Form>
      </MainContainer>
    </>
  );
}
