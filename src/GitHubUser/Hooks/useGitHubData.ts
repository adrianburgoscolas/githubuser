import { useState } from 'react';
export default function useGitHubData() {
  const [userData, setUserData] = useState(null);
  const [userName, setUserName] = useState('');
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [repoList, setRepoList] = useState([]);

  async function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
    setIsLoading(state => !state);
    setError(false);
    event.preventDefault();
    //fetch user
    const userRes = await fetch(`https://api.github.com/users/${userName}`);
    if(!userRes.ok) {
      setError(true);
    }
    const data = await userRes.json();
    setUserData(data);
    const repoRes = await fetch(`https://api.github.com/users/${userName}/repos?sort=created`);
    const repos = await repoRes.json();
    setRepoList(repos.map((obj:any) => {return{name:obj.name, created:obj.created_at, description:obj.description}}));
    setUserName('');
    setIsLoading(state => !state);
  }

  return {
    userData,
    userName,
    setUserName,
    handleSubmit,
    isLoading,
    error,
    repoList,
  }
}
