import { useEffect } from 'react';

export default function Work() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <section className='flex flex-col items-center pt-(--spacing-l) pb-(--spacing-l) px-(--spacing-s)  md:px-(--spacing-m) grow'>
            <article className='w-full flex flex-col max-w-[82.5rem] gap-(--spacing-m)'>
                <div className='w-full max-w-[1320px] border-b-2 pb-(--spacing-m) border-dashed border-shade'>
                    <h2 className='text-beige'>Recent Projects</h2>
                </div>
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
                                <span>Frontend Website</span>
                                <span className='text-alt-black2'>JavaScript | HTML | CSS</span>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}