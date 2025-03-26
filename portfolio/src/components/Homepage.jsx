import Button from "./Button";
import { useEffect } from 'react';
import { Link } from 'react-router';

export default function Homepage() {
    //Tracks Numbers To Be Used For The Professional Journey.
    let number = 0;

    const services = [
        {
            service: 'Database Design & Architecture',
            description: 'I offer database development & design services, structuring and optimizing databases for efficient data storage, retrieval, and scalability.',
        },
        {
            service: 'SQL Querying',
            description: 'I provide SQL querying services, enabling efficient data retrieval and analysis from structured databases.',
        },
        {
            service: 'Data Analysis & Visualization',
            description: 'I offer data analysis and visualization services, uncovering insights, patterns, and trends from complex datasets for informed decision-making.',
        }
    ];
    
    const workflow = [
        {
            number: '01',
            step: 'Define',
            description: 'Understand the project’s objectives, gather key requirements, and establish clear goals for data collection and analysis.',
        },
        {
            number: '02',
            step: 'Analyze',
            description: 'Clean, structure, and explore the data to uncover trends, patterns, and key insights that guide decision-making.',
        },
        {
            number: '03',
            step: 'Visualize',
            description: 'Develop interactive dashboards, reports, and visual representations to communicate findings effectively.',
        },
        {
            number: '04',
            step: 'Act',
            description: 'Translate insights into actionable strategies, measure their impact, and iterate based on real-world results.',
        }
    ];

    //Defines A List Of All Companies Employed By.
    const jobHistory = [
        {
            position: 'Business Solutions Analyst',
            company: 'Independence Blue Cross',
            duration: '2025 - Present',
            description: 'Enhanced business operations and systems by analyzing data, managing projects, and evaluating workflows to improve efficiency and productivity.',
        },
    ];

    const techStack = [
        {
            image: '/oracle.svg',
            name: 'Oracle',
        },
        {
            image: '/SQLite.svg',
            name: 'SQLite',
        },
        {
            image: '/Pandas.svg',
            name: 'Pandas',
        },
        {
            image: 'NumPy',
            name: 'NumPy',
        },
        {
            image: '/Python.svg',
            name: 'Python',
        },
        {
            image: '/Java.svg',
            name: 'Java',
        },
        {
            image: '/Cpp.svg',
            name: 'C++',
        },
        {
            image: '/HTML.svg',
            name: 'HTML',
        },
        {
            image: '/CSS.svg',
            name: 'CSS',
        },
        {
            image: '/Javascript.svg',
            name: 'Javascript',
        },
        {
            image: '/SQL.svg',
            name: 'SQL',
        },
        {
            image: '/Figma.svg',
            name: 'Figma',
        }
    ]

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        //Creates An Intersection Observer.
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                }
            });
        });

        const hiddenElements = document.querySelectorAll('.hide');
        hiddenElements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);
    

    //Creates A Toggle For The Open Index Use State.
    const toggleButton = (index) => {
        setOpenIndex(openIndex === index ? null: index);
    }

    return (
        <section className='flex flex-col items-center pb-(--spacing-xl) pl-(--spacing-s) pr-(--spacing-s) md:px-(--spacing-m) lg:px(--spacing-m) gap-(--spacing-xxl)'>
            <article className="relative h-[calc(100vh-89px)] flex flex-col justify-center items-center">
                <div className="flex flex-col items-center justify-center gap-(--spacing-m)">
                    <h1 className="text-center hide">NATHAN GORDON</h1>
                    <p className='text-center w-full max-w-[400px] hide'>PENNSYLVANIA BASED DATA ANALYST PASSIONATE ABOUT TRANSFORMING COMPLEX DATA INTO CLEAR, ACTIONABLE INSIGHTS.</p>
                </div>
            </article>
            <article className='w-full flex flex-col max-w-[82.5rem] gap-(--spacing-m)'>
                <div className='flex flex-col gap-(--spacing-s)'>
                    <span className='hide sectionLabel'>PROJECT SHOWCASE</span>
                    <h2 className='hide'>Projects Developed With Passion</h2>
                </div>
                <Link to='https://nathanieltg.github.io/Civilization-VI-Helper/index.html' className='hide'>
                    <div className='flex gap-(--spacing-l)'>
                        <div className='flex flex-col gap-(--spacing-s) cursor-pointer w-full group'>
                            <div className='border-2 border-shade rounded-lg'>
                                <figure className='overflow-hidden rounded-lg'>
                                    <img src='/CivProject.png' className='bg-biege w-full object-cover h-[450px] group-hover:scale-[1.05] transition duration-300 ease-in-out' />
                                </figure>
                            </div>
                            <div className='flex flex-col gap-(--spacing-s)'>
                                <div className='flex flex-col gap-(--spacing-xs)'>
                                    <h4>Civilization 6 Helper</h4>
                                    <span className='text-alt-white'>Frontend Website</span>
                                    <span className='text-alt-black2'>JavaScript | HTML | CSS</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Button text={'View Projects'} link={'/work'}/>
            </article>
            <article className='flex flex-col w-full max-w-[1320px] gap-(--spacing-l) lg:flex-row'>
                <div className='flex flex-col w-full gap-(--spacing-s)'>
                    <span className='sectionLabel hide'>WORKFLOW</span>
                    <h2 className='hide'>From Strategy To Execution, My Workflow Works!</h2>
                    <p className='text-alt-black2 hide'>
                        Establishing an efficient workflow is paramount to the success of any industry professional. 
                        In data analytics and development, a structured yet adaptable process is essential for delivering accurate insights and building reliable solutions. 
                    </p>
                </div>
                <div className='w-full grid gap-y-(--spacing-m) gap-x-(--spacing-m)'>
                    {workflow.map((element, index) => {
                        return (
                            <div key={index} className='flex flex-col gap-(--spacing-s) border-b-2 border-dashed border-shade pb-(--spacing-m) hide'>
                                <h3 className='text-[2rem]'>{element.number}</h3>
                                <div className='flex flex-col gap-(--spacing-xs)'>
                                    <h4>{element.step}</h4>
                                    <p>{element.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </article>
            <article className='flex flex-col w-full max-w-[1320px] gap-(--spacing-m) lg:gap-(--spacing-m)'>
                <div className='hide flex flex-col w-full gap-(--spacing-s) border-b-2 border-shade border-dashed pb-(--spacing-m)'>
                    <span className='sectionLabel hide'>SKILLSET</span>
                    <h2 className='hide'>I transform data into <span className='text-beige'>actionable insights</span>, enabling businesses to make informed decisions and drive <span className='text-beige'>meaningful growth</span>.</h2>
                </div>
                <div className='flex flex-col lg:flex-row gap-(--spacing-s)'>
                    {services.map((element, index) => {
                        return (
                        <div key={index} className='hide flex flex-col gap-(--spacing-s) border-2 border-shade bg-[#1A1A1A] rounded-lg pt-(--spacing-m) pb-(--spacing-m) pl-(--spacing-m) pr-(--spacing-m) w-full'>
                            <h4>{element.service}</h4>
                            <p>{element.description}</p>
                        </div>
                        )
                    })}
                </div>
            </article>
            <article className='w-full max-w-[1320px] flex flex-col gap-(--spacing-m)'>
                <div className='flex flex-col gap-(--spacing-s)'>
                    <span className='sectionLabel hide'>Experience</span>
                    <h2 className='hide'>My Professional Journey</h2>
                </div>
                <div className='hide flex flex-col gap-(--spacing-m)'>
                    {jobHistory.map((item, index) => {
                        number++;
                        return (
                            <div key={index} className='flex flex-col justify-between items-start gap-(--spacing-s) border-b-2 pb-(--spacing-m) border-dashed border-shade md:flex-col md:items-start lg:flex-row lg:items-center mgap-(--spacing-l)'>
                                <div className='flex flex-col gap-(--spacing-s) '>
                                    <h3 className='text-[2rem]'>{`0${number}`}</h3>
                                    <div className='flex flex-col gap-(--spacing-xs)'>
                                        <h4>{item.position}</h4>
                                        <p className='text-alt-black2 text-[.875rem]'>{item.company} | {item.duration}</p>
                                    </div>
                                </div>
                                <p>
                                    {item.description}
                                </p>
                            </div>
                        )
                    })}
                </div>
        </article>
            <article className='w-full max-w-[1320px] flex flex-col gap-(--spacing-m)'> 
                <div className='hide w-full max-w-[1320px] border-b-2 pb-(--spacing-m) border-dashed border-shade flex flex-col gap-(--spacing-s)'>
                    <span className='hide sectionLabel'>About Me</span>
                    <h2 className='hide'>The Man Behind The Screen</h2>
                </div>
                <div className='flex flex-col items-center justify-center gap-(--spacing-l) lg:flex-row'>
                    <img className='w-full object-cover shadow-(--shadow-main)  lg:h-[450px] rounded-(--spacing-xs)' src ='/NG.jpg' alt='A Picture Of Nathan Gordon'/>
                    <div className='w-full flex flex-col gap-(--spacing-m) justify-start items-start'>
                        <div className='flex flex-col gap-(--spacing-s)'>
                            <h3 className='text-alt-white hide'>Hello! I'm Nathan,</h3>
                            <p className='text-alt-black2 hide'>
                                I’ve always been interested in the intersection between data and the real world. 
                                Numbers tell stories, and I thrive on uncovering those narratives to drive meaningful decisions. 
                                Whether it's analyzing trends, optimizing workflows, or building databases that power businesses, I find satisfaction in turning raw data into clear, actionable insights. 
                                My passion lies in making complex information accessible, ensuring that every dataset serves a purpose beyond just numbers on a screen.
                            </p>
                        </div>
                        <div className='flex flex-wrap w-full gap-(--spacing-xs)'>
                            {techStack.map((element, index) => {
                                return (
                                    <div key={index} className='hide bg-beige text-alt-black rounded-lg px-4 py-2 text-[14px]'>
                                        {element.name}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}