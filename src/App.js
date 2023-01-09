import {Routes, Route} from 'react-router-dom';

import Home from './pages/home/home.component';
import Services from "./pages/services/services.component";
import Contact from "./pages/contact/contact.component";

import Nav from "./components/nav/nav.component";
import Footer from "./components/footer/footer.component";

import './App.scss';
import ContactBanner from "./components/contact-banner/contact-banner.component";
import ScrollToTop from "./utils/scrollToTop.component";

function App() {
    return (
        <ScrollToTop>
            <div className="App">
                <Nav/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='massages-et-tarifs' element={<Services/>}/>
                    <Route path='contact' element={<Contact/>}/>
                </Routes>
                <ContactBanner/>
                <Footer/>
            </div>
        </ScrollToTop>
    );
}

export default App;
