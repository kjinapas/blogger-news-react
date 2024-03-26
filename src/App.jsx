
import './index.css'
import { useState } from 'react';
import Card from './component/Card';
import { Article } from './component/Article';
import Profile from './component/Profile';
function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
  };



  return (
    <>
    <header className="bg-blue-800 text-white py-4 px-4">
                <div className="container mx-auto flex justify-between items-center px-4 md:px-0">
                    <h1 className="text-2xl font-bold">Daily Article & News</h1>
                    <button
                        className="block md:hidden text-white hover:text-gray-300 focus:outline-none"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? 'Close' : 'Menu'}
                    </button>
                    <nav className={`md:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
                        <a href="/" className="text-white hover:underline ml-4">Home</a>
                        <a href="#" className="text-white hover:underline ml-4">Articles</a>
                        <a href="#" className="text-white hover:underline ml-4">About</a>
                        <a href="#" className="text-white hover:underline ml-4">Contact</a>
                    </nav>
                </div>
            </header>
    <div className="container mx-auto px-4 md:px-0 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Article/>
         <Card/>
        </div>
    </div>
    <Profile/>
    <footer className="bg-blue-800 text-white py-4">
        <div className="container mx-auto text-center px-4">
            <p>&copy; 2024 Inspire By Web Speckyboy Design Magazine. Create With React</p>
        </div>
    </footer>

</>
  );
}

export default App
