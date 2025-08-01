import { Link } from 'react-router';
import CornerBorder from '../components/CornerBorder.jsx'

export default function MainPage(){
    return (
        <>
        <div className='relative min-h-screen'>
            <div className='flex justify-center p-10 mt-6 md:p-20'>
                <div className='relative p-14 md:p-24 rounded-xl'> 
                    <p className="mb-12 text-3xl text-center">Welcome to my website:p</p>
                    <p className="text-xl text-center font-semibold">Please select a filter</p>
                    <div className="mt-4">
                        <ul className="list-none text-center text-xl/10">
                            <li><Link to="/projects" className="text-amber-300 hover:text-amber-700">Projects</Link></li>
                            <li><Link to="/resume" className="text-amber-300 hover:text-amber-700">Resume</Link></li>
                        </ul>
                    </div>
                    <CornerBorder/>
                </div>          
            </div>
        </div>
        </>
    )
}