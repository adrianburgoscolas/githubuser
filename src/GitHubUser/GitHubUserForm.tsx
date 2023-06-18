import {MouseEventHandler} from "react";

export default function GitHubUserForm(
  {
    userName, 
    setUserName, 
    handleSubmit,
  }:{
    userName: string,
    setUserName: React.Dispatch<React.SetStateAction<string>>,
    handleSubmit: MouseEventHandler<HTMLButtonElement>,
  }

) {
  return (
    <form className='mx-auto flex justify-center p-4 sm:rounded-lg sm:max-w-[380px]'>
      <div className='flex flex-col gap-2'>
      <label className='w-fit' htmlFor='user'>User name</label>
      <input 
        data-testid='search'
        value={userName}
        onChange={e => setUserName(e.currentTarget.value)}
        autoFocus
        id='user' 
        name='user' 
        type='search' 
        className={`
          border-4 border-neutral-200 p-2 max-w-[380px] rounded-lg 
          outline-offset-1 outline-[#89d0ec] outline-4 focus:outline
        `}
      />
      <button 
        className='bg-[#89d0ec] w-fit py-2 px-3 rounded-lg hover:bg-[#30afd9] active:bg-[#0091c7]'
        onClick={handleSubmit}
      >
        Submit
      </button>
      </div>
    </form>
  );
}
