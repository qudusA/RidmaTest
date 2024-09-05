import styled, { css } from "styled-components";

const Bit = styled.div<{ imageUrl: string; color1: string; color2: string }>`
  ${(props) =>
    props.imageUrl && props.color1 && props.color2
      ? css`
          background-image: url(${props.imageUrl}),
            linear-gradient(to right, ${props.color1}, ${props.color2});
        `
      : ""}

  background-size: auto;
  background-repeat: no-repeat;
  background-position: right bottom;
  color: var(--color-gray-0);
  border-radius: 5px;
  padding: 37px 0 0 21px;
  text-transform: capitalize;
`;

export default function Bitcoin({
  children,
  imageUrl,
  color1,
  color2,
}: {
  children: string;
  imageUrl: string;
  color1: string;
  color2: string;
}) {
  return (
    <Bit imageUrl={imageUrl} color1={color1} color2={color2}>
      <p>{children}</p>
      {/* <img src="/bitcoin.svg" alt="bitcoin image" /> */}
    </Bit>
  );
}
