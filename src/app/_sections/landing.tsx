import { FaLinkedin, FaGithub, FaChevronDown } from 'react-icons/fa'
import { Socials } from '../_components/about/socials'
import { SectionLink } from '../_components/about/section_link'

export const Landing = () => {
  const scrollToView = (id: string) => (e: any) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    })
  }
  return (
    <section
      id='landing'
      className='flex min-h-screen flex-col items-center justify-between px-10 py-16 md:p-24'
    >
      <Socials />
      <div className='flex flex-col justify-content items-center'>
        <div className='gradient-text pb-6 lg:pb-0'>
          <h1 className='text-5xl md:text-7xl lg:text-8xl text-slate-800 font-extrabold lg:leading-loose'>
            TAUFIQ SYED
          </h1>
        </div>
        <h1 className='text-xs md:text-xl text-slate-50 tracking-wider font-semibold'>
          AI Engineering &nbsp;&#8226; &nbsp;Web/Mobile Dev &nbsp;&#8226;
          &nbsp;UI/UX Design
        </h1>
        {/* <div className='h-14 md:h-4' /> */}
      </div>
      <div className='mt-8 md:mt-0 mb-0 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left'>
        <SectionLink
          onClick={scrollToView('about')}
          title={'About Me'}
          description={
            'Find in-depth information about Next.js features and API.'
          }
        />
        <SectionLink
          onClick={scrollToView('projects')}
          title={'Projects'}
          description={
            'Find in-depth information about Next.js features and API.'
          }
        />
        <SectionLink
          onClick={scrollToView('competitions')}
          title={'Competitions'}
          description={
            'Find in-depth information about Next.js features and API.'
          }
        />
        <SectionLink
          onClick={scrollToView('education')}
          title={'Education'}
          description={
            'Find in-depth information about Next.js features and API.'
          }
        />
      </div>
      {/* <div className='w-full pt-10 flex flex-col items-center'> */}
      <div className='relative w-full mt-5 flex flex-col items-center'>
        <FaChevronDown size={16} />
      </div>
      {/* <div className='absolute w-full bottom-12 flex flex-col items-center'>
        <FaChevronDown size={16} />
      </div> */}
    </section>
  )
}
