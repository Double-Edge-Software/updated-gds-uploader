import * as React from "react";
import { Header, MainContainer, Form, Input, PrimaryButton } from "../../sharedComponents/";

import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { SliceTypes, chooseFirstName, chooseLastName } from '../../rootslice';
import Typography  from '@material-ui/core/Typography';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  firstName: yup
  .string()
  .matches(/^([^0-9]*)$/, 'First name should not contain numbers')
  .required('First Name is a required Field'),

  lastName: yup
  .string()
  .matches(/^([^0-9]*)$/, 'Last name should not contain numbers')
  .required('Last Name is a required Field')
})



export interface IAppProps {}

export const VitalInfo = (props: IAppProps) => {
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema)
  });
  const dispatch = useDispatch()
  const firstName = useSelector( (state:SliceTypes) => state.firstName)
  const lastName = useSelector( (state:SliceTypes) => state.lastName)
  const history = useHistory();

  const onSubmit = (data: any) => {
    dispatch(chooseFirstName(data.firstName))
    dispatch(chooseLastName(data.lastName))
    history.push("./tax");
  };
  return (
    <>
      <Header />
      <MainContainer>
        <Typography component='h2' variant='h5'>
          Please Provide Your Name
        </Typography>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            ref={register}
            name="firstName"
            label="First Name"
            error = {!!errors.firstName}
            helperText={errors?.firstName?.message}
          />
          <Input
            ref={register}
            name="lastName"
            label="Last Name"
            error = {!!errors.lastName}
            helperText={errors?.lastName?.message}
          />
          <PrimaryButton type="submit">Next</PrimaryButton>
        </Form>
      </MainContainer>
    </>
  );
};
