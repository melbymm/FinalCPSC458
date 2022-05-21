import styled from "styled-components";

export default function Experience({ experience }) {
  return (
    <Wrapper>
      <div>
        <h1>{experience.title}</h1>
        <h2>{experience.price}</h2>
        <img src={experience.link} alt="hi"></img>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.li`
  border: 2px solid black;
  padding: 10px;

  h1,
  h2 {
    margin: 0;
  }
  h1 {
    font-size: 1.5rem;
  }
  h2 {
    font-size: 1rem;
    font-weight: 300;
  }
`;
