import React from 'react'

const Exercise = () => {

    const data = [
        {
            id:1,
            name: 'Prsa',
            time: '25 min',
            ex1: 'Benc',
            ex2: 'Kosi benc',
            ex3: 'Propadanja',
            ex4: 'Razvlacenja'
        },
        {
            id:2,
            name: 'Triceps',
            time: '25 min',
            ex1: 'Razvlacenja 1',
            ex2: 'Razvlacenja 2',
            ex3: 'Bucice',
            ex4: 'Kosa klupa'
        },
        {
            id:3,
            name: 'Biceps',
            time: '25 min',
            ex1: 'Bucice',
            ex2: 'Sajla',
            ex3: 'Z sipka',
            ex4: 'Sipka'
        },
        {
            id:4,
            name: 'Noge',
            time: '25 min',
            ex1: 'Cucanj',
            ex2: 'Iskorak',
            ex3: 'Sut',
            ex4: 'Listovi'
        },
        {
            id:4,
            name: 'Stomak',
            time: '20 min',
            ex1: 'Trbusnjaci 1',
            ex2: 'Trbusnjaci 2',
            ex3: 'Trbusnjaci 3',
            ex4: 'Trbusnjaci 4'
        },
        {
            id:5,
            name: 'Ledja',
            time: '25 min',
            ex1: 'Zgibovi',
            ex2: 'Mrtvo dizanje',
            ex3: 'Motorka',
            ex4: 'Vuca'
        },
   
    ]

  return (
    <div name='excersise' className='w-full h-auto bg-gradient-to-b from-white to-black pb-10'>
        
        <div className='py-10 pl-10'>
            <h1 className='text-4xl font-extrabold drop-shadow-sm text-black'>Vjezbe</h1>
            <h1 className='pt-5 text-2xl text-black'>U ovom odjeljku mozete da vidite informacije o osnovnim vjezbama.</h1>
        </div>

        <div className='grid md:grid-cols-3 grid-cols-0 w-full h-auto px-7 md:gap-8 pb-10'> 
        {
        data.map(({id,name,time,ex1,ex2,ex3,ex4})=>(
            <div key={id} className='p-3  mt-3 md:mt-0 bg-lightGray w-full rounded-3xl h-96 flex flex-col border-white font-bold border-x-8 border-y-8 justify-center items-center shadow-md'>
                <h1 className='text-red text-3xl py-8'>{name}</h1>
                <h3 className='pt-3'>{time}</h3>
                <h3 className='pt-3'>{ex1}</h3>
                <h3 className='pt-3'>{ex2}</h3>
                <h3 className='pt-3'>{ex3}</h3>
                <h3 className='pt-3'>{ex4}</h3>
            </div>
        ))
        }
        </div>
        
    </div>
  )
}

export default Exercise