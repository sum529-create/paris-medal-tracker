import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import OlympicMedalsPage from './pages/OlympicMedalsPage';

const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    box-sizing: border-box;
  }
  body{
    background-color: #f0f4f8;
    color: #000;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    word-break: keep-all;
  }
`;
const MainWrapper = styled.div`
  display: flex;
  max-width: 48rem;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
`;

const router = createBrowserRouter([
  {
    path: '/',
    element: <OlympicMedalsPage />,
  },
]);

function App() {
  return (
    <MainWrapper>
      <GlobalStyle />
      <RouterProvider router={router} />
    </MainWrapper>
  );
}

export default App;
