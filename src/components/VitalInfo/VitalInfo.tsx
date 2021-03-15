import * as React from "react";
import { Header, MainContainer, Form, Input, PrimaryButton } from "../../sharedComponents/";

import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

export interface IAppProps {}

export const VitalInfo = (props: IAppProps) => {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();

  const onSubmit = (data: any) => {
    history.push("/tax");
  };
  return (
    <>
      <Header />
      <MainContainer>
        <h2>Please Provide Your Name</h2>
        <Form>
          <Input
            ref={register}
            name="firstName"
            label="First Name"
          />
          <Input
            ref={register}
            name="lastName"
            label="Last Name"
          />
          <PrimaryButton type="submit">Next</PrimaryButton>
        </Form>
      </MainContainer>
    </>
  );
};
