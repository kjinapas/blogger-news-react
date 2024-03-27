
import './index.css'

import Card from './component/Card';
import { Article } from './component/Article';
import Profile from './component/Profile';
import Navbar_header from './component/Navbar_header';
function App() {

   


    return (
        <>
          <Navbar_header/>
            <div className="container mx-auto px-4 md:px-0 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Article />
                    <Card />
                </div>
            </div>
            <Profile />
            <footer className="bg-blue-800 text-white py-4">
                <div className="container mx-auto text-center px-4">
                    <p>&copy; 2024 Inspire By Web Speckyboy Design Magazine. Create With React</p>
                </div>
            </footer>

        </>
    );
}

export default App
