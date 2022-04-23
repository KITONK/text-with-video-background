import styled from 'styled-components';

function App() {
  return (
    <Section>
      <Video autoPlay loop muted>
        <source src="/video/video.mp4" type="video/mp4" />
      </Video>
      <Title>BEYOND</Title>
    </Section>
  );
}

const Section = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const Title = styled.h1`
  width: 100%;
  height: 100%;
  background-color: #000;
  font-size: 300px;
  color: #fff;
  mix-blend-mode: multiply;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Source Sans Pro", sans-serif;
`;

export default App;
