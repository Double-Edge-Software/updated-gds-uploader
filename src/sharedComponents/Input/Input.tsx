import React, { forwardRef } from "react";
import { TextField } from "@material-ui/core";

interface inputType{
  name: string,
  label: string,
  error: any,
  helperText: any
}

export const Input = forwardRef((props:inputType, ref) => {
  return (
    <TextField
      variant="outlined"
      margin="normal"
      inputRef={ref}
      fullWidth
      type='text'
      {...props}
    ></TextField>
  );
});
