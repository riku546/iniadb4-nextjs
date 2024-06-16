import { Html, Head, Main, NextScript } from "next/document";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
 
//ダークモード
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


export default function Document() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
    </ThemeProvider>
  );
}
