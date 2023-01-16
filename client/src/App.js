import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Feed from "./component/Feed";
import SearchResult from "./component/SearchResult";
import VideoDetails from "./component/VideoDetails";
import styled from 'styled-components'
import { AppContext } from "./context/AppContext";
import Login from "./component/Login";
import Register from "./component/Register";
import Channel from "./component/Channel";

function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <Wrapper>
          <Header />
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/searchResult/:searchQuery" element={<SearchResult />} />
            <Route path="/video/:id" element={<VideoDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/channel/:id" element={<Channel />} />
          </Routes>
        </Wrapper>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
