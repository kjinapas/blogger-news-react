
import './index.css'

import Card from './component/Card';
import { Article } from './component/Article';
import Navbar_header from './component/Navbar_header';
import Footer from './component/Footer';
function App() {

   


    return (
        <>
          <Navbar_header/>
            <div className="container mx-auto px-4 md:px-0 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Article />
                    <Card />
                </div>
            </div>

            
            <Footer/>
        </>
    );
}

export default App
