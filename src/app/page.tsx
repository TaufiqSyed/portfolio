import Image from 'next/image'
import { MdDownload } from 'react-icons/md'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Home() {
  return (
    <div className='bg'>
      <section
        id='landing'
        className='flex min-h-screen flex-col items-center justify-between px-10 py-24 md:p-24'
      >
        <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
          <button className='fixed  text-md left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>
            <MdDownload size={20} className='mr-2' />
            <p>Download my resume here</p>
            <code className='font-mono font-bold'></code>
          </button>
          <div className='flex h-16 md:h-24 w-full items-end justify-center from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none text-2xl md:text-4xl'>
            <a
              className='pointer-events-auto flex place-items-center gap-2 p-8 lg:p-0'
              href='https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedin
              // size={36}
              />
            </a>
            <div className='w-4' />
            <a
              className='pointer-events-auto flex place-items-center gap-2 p-8 lg:p-0'
              href='https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaGithub
              // size={36}
              />
            </a>
          </div>
        </div>

        {/* <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]"> */}
        {/* <Image
          className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
          src='/next.svg'
          alt='Next.js Logo'
          width={180}
          height={37}
          priority
        /> */}
        <div className='flex flex-col justify-content items-center'>
          {/* <h1 className='text-8xl text-slate-800 gradient-text font-extrabold font-line leading-relaxed'>
          Taufiq Syed
        </h1>
        <h1 className='text-2xl text-slate-50'>
          AI Engineering &nbsp;&#8226; &nbsp;Web/Mobile Dev &nbsp;&#8226;
          &nbsp;UI/UX Design
        </h1> */}
          <div className='gradient-text pb-6 lg:pb-0'>
            <h1 className='text-4xl md:text-7xl lg:text-8xl text-slate-800 font-extrabold lg:leading-loose'>
              Taufiq Syed
            </h1>
          </div>
          <h1 className='text-xs md:text-xl text-slate-50 tracking-wider font-semibold'>
            AI Engineering &nbsp;&#8226; &nbsp;Web/Mobile Dev &nbsp;&#8226;
            &nbsp;UI/UX Design
          </h1>
          <div className='h-4' />
        </div>
        {/* </div> */}

        <div className='mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left'>
          <a
            href='http://localhost:3000/#about'
            className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
            rel='noopener noreferrer'
          >
            <h2 className='mb-3 text-2xl font-semibold gradient-text'>
              About Me{' '}
              <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
                &rarr;
              </span>
            </h2>
            <p className='m-0 max-w-[30ch] text-sm opacity-50'>
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href='http://localhost:3000/#about'
            className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
            rel='noopener noreferrer'
          >
            <h2 className='mb-3 text-2xl font-semibold gradient-text'>
              Projects{' '}
              <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
                &rarr;
              </span>
            </h2>
            <p className='m-0 max-w-[30ch] text-sm opacity-50'>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href='http://localhost:3000/#competitions'
            className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
            rel='noopener noreferrer'
          >
            <h2 className='mb-3 text-2xl font-semibold gradient-text'>
              Competitions{' '}
              <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
                &rarr;
              </span>
            </h2>
            <p className='m-0 max-w-[30ch] text-sm opacity-50'>
              Explore starter templates for Next.js.
            </p>
          </a>

          <a
            href='http://localhost:3000/#education'
            className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
            rel='noopener noreferrer'
          >
            <h2 className='mb-3 text-2xl font-semibold gradient-text'>
              Education{' '}
              <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
                &rarr;
              </span>
            </h2>
            <p className='m-0 max-w-[30ch] text-balance text-sm opacity-50'>
              Instantly deploy your Next.js site to a shareable URL with Vercel.
            </p>
          </a>
        </div>
      </section>
      <section id='about'>
        <h1>Welcome To My Site</h1>
        <p className='lead'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi,
          quis!
        </p>
      </section>
      <section id='projects'>
        <h1>About</h1>
        <p className='lead'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi,
          quis!
        </p>
      </section>
      <section id='competitions'>
        <h1>Contact</h1>
        <p className='lead'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi,
          quis!
        </p>
      </section>
      <section id='education'>
        <h1>Contact</h1>
        <p className='lead'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi,
          quis!
        </p>
      </section>
    </div>
  )
}
