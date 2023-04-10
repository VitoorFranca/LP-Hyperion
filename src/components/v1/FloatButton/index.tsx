import * as React from "react";
import { Button, ButtonProps } from "@mui/material";

type Props = {
  children: any;
  style?: ButtonProps["style"];
  props: ButtonProps;
};

const FloatButton = ({ children, style = {}, ...props }: Props) => {
  return (
    <Button style={{ position: "fixed", ...style }} {...props}>
      {children}
    </Button>
  );
};

export default FloatButton;