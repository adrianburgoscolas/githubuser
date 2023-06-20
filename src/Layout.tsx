import Logo from './assets/github.svg';

import useLayout from './useLayout';

export default function Layout({children}:{children:React.ReactNode}) {
  const ref = useLayout();

  return (
      <div ref={ref} className='flex flex-col mx-auto max-w-screen sm:max-w-[32rem]'>
        <header className='text-neutral-700'>
          <div 
            className={`
              flex items-center justify-center gap-2 h-32 
              bg-teal-100 mb-4 sm:mt-4 sm:rounded-lg shadow-lg
            `}
          >
            <img src={Logo} width={60} height={60} alt='Logo' />
            <h1 className='text-4xl font-black min-w-[210px]'>GitHub User</h1>
          </div>
          <p 
            className='text-neutral-400 text-center text-sm w-fit m-auto p-4'
          >
            Welcome to Your GitHub Profile Information App!
          </p>
        </header>
        <main className='grow'>
          {children}
        </main>
        <footer className='bg-[#fbccd6] p-4 text-sm text-center'>
          <div className='flex gap-2 w-fit mx-auto'>
            <img src={Logo} width={20} height={20} alt='Logo' />
            <h3 className='text-neutral-700'>Coded by{' '}
            <a 
              href='https://adrianburgoscolas.github.io/portfolio' 
              rel='noopener noreferrer' 
              target='_blank'
              className='underline text-[#007dbe]'
            >
              Adrian Burgos
            </a>
            </h3>
          </div>
          <p className='text-neutral-400 text-xs mt-2'>GitHub Profile Information App!</p>
        </footer>
      </div>
  );
}
