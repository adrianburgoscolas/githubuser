import GitHubUserCard from "./GitHubUser/GitHubUserCard";
import Spinner from "./GitHubUser/Spinner";
import useGitHubData from "./GitHubUser/Hooks/useGitHubData";
import GitHubUserForm from "./GitHubUser/GitHubUserForm";

export default function GitHubUser() {

  const {error, isLoading, userName, setUserName, handleSubmit, userData, repoList} = useGitHubData();

  return (
    <div className='text-neutral-700'>
      <GitHubUserForm userName={userName} setUserName={setUserName} handleSubmit={handleSubmit} />
      {error && <p>Error</p>}
      {isLoading && <Spinner />}
      {
        (userData && !isLoading) && 
        <GitHubUserCard 
          name={userData.name} 
          bio={userData.bio} 
          avatar={userData.avatar_url} 
          followers={userData.followers}
          repos={userData.public_repos}
          repoList={repoList}
        />
      }
    </div>
  );
}
