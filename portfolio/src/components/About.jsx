import Button from './Button';

export default function About() {

    //Tracks Numbers To Be Used For The Professional Journey.
    let number = 0;
    //Defines A List Of Technologies That Are Apart Of The Stack.
    const techStack = [
        {
            name: 'Python',
            type: 'Programming Language',
            image: '/python.svg',

        },
        {
            name: 'Seaborn',
            type: 'Python Library',
            image: '/seaborn.svg',
        },
        {
            name: 'NumPy',
            type: 'Python Library',
            image: '/numpy.svg',
        },
        {
            name: 'Pandas',
            type: 'Python Library',
            image: '/pandas.svg',
        },
        {
            name: 'Figma',
            type: 'Diagramming Tool',
            image: '/figma.svg',
        },
        {
            name: 'SQLite',
            type: 'Database Platform',
            image: '/sqlite.svg',
        },
        {
            name: 'C++',
            type: 'Programming Language',
            image: 'cpp.svg',
        },
        {
            name: 'Java',
            type: 'Programming Language',
            image: '/java.svg',
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

    const goals = [
        {
            icon: '/code.svg',
            goal: 'Deepen Technical Stack',
            description: 'Continue learning and honing my skills in in my stack as well as learning about my position.',
        },
        {
            icon: '/mail.svg',
            goal: 'Expand Portfolio',
            description: 'Continue to work and develop projects that better market my skillset and knowledge.'
        },
        {
            icon: '/person.svg',
            goal: 'Grow Professional Network',
            description: 'Expand, meet, and connect with fellow industry professionals.',
        },
        {
            icon: '/star.svg',
            goal: 'Help Others',
            description: 'I want to use my gained experience to help others reach new heights and realize their potential!'
        }
    ];

    return (
    <section className='w-full flex flex-col items-center justify-center p-(--spacing-m) gap-(--spacing-xxl)'>
        <article className='w-full max-w-[1320px] flex flex-col gap-(--spacing-m)'> 
            <div className='w-full max-w-[1320px] border-b-2 pb-(--spacing-m) border-dashed border-shade'>
                <h2 className='text-beige'>About Me</h2>
            </div>
            <div className='flex flex-col items-center justify-center gap-(--spacing-l) lg:flex-row'>
                <img className='object-cover shadow-(--shadow-main) w-[500px] h-[450px] rounded-(--spacing-xs)' src ='/AD.jpg' alt='A Picture Of Nathan Gordon'/>
                <div className='flex flex-col gap-(--spacing-m) justify-start items-start'>
                    <div className='flex flex-col gap-(--spacing-s)'>
                        <h3 className='text-alt-white'>Hello! I'm Nathan,</h3>
                        <p className='text-alt-black2'>
                            I’ve always been interested in the intersection between data and the real world. 
                            Numbers tell stories, and I thrive on uncovering those narratives to drive meaningful decisions. 
                            Whether it's analyzing trends, optimizing workflows, or building databases that power businesses, I find satisfaction in turning raw data into clear, actionable insights. 
                            My passion lies in making complex information accessible, ensuring that every dataset serves a purpose beyond just numbers on a screen.

                            With a strong foundation in data analysis and database development, I specialize in transforming data into valuable business assets. 
                            From cleaning and structuring data to designing efficient storage solutions, I focus on accuracy, efficiency, and impact. 
                            I enjoy collaborating with teams, solving problems with a data-driven mindset, and continuously learning new tools and techniques to stay ahead in an ever-evolving digital landscape.
                        </p>
                    </div>
                    <Button text={'Download Resume'} link={'https://docs.google.com/document/d/11Bw9728a3QadjtBDpUCDbp_zC1XcOub6/edit?usp=sharing&ouid=114091693065227747461&rtpof=true&sd=true'} />
                </div>
            </div>
        </article>
        <article className='flex flex-col w-full max-w-[1320px] gap-(--spacing-m)'>
            <h2>My Tech Stack</h2>
            <div className='grid gird-cols-1 gap-[2rem] sm:grid-cols-2 lg:grid-cols-4'>
                {techStack.map((item, index) => {
                    return (
                        <div key={index} className='flex gap-(--spacing-s) pt-[1rem] pb-[1rem] pl-[2rem] pr-[2rem] border-2 border-shade rounded-lg items-center hover:scale-[1.05] hover:border-beige transition duration-300 linear'>
                            <img src={item.image} className='w-[2rem] h-[2rem]' />
                            <div className='flex flex-col'>
                                <h4>{item.name}</h4>
                                <p className='' >{item.type}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </article>
        <article className='w-full max-w-[1320px] flex flex-col gap-(--spacing-m)'>
            <h2>My Professional Journey</h2>
            <div className='flex flex-col gap-(--spacing-m)'>
                {jobHistory.map((item, index) => {
                    number++;
                    return (
                        <div key={index} className='flex flex-col justify-between items-start gap-(--spacing-s) border-b-2 pb-(--spacing-m) border-dashed border-shade md:flex-col md:items-start lg:flex-row lg:items-center mgap-(--spacing-l)'>
                            <div className='flex flex-col gap-(--spacing-s) '>
                                <span className='text-[2rem] font-[Poppins] font-semibold'>{`0${number}`}</span>
                                <div className='flex flex-col gap-(--spacing-xs)'>
                                    <h4>{item.position}</h4>
                                    <p className='text-alt-black2'>{item.company} | {item.duration}</p>
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
            <div>
                <h2>Career Goals</h2>
            </div>
            <div className=' w-full grid grid-cols-1 gap-y-(--spacing-m) gap-x-(--spacing-m) md:grid-cols-2 lg:grid-cols-2'>
                {
                    goals.map((item, index) => {
                        return (
                            <div key={index}className='flex flex-col gap-(--spacing-s) border-2 border-shade pt-(--spacing-m) pb-(--spacing-m) pr-(--spacing-m) pl-(--spacing-m) rounded-lg hover:scale-[1.05] hover:border-beige transition duration-300 linear'>
                                <img className='w-[50px] h-[50px]' src={item.icon} />
                                <div className='flex flex-col gap-(--spacing-xs)'>
                                    <h4>{item.goal}</h4>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </article>
    </section>
    )
}