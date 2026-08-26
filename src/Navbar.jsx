import './index.css'

function Navbar(){
    return(
        <div className="fixed top-0 right-10 flex items-center gap-8 p-4 z-50 m-5">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition">Projects</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition">Education</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition">Contact</a>
        </div>
    );
}
export default Navbar