import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/globalStyles';
import light from './styles/themes/light';
import MainContent from './pages/MainContent';

function App() {
  return (
    <ThemeProvider theme={light}>
        <MainContent />
        <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
