import { Link, useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";
import Bitcoin from "../../ui/Bitcoin";
import Input from "../../ui/Input";
import Button from "../../ui/Button";

const Section = styled.section`
  grid-column: -2/-1;
  margin: 0 auto;
  margin-bottom: 40px;
  width: 87.59%;
  /* border-radius: 1.92rem; */
  overflow-x: hidden;
  gap: 35px;
  /* height: 125.1rem; */
  display: flex;
  flex-direction: column;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Div1 = styled.div`
  width: 100%;
  /* min-height: 18.2rem; */
  padding: 1.098rem;
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 15px;
  background-color: var(--color-gray-0);
  border-radius: 1.92rem;

  & > p:first-child {
    border-radius: 3rem;
    color: var(--color-gray-0);
    display: flex;
    /* padding: 15px; */
    & > img {
      flex: 1;
    }
  }

  & > p:last-child {
    display: flex;
    /* flex: 1; */
    gap: 15px;
    border-radius: 1.559rem;
    background-image: linear-gradient(
      to right,
      var(--color-light-purple),
      var(--color-light-purple)
    );
    background-size: cover;
    background-position: center;
    color: var(--color-gray-0);
    padding: 30px;

    & > span:first-child {
      background-image: linear-gradient(
        to right,
        var(--color-purple-800),
        var(--color-purple-800)
      );
      background-size: cover;
      background-position: center;
      width: 94.62px;
      /* min-height: 87.78px; */
      display: inline-block;
      border-radius: 23.7px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    & > p {
      color: var(--color-gray-900);
      display: flex;
      flex-direction: column;
      & > span:first-child {
        font-weight: 700;
        font-size: 2.107rem;
      }

      & > :nth-child(2) {
        font-weight: 400;
        font-size: 1.3rem;
        line-height: 2rem;
      }
    }
  }
`;

const StyledLink = styled(Link)`
  color: var(--color-purple-800);
  font-weight: 700;
  font-size: 1.229rem;
  line-height: 1.756rem;
`;

const Div2 = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 26px;
  min-height: 9.2rem;
`;

const Div3 = styled.div`
  display: flex;
  gap: 15px;
  min-height: 27rem;
  font-weight: 500;
  font-size: 15px;
  justify-content: center;
  & > div {
    background-color: var(--color-gray-0);
    border-radius: 21px;
    font-weight: 700;
  }

  & > div:first-child {
    display: flex;
    align-items: center;
    padding: 10px;
    justify-content: center;
    & > .container {
      width: 95%;
      margin: 0 auto;
      display: grid;
      gap: 15px;
      align-items: center;
      justify-content: center;
      flex: 1;
      & p {
        font-weight: 700;
      }

      & > article {
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        align-items: center;
        gap: 10px;
        /* margin-bottom: 30px; */

        & > p:first-child {
          width: 45px;
          height: 45px;
          background-color: #114185;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 13px;
        }

        & > span {
          display: flex;
          justify-content: end;
          border-radius: 50%;
        }
      }

      & > input {
        margin-bottom: 10px;
        height: 10px;
        box-shadow: 0 0.1px var(--color-gray-2);
      }
      & > .pay {
        display: flex;
        justify-content: space-between;
        color: #acb5bd;
        font-size: 11.7px;
      }
    }
  }

  & > div:last-child {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 15px;
    padding: 15.5px;

    & > article {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      gap: 6px;
      & > div {
        display: flex;
        text-align: center;
        flex-direction: column;
        font-size: 10px;
        color: var(--color-black);
        flex: 1;

        & > img {
          flex: 1;
          margin-bottom: 10px;
        }

        & > span {
          font-weight: 800;
          color: var(--color-gray-900);
        }
      }
    }
  }
`;

const Table = styled.div`
  height: 97.4rem;
  background-color: var(--color-gray-0);
  border-radius: 29.75px;
  padding: 34px;
`;

const Row = styled.div`
  padding: 14px;
  text-transform: capitalize;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-gray-input-text);
  }
`;

const P = styled.p<{ id: number }>`
  display: flex;
  align-items: center;
  gap: 15px;

  ${(props) =>
    props.id === 1 &&
    css`
      & > span {
        background-image: linear-gradient(
          to right,
          var(--color-gray-900),
          var(--color-gray-900)
        );
        height: 62px;
        width: 62px;
        border-radius: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `}

  ${(props) =>
    props.id === 2 &&
    css`
      font-size: 1.587rem;
      font-weight: 400;
    `}

  ${(props) =>
    props.id % 2 === 1 &&
    css`
      font-weight: 700;
      font-size: 1.587rem;
      line-height: 2.066rem;
      color: var(--color-gray-900);
    `}

  ${(props) =>
    props.id !== 0 &&
    props.id % 4 === 0 &&
    css`
      font-size: 1.587rem;
      font-weight: 500;
      color: var(--color-red-700);
      text-transform: capitalize;
    `}

  ${(props) =>
    props.id === 0 &&
    css`
      border-bottom: 1px solid var(--color-gray-50);
      & > button {
        height: 50px;
        cursor: pointer;
        transition: all 0.1s ease;
        background-color: var(--color-gray-0);
        border: none;
        text-transform: capitalize;
        outline: none;
        display: inline-block;
      }

      & > button:hover {
        border-bottom: 1px solid var(--color-purple-800);
        height: 50px;
        transition: border 0.3s ease;
      }

      & > button.active {
        border-bottom: 1px solid var(--color-purple-800);
        color: var(--color-purple-800);
      }

      & > button:disabled {
        cursor: not-allowed;
      }
    `}
`;

export default function MainDashboard() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick(e: React.MouseEvent<HTMLButtonElement>): void {
    const status = e.currentTarget.value;
    searchParams.set("status", status);
    setSearchParams(searchParams);
  }

  return (
    <Section>
      <Div1>
        <p>
          <img src="/card.svg" alt="card" />
        </p>
        <p>
          <span>
            <img src="/database.svg" alt="data base image" />
          </span>
          <p>
            <span>Payment made easy</span>
            <span>
              You can pay your bills, buy airtime and <br /> pay for utility
              bills. <br />
            </span>
            <StyledLink to="">learn more &gt;</StyledLink>
          </p>
        </p>
      </Div1>
      <Div2>
        <Bitcoin imageUrl="/bitcoin.svg" color1="#279e76" color2="#0c533bd6">
          sell bitcoin
        </Bitcoin>
        <Bitcoin imageUrl="/bitcoin.svg" color1="#279e76" color2="#0c533bd6">
          receive bitcoin
        </Bitcoin>
        <Bitcoin imageUrl="/amazonCard.svg" color1="#35D1F1" color2="#0B9CBA">
          sell giftcard
        </Bitcoin>
        <Bitcoin imageUrl="/airtime.svg" color1="#7165E3D9" color2="#3D2ED1">
          refill
        </Bitcoin>
      </Div2>
      <Div3>
        <div>
          <div className="container">
            <p>Quik withdrawal</p>
            <article>
              <p>
                <img src="/access.svg" alt="access" />
              </p>
              <p>Accessbank</p>
              <span>
                <img src="/time.svg" alt="time" />
              </span>
            </article>
            <p>
              <Input placeholder="Enter amount" />
            </p>
            <Button size="large" variation="secondary">
              Withtdraw Now
            </Button>
            <p className="pay">
              <span>your balance</span> <span>#45000</span>
            </p>
          </div>
        </div>
        <div>
          <p>Top card with high rattings</p>
          <article>
            <div>
              <img src="/stream.svg" alt="stream logo" />
              Stream <br />
              <span>#27,000</span>
            </div>
            <div>
              <img src="/amazonGiftCard.svg" alt="stream logo" />
              Amazon <br />
              <span>#27,000</span>
            </div>
            <div>
              <img src="/visaCard.svg" alt="visa logo" />
              vanila <br />
              <span>#27,000</span>
            </div>
            <div>
              <img src="/visaCard.svg" alt="visa logo" />
              vanila <br />
              <span>#27,000</span>
            </div>
          </article>
        </div>
      </Div3>
      <Table>
        <Row>
          <Col id={1}>Recent Transaction</Col>
          <Col id={0}>
            <button
              value={"successful"}
              onClick={handleClick}
              className={
                searchParams.get("status") === "successful" ? "active" : ""
              }
              disabled={searchParams.get("status") === "successful"}
            >
              successful
            </button>
            <button
              value={"pending"}
              onClick={handleClick}
              className={
                searchParams.get("status") === "pending" ? "active" : ""
              }
              disabled={searchParams.get("status") === "pending"}
            >
              pending
            </button>
            <button
              value={"rejected"}
              onClick={handleClick}
              className={
                searchParams.get("status") === "rejected" ? "active" : ""
              }
              disabled={searchParams.get("status") === "rejected"}
            >
              rejected
            </button>
          </Col>
        </Row>
        <Row>
          <Col id={1}>
            <span>
              <img src="/amazon.svg" alt="amazon logo" />
            </span>
            Amazon
          </Col>
          <Col id={2}>
            <span>
              Jun 4, 2020 <br /> 07:00am
            </span>
          </Col>
          <Col id={3}>$200</Col>
          <Col id={4}>rejected</Col>
        </Row>
        <Row>
          <Col id={1}>
            <span>
              <img src="/robotArm.svg" alt="amazon logo" />
            </span>
            Steam
          </Col>
          <Col id={2}>
            <span>
              Jun 4, 2020 <br /> 07:00am
            </span>
          </Col>
          <Col id={3}>$200</Col>
          <Col id={4}>rejected</Col>
        </Row>
      </Table>
    </Section>
  );
}

function Col({ children, id }: { children: React.ReactNode; id: number }) {
  return <P id={id}>{children}</P>;
}
