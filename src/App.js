import "./App.css";
import React, { lazy, Suspense } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes as Switch,
} from "react-router-dom";

import { CircularProgress } from "@mui/material";
import styled from "styled-components/macro";

const Home = lazy(() => import("./Pages/Home"));
const SignIn = lazy(() => import("./Pages/Auth/SignIn"));
const SignUp = lazy(() => import("./Pages/Auth/SignUp"));


function App() {
  return (
    <div className="App">
      <Suspense
        fallback={
          <Box>
            <CircularProgress />
          </Box>
        }
      >
        <Router>
          <Switch>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/" element={<Home />} />
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
const Box = styled.div`
  width: 96%;
  height: 80vh;
  display: grid;
  place-items: center;
`;
