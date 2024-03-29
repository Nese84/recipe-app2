
import './App.css';
import AppRouter from './router/AppRouter';
import {ThemeProvider} from 'styled-components'
import {theme} from './style/theme'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <AppRouter/> 
      </ThemeProvider>
    
    </div>
  );
}

export default App;
