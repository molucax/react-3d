import React from "react"
import styled from "styled-components"
import EarthScreen from "./components/EarthScreen/EarthScreen";

function App() {
  return (
    <Wrapper>
     {/*  <PinkBoxWorld /> */}
     <EarthScreen />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`