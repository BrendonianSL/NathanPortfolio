import Button from "./Button";
import { Link } from 'react-router';

export default function Footer() {
    return (
        <footer className='w-full bg-[#0C0C0C] flex flex-col justify-center items-center gap-(--spacing-l) pt-(--spacing-m) pb-(--spacing-m) pl-(--spacing-m) pr-(--spacing-m)'>
            <div className='w-full max-w-[1320px] flex flex-col gap-(--spacing-m) justify-center items-center'>
                <div className="relative w-[200px] h-[200px]">
                    <svg className="w-full h-full animate-rotateText" viewBox="0 0 200 200">
                    <defs>
                        <path
                        id="circlePath"
                        d="M 100, 100
                            m -50, 0
                            a 50,50 0 1,1 100,0
                            a 50,50 0 1,1 -100,0"
                        fill="none"
                        />
                    </defs>
                    <text className="fill-beige text-[10px] uppercase tracking-[2px]">
                        <textPath href="#circlePath" startOffset="0%">
                        Data Analyst - And - Database Developer -
                        </textPath>
                    </text>
                    </svg>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80px] h-[80px]">
                    <img
                        src="/NGS.jpg"
                        alt="Picture of Nathan Gordon"
                        className="w-full h-full rounded-full object-cover"
                    />
                    </div>
                </div>
                <h2 className='w-full text-center'>Let's Get <span className='text-beige'>Better Together</span></h2>
                <div className='text-lg text-center flex flex-col items-center justify-center gap-(--spacing-m) lg:items-center'>
                    <p>Got a cool project idea? Let's chat and see how we can create something together!</p>
                    <Button text='Contact Me' link='mailto:nathanielcapagordon@gmail.com' />
                </div>
            </div>
            <div className='w-full border-t-2 border-shade border-dashed pt-(--spacing-m) max-w-[1320px] flex flex-col gap-(--spacing-s) justify-between md:flex-row'>
                <span className='font-[Poppins] font-medium text-biege'>Built By <Link to='https://brendanlewisportfolio.com'><span className='text-beige'>Brendan Lewis</span></Link> 😄</span>
                <div className='flex gap-(--spacing-m)'>
                    <Link to='https://github.com/NathanielTG'><span className='font-[Poppins] font-medium text-beige'>Github</span></Link>
                    <Link to='https://www.linkedin.com/in/nathanieltgordon/'><span className='font-[Poppins] font-medium text-beige'>LinkedIn</span></Link>
                </div>
            </div>
        </footer>
    )
}