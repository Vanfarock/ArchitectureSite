import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
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

library.add(fas, fab);

export default App;
