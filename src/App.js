import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { ControlBar, TranscriptList, WaveformBar } from "app/index";
import { loadData, selectLoading } from "redux/appSlice";

import theme from "style/theme";
import { RippleLoader } from "common";

const Container = styled.div`
  max-width: 930px;
  width: 100%;
  margin: 0 auto;
`;

const LoaderContainer = styled.div`
  position: fixed;
  top: 40%;
  left: calc(50% - 36px);
`;

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(loadData());
  }, [dispatch]);

  if (loading)
    return (
      <LoaderContainer>
        <RippleLoader />
      </LoaderContainer>
    );

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <ControlBar />
        <WaveformBar />
        <TranscriptList search={search} setSearch={setSearch} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
