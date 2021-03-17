import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/globalStyles';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import light from './styles/themes/light';
import Menu from './pages/Menu';
import Footer from './pages/Footer';
import MainContent from './pages/MainContent';
import CasesPage from './pages/CasesPage';
import ContactPage from './pages/ContactPage';
import BudgetPage from './pages/BudgetPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
    return (
        <ThemeProvider theme={light}>
            <BrowserRouter>
                <Menu />
        
                <Switch>
                    <Route path="/" exact component={MainContent} />
                    <Route path="/cases" component={CasesPage} />
                    <Route path="/contacts" component={ContactPage} />
                    <Route path="/budget" component={BudgetPage} />
                    <Route component={NotFoundPage} />
                </Switch>
                
                <Footer />
            </BrowserRouter>
            
            <GlobalStyle />
        </ThemeProvider>
  );
}

library.add(fas, fab);

export default App;
