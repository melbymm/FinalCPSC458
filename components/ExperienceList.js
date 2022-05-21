import Experience from "./Experience";
import styled from "styled-components";
export default function ExperienceList({ data }) {
  return (
    <Wrapper>
      {data.map((e, i) => (
        <Experience key={e.title} experience={e} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.ol`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
