import React from 'react';
import { Container, ThemeProvider, createTheme } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import PostDetails from './components/PostDetails/PostDetails';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

const theme = createTheme({
    typography: {
        fontFamily: ['Josefin Sans', 'sans-serif', 'Open Sans', 'sans-serif'].join(','),
    },
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#000000',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            light: 'black',
            main: '#3A3A3A',
            // dark: will be calculated from palette.secondary.main,
            contrastText: '#FFFFFF',
        },
        // Used by `getContrastText()` to maximize the contrast between
        // the background and the text.
        contrastThreshold: 3,
        // Used by the functions below to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.2,
    },
});
const darkTheme = createTheme({
    typography: {
        fontFamily: ['Josefin Sans', 'sans-serif', 'Open Sans', 'sans-serif'].join(','),
    },
    palette: {
        type: 'dark',
    },
});

const App = () => {
    const user = JSON.parse(localStorage.getItem('profile'));

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Container maxWidth='xl'>
                    <Navbar />
                    <Switch>
                        <Route path='/' exact component={() => <Redirect to='/posts' />} />
                        <Route path='/posts' exact component={Home} />
                        <Route path='/posts/search' exact component={Home} />
                        <Route path='/posts/:id' exact component={PostDetails} />
                        <Route path='/auth' exact component={() => (!user ? <Auth /> : <Redirect to='/posts' />)} />
                    </Switch>
                </Container>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;
