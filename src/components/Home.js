import React from 'react';

const Home = () => {
    return (
        <div className='px-16 text-white bg-[#000000]'>

            <div className='flex gap-4'>
                <div className='p-16 rounded-2xl bg-[#1F1F1F]'><h1 className='text-2xl'>alvyl</h1></div>
                <div className='p-16 rounded-2xl bg-[#131313]'><p className='text-xl'>Amazing products are comming up everyday but often, they lack right builders to build functional and beautiful products.</p></div>
                <div className='p-16 rounded-2xl bg-[#1F1F1F]'><h1 className='text-2xl'>=</h1></div>
            </div>


            <div className='flex justify-between items-center gap-4 mt-8'>
                <div className='p-16 rounded-2xl bg-[#131313]'><p className='text-xl'>We are a new-age people first tech agency. Your own team of builders.</p></div>
                <div className='p-16 rounded-2xl bg-[#131313]'><h1 className='text-2xl'>Great Products need great builders</h1></div>
            </div>


            <div className='grid grid-cols-4 gap-4 mt-8'>
                <div className='p-16 rounded-2xl bg-[#131313]'><h1 className='text-2xl'>What our builders are capable of</h1></div>
                <div className='p-16 rounded-2xl bg-[#131313]'><p className='text-xl'>Design & Branding</p></div>
                <div className='p-16 rounded-2xl bg-[#131313]'><p className='text-xl'>Mobile & Web App Development</p></div>
                <div className='p-16 rounded-2xl bg-[#131313]'><p className='text-xl'>IoT, Data & Cloud computing</p></div>
            </div>
            
        </div>
    );
};

export default Home;