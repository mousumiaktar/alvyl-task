import React, { useEffect, useState } from 'react';

const App = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', (event) => {
            setScrollY(() => window.scrollY);
        })
    }, []);

    return (
        <div className='bg-[#000000] text-white'>
            <div className='md:px-16 h-[150vh] max-w-7xl mx-auto'>
                <h1 className='text-6xl text-center mb-12'>Alvyl Task</h1>
                <div className='grid grid-cols-[200px,auto,200px] gap-4'>
                    <div className='p-16 rounded-2xl bg-[#1F1F1F] flex items-center justify-center'>
                        <h1 className='text-2xl'>alvyl</h1>
                    </div>
                    <div className={`p-16 rounded-2xl bg-[#131313] hide ${scrollY >= 30 && "slide-in"}`}>
                        <p className='text-xl'>Amazing products are comming up everyday but often, they lack right builders to build functional and beautiful products.</p>
                    </div>
                    <div className='p-16 rounded-2xl bg-[#1F1F1F] flex items-center justify-center'>
                        <h1 className='text-2xl'>=</h1>
                    </div>
                </div>
                <div className='grid grid-cols-[60%,40%] gap-4 mt-8'>
                    <div className={`p-16 rounded-2xl bg-[#131313] hide ${scrollY >= 180 && "slide-in"}`}>
                        <p className='text-xl'>We are a new-age people first tech agency. Your own team of builders.</p>
                    </div>
                    <div className={`p-16 rounded-2xl bg-[#131313] hide ${scrollY >= 30 && "slide-in"}`}>
                        <h1 className='text-2xl'>Great Products need great builders</h1>
                    </div>
                </div>
                <div className={`grid grid-cols-4 gap-4 mt-8 hide ${scrollY >= 250 && "slide-in"}`}>
                    <div className='p-16 rounded-2xl bg-[#131313]'>
                        <h1 className='text-2xl'>What our builders are capable of</h1>
                    </div>
                    <div className='p-16 rounded-2xl bg-[#131313]'>
                        <p className='text-xl'>Design & Branding</p>
                    </div>
                    <div className='p-16 rounded-2xl bg-[#131313]'>
                        <p className='text-xl'>Mobile & Web App Development</p>
                    </div>
                    <div className='p-16 rounded-2xl bg-[#131313]'>
                        <p className='text-xl'>IoT, Data & Cloud computing</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;