export const Education = () => {
  return (
    <section id='education'>
      <div className='flex flex-row w-full'>
        <div className='flex flex-col text-slate-100 bg-zinc-800/30 border-neutral-800 border py-8 px-6 mx-10 items-center'>
          <p className='font-extrabold gradient-text uppercase text-3xl tracking-wide bg-slate-100 pb-4'>
            EDUCATION
          </p>
          <div className='h-64 w-[600px] bg-slate-900 mb-4' />
          <div className='w-full flex flex-row justify-start pl-2 mt-8'>
            <p className='gradient-text font-extrabold text-lg uppercase'>
              {/* <p className='gradient-text font-medium text-2xl mb-2'> */}
              Courses
            </p>
          </div>
          {/* <div className='flex flex-row items-center text-xl mb-6'></div> */}
          <div className='flex flex-row mt-3 items-start w-full text-start'>
            <div className='flex flex-col pl-2 items-start'>
              <p className='font-bold text-sm leading-tight'>
                Bachelor of Computer Science
              </p>
              <p className='font-normal text-sm leading-tight'>
                American University of Sharjah
              </p>
              <p className='font-normal text-sm leading-tight'>
                Graduating Apr 2025
              </p>
            </div>
          </div>
          <div className='flex flex-row mt-3 items-start w-full'>
            <div className='size-14 rounded-full bg-slate-700 mb-4' />
            <div className='flex flex-col pl-2 items-start'>
              <p className='font-bold text-sm leading-tight'>President</p>
              <p className='font-normal text-sm leading-tight'>
                Open Source Club @ AUS
              </p>
              <p className='font-normal text-sm leading-tight'>
                Sep 2023 - Present
              </p>
            </div>
          </div>
        </div>
        <div className='min-w-[550px] h-[400px] pl-32 mt-16'>
          <div className='flex flex-col w-full h-full text-slate-100 bg-zinc-800/30 border-neutral-800 border pt-6 pb-8 px-4 m-10 items-center'>
            <div className='w-full flex flex-row justify-start pl-2'>
              <p className='gradient-text font-extrabold text-lg uppercase mb-8'>
                {/* <p className='gradient-text font-medium text-2xl mb-2'> */}
                Certifications
              </p>
            </div>
            <div className='flex flex-row mt-3 items-start w-full'>
              <div className='size-14 rounded-full bg-slate-700 mb-4' />
              <div className='flex flex-col pl-2 items-start'>
                <p className='font-bold text-sm leading-tight'>President</p>
                <p className='font-normal text-sm leading-tight'>
                  Open Source Club @ AUS
                </p>
                <p className='font-normal text-sm leading-tight'>
                  Sep 2023 - Present
                </p>
              </div>
            </div>
            <div className='flex flex-row mt-3 items-start w-full'>
              <div className='size-14 rounded-full bg-slate-700 mb-4' />
              <div className='flex flex-col pl-2 items-start'>
                <p className='font-bold text-sm leading-tight'>President</p>
                <p className='font-normal text-sm leading-tight'>
                  Open Source Club @ AUS
                </p>
                <p className='font-normal text-sm leading-tight'>
                  Sep 2023 - Present
                </p>
              </div>
            </div>
            <div className='flex flex-row mt-3 items-start w-full'>
              <div className='size-14 rounded-full bg-slate-700 mb-4' />
              <div className='flex flex-col pl-2 items-start'>
                <p className='font-bold text-sm leading-tight'>President</p>
                <p className='font-normal text-sm leading-tight'>
                  Open Source Club @ AUS
                </p>
                <p className='font-normal text-sm leading-tight'>
                  Sep 2023 - Present
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
