import { Link } from 'react-router'

export default function Header() {
    return (
        <header className='py-(--spacing-m) px-(--spacing-s) md:px-(--spacing-m) flex justify-between'>
            <Link to='/'><span className='font-semibold text-beige'>Nathan Gordon</span></Link>
            <span className='font-semibold hidden lg:block'>Data Analyst & Database Designer</span>
            <div className='flex gap-(--spacing-m)'>
                <Link to='/work'><span className='font-[Poppins] font-medium text-beige hover:font-extrabold transition duration-300 ease-in-out'>Work</span></Link>
                <Link to='https://docs.google.com/document/d/11Bw9728a3QadjtBDpUCDbp_zC1XcOub6/edit?usp=sharing&ouid=114091693065227747461&rtpof=true&sd=true' target='_blank'><span className='font-[Poppins] font-medium text-beige hover:font-extrabold transition duration-300 ease-in-out'>Resume</span></Link>
            </div>
        </header>
    )
}