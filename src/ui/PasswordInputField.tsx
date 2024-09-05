import { BsEye, BsEyeSlash } from "react-icons/bs";
import styled from "styled-components";

import { cloneElement, ReactElement, useState } from "react";
import { InputProp } from "./Input";

type PasswordInputFieldProps = {
  children: ReactElement<InputProp>;
};

const EyeSlash = styled(BsEyeSlash)`
  cursor: pointer;
`;

const Eye = styled(BsEye)`
  cursor: pointer;
`;

const Div = styled.div`
  position: relative;
  margin-bottom: 10px;

  & > span {
    position: absolute;
    display: inline-block;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
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
        {/* hi */}
        {showPassword ? <Eye /> : <EyeSlash />}
      </span>
    </Div>
  );
}
