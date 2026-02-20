import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
    return (
        <Router>
            <div className="app-container">
                <Navbar />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        {/* Additional routes will be added here */}
                    </Routes>
                </main>
                <footer>
                    <p>© 2024 Aaraa Gift Shop. All Rights Reserved.</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;
