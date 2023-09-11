import './App.css';
import WebSiteProvider from './contexts/websiteContext';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import Profile from './layouts/Profile';
import Projects from './layouts/Projects';
import Skills from './layouts/Skills';

function App() {
      return (
            <>
                  <WebSiteProvider>
                        <Header />
                        <Skills />
                        <Profile />
                        <Projects />
                        <Footer />
                  </WebSiteProvider>
            </>
      );
}

export default App;
