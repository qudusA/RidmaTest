import { BsEye, BsEyeSlash } from "react-icons/bs";
import styled from "styled-components";

import { cloneElement, ReactElement, useState } from "react";
import { InputProp } from "./Input";

type PasswordInputFieldProps = {
  children: ReactElement<InputProp>;
};

const EyeSlash = styled(BsEyeSlash)`
  position: absolute;
  right: 20px;
  top: 10px;
  cursor: pointer;
`;

const Eye = styled(BsEye)`
  position: absolute;
  right: 20px;
  top: 10px;
  cursor: pointer;
`;

const Div = styled.div`
  position: relative;
  margin-bottom: 10px;
`;

export default function PasswordInputField({
  children,
}: PasswordInputFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  const clone = cloneElement(children, {
    type: showPassword ? "text" : "password",
  });

  return (
    <Div>
      {clone}
      <span role="button" onClick={() => setShowPassword((show) => !show)}>
        {showPassword ? <Eye /> : <EyeSlash />}
      </span>
    </Div>
  );
}
