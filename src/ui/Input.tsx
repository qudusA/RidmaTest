import styled from "styled-components";

export type InputProp = {
  placeholder: string;
  type?: string;
  id?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

const InputField = styled.input`
  & {
    background-color: var(--color-gray-50);
    width: 100%;
    padding: 1.73rem 2.5rem;
    border-radius: 10px;
  }

  &::-webkit-input-placeholder {
    color: var(--color-gray-input-text);
    font-weight: 400;
    font-size: 1.5rem;
  }
`;

export default function Input({
  placeholder,
  type,
  id,
  value,
  onChange,
}: InputProp) {
  return (
    <InputField
      placeholder={placeholder}
      type={type}
      id={id}
      value={value}
      onChange={onChange}
    />
  );
}
