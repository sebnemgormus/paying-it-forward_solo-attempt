import Layout from "./components/Layout";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from "./pages/Home";
import HomePage from "./pages/HomePage";
import HowItWorks from "./pages/HowItWorks";
import AboutUs from "./pages/AboutUs";
import SignUp from "./pages/SignUp";
import PageCTA from "./pages/PageCTA";

function App() {
    return (
        <Layout>
            <Router>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/home-page" element={<HomePage/>}>
                    <HomePage />
                </Route>
                <Route path="/how-it-works" element={<HowItWorks/>}>
                    <HowItWorks />
                </Route>
                <Route path="/about-us" element={<AboutUs/>}>
                    <AboutUs />
                </Route>
                <Route path="/sign-up" element={<SignUp/>}>
                    <SignUp />
                </Route>
                <Route path="/page-cta" element={<PageCTA/>}>
                    <PageCTA />
                </Route>
            </Router>
        </Layout>
    );
}

export default App;