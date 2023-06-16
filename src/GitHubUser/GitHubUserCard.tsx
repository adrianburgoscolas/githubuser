export default function GitHubUserCard(
  {
    avatar, 
    name, 
    bio,
    followers,
    repos,
    repoList,
  }:{
    avatar: string,
    name: string,
    bio: string,
    followers: number,
    repos: number,
    repoList: {[index:string]:string}[],
  }) {
  return (
    <section className='sm:mt-8 px-4 text-neutral-700'>
      <header className='p-8 flex flex-col justify-center items-center shadow-lg rounded-lg bg-[#ccd6fb]'>
        <img className='rounded-full' width={100} height={100} src={avatar} alt={name} />
        <h2 className='text-xl font-black'>{name}</h2>
        {bio && <p className='pt-4 font-black'>Bio</p>}
        <p className='text-justify'>{bio}</p>
        <div className='mt-4 text-sm text-neutral-400 flex justify-between w-full'>
          <p>{followers === 0?'No':followers} Follower{followers === 1?'':'s'} </p>
          <p>{repos} Repositorie{repos === 1?'':'s'}</p>
        </div>
      </header>
      <p className='text-center text-lg font-bold mt-8 -mb-4'>
        {repoList.slice(0, 10).length <= 1?'':'Last'} {`${repoList.slice(0, 10).length}`} repo{repoList.slice(0, 10).length === 1?'':'s'}
      </p>
      <div className='divide-y'>
        {repoList.map((obj:any, i:number) => (
          <div key={i} className='py-8'>
            <div className='flex justify-between mb-2 font-semibold'>
              <p>{obj.name}</p>
              <p>{obj.created.split('T')[0]}</p>
            </div>
          <p className='text-justify text-neutral-400 text-sm'>{obj.description}</p>
          </div>
        )).slice(0, 10)}
      </div>
    </section>
  );
}
