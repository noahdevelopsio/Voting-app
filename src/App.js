import { ReplyOutlined } from '@mui/icons-material';
import './App.css';
import ProductLList from './components/productList';
import * as a from '@mui/material';
import { ThemeProvider } from '@emotion/react';

const darkTheme = a.createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <a.CssBaseline />
      <div id="App">
        <a.Typography variant="h3" sx={{ textAlign: 'center', my: 2 }}>
          Voting App
          <ReplyOutlined />
        </a.Typography>
        <ProductLList />
      </div>
    </ThemeProvider>
  );
}
export default App;
