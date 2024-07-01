export const Projects = () => {
  return (
    <section id='projects' className='flex flex-col justify-start items-center'>
      <p className='font-extrabold gradient-text uppercase text-3xl tracking-wide bg-slate-100 pt-10 pb-6'>
        Projects
      </p>
      <div className='grid grid-cols-4 w-full h-full'>
        {[
          'hello',
          'there',
          'how',
          'are',
          'you',
          'doing',
          'right',
          'now',
          '2hello',
          '2there',
          '2how',
          '2are',
        ].map((e) => (
          <div
            key={e}
            className='flex flex-col text-slate-100 bg-zinc-800/30 border-neutral-800 border rounded-xl py-12 px-6 m-4 items-center'
          >
            <p>Hello there</p>
            <p>
              {e} {e} {e} {e} {e} {e} {e} {e} {e} {e}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
