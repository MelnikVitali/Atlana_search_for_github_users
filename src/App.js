import { useEffect } from 'react';
import AOS from 'aos';

import Header from './components/Header';
import ScreenContainer from './components/ScreenContainer';

import 'aos/dist/aos.css';

const App = () => {
    useEffect(() => {
        AOS.init({
            offset: 80,
            duration: 700
        });
    }, []);
    return (
        <>
            <Header />
            <ScreenContainer />
        </>
    )
};

export default App;
