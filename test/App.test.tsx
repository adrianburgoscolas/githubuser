import { afterEach, describe, test, expect } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';

import GitHubUserCard from '../src/GitHubUser/GitHubUserCard';
import GitHubUserForm from '../src/GitHubUser/GitHubUserForm';
import Avatar from './profile.jpg';

describe('GitHubUser Component Unit Test', () => {
  describe('GitHubUserCard Component Unit Test', () => {
    afterEach(() => {
      cleanup();
    });

    test('GitHubUserCard should render the avatar image', () =>{
      render(
        <GitHubUserCard 
          avatar={Avatar as string} 
          name={''}
          bio={''}
          followers={0}
          repos={0}
          repoList={[]}
        />
      )

      expect(screen.getByTestId('avatar')).toBeDefined();
    });

    test(`GitHubUserCard should have the user name as avatar image's alt`, () =>{
      render(
        <GitHubUserCard 
          avatar={Avatar as string} 
          name={'Jane Vim'}
          bio={''}
          followers={0}
          repos={0}
          repoList={[]}
        />
      )

      expect(screen.getByAltText('Jane Vim')).toBeDefined();
    });

    test('GitHubUserCard should display the user name', () =>{
      render(
        <GitHubUserCard 
          avatar={Avatar as string} 
          name={'Jhon Doe'}
          bio={''}
          followers={0}
          repos={0}
          repoList={[]}
        />
      )

      expect(screen.getByText('Jhon Doe')).toBeDefined();
    });

    test(`GitHubUserCard shouldn't have the "Bio" text if user doesn't have a bio`, () => {
      render(
        <GitHubUserCard 
          avatar={Avatar as string} 
          name={''}
          bio={''}
          followers={0}
          repos={0}
          repoList={[]}
        />
      )

      expect(screen.queryByText('Bio')).toBeNull();
    });

    test(`GitHubUserCard shouldn't have a bio content if user doesn't have a bio`, () => {
      render(
        <GitHubUserCard 
          avatar={Avatar as string} 
          name={''}
          bio={''}
          followers={0}
          repos={0}
          repoList={[]}
        />
      )

      expect(screen.queryByTestId('bio-content')).toBeNull();
    });

    test(`GitHubUserCard should have the "Bio" text if user has a bio`, () => {
      render(
        <GitHubUserCard 
          avatar={Avatar as string} 
          name={''}
          bio={'This is my bio'}
          followers={0}
          repos={0}
          repoList={[]}
        />
      )

      expect(screen.getByText('Bio')).toBeDefined();
    });

    test(`GitHubUserCard should have a bio content if user has a bio`, () => {
      render(
        <GitHubUserCard 
          avatar={Avatar as string} 
          name={''}
          bio={'This is my great bio'}
          followers={0}
          repos={0}
          repoList={[]}
        />
      )

      expect(screen.getByText('This is my great bio')).toBeDefined();
    });

    test('GitHubUserCard should show "No Followers" if user has no followers', () => {
      render(
        <GitHubUserCard 
          avatar={Avatar as string} 
          name={''}
          bio={''}
          followers={0}
          repos={0}
          repoList={[]}
        />
      )

      expect(screen.getByText('No Followers')).toBeDefined();
    });

    test(`GitHubUserCard should show the correct number of the user's followers`, () => {
      render(
        <GitHubUserCard 
          avatar={Avatar as string} 
          name={''}
          bio={''}
          followers={21}
          repos={0}
          repoList={[]}
        />
      )

      expect(screen.getByText('21 Followers')).toBeDefined();
    });

    test(`GitHubUserCard should show "1 Follower" if user has just one follower`, () => {
      render(
        <GitHubUserCard 
          avatar={Avatar as string} 
          name={''}
          bio={''}
          followers={1}
          repos={0}
          repoList={[]}
        />
      )

      expect(screen.getByText('1 Follower')).toBeDefined();
    });

    test('GitHubUserCard should show "No Repositories" if user has no repos', () => {
      render(
        <GitHubUserCard 
          avatar={Avatar as string} 
          name={''}
          bio={''}
          followers={0}
          repos={0}
          repoList={[]}
        />
      )

      expect(screen.getByText('No Repositories')).toBeDefined();
    });

    test(`GitHubUserCard should show the correct number of the user's repositories`, () => {
      render(
        <GitHubUserCard 
          avatar={Avatar as string} 
          name={''}
          bio={''}
          followers={0}
          repos={101}
          repoList={[]}
        />
      )

      expect(screen.getByText('101 Repositories')).toBeDefined();
    });

    test(`GitHubUserCard should show "1 Repository" if user has just one repository`, () => {
      render(
        <GitHubUserCard 
          avatar={Avatar as string} 
          name={''}
          bio={''}
          followers={0}
          repos={1}
          repoList={[]}
        />
      )

      expect(screen.getByText('1 Repository')).toBeDefined();
    });

    test('GitHubUserCard should have "0 repos" text if user has no repos', () => {
      render(
        <GitHubUserCard 
          avatar={Avatar as string} 
          name={''}
          bio={''}
          followers={0}
          repos={0}
          repoList={[]}
        />
      )

      expect(screen.getByText('0 repos')).toBeDefined();
    });

    test('GitHubUserCard should have no repo list element if user has no repos', () => {
      render(
        <GitHubUserCard 
          avatar={Avatar as string} 
          name={''}
          bio={''}
          followers={0}
          repos={0}
          repoList={[]}
        />
      )

      expect(screen.queryByTestId('repo')).toBeNull();
    });

    test('GitHubUserCard should have "1 repo" text if user has one repo', () => {
      render(
        <GitHubUserCard 
          avatar={Avatar as string} 
          name={''}
          bio={''}
          followers={0}
          repos={1}
          repoList={[{name:'firt repo', created:'2023-06-18', description:'my first github repo'}]}
        />
      )

      expect(screen.getByText('1 repo')).toBeDefined();
    });

    test('GitHubUserCard should have one repo element if user has one repo', () => {
      render(
        <GitHubUserCard 
          avatar={Avatar as string} 
          name={''}
          bio={''}
          followers={0}
          repos={0}
          repoList={[{name:'firt repo', created:'2023-06-18', description:'my first github repo'}]}
        />
      )

      expect(screen.queryAllByTestId('repo')).toHaveLength(1);
    });

    test('GitHubUserCard should have "Last 3 repos" text if user has three repos', () => {
      render(
        <GitHubUserCard 
          avatar={Avatar as string} 
          name={''}
          bio={''}
          followers={0}
          repos={1}
          repoList={[
            {name:'firt repo', created:'2023-06-18', description:'my first github repo'},
            {name:'second repo', created:'2023-06-18', description:'my second github repo'},
            {name:'third repo', created:'2023-06-18', description:'my third github repo'},
          ]}
        />
      )

      expect(screen.getByText('Last 3 repos')).toBeDefined();
    });

    test('GitHubUserCard should have "Last 10 repos" text if user has 10 or more repos', () => {
      render(
        <GitHubUserCard 
          avatar={Avatar as string} 
          name={''}
          bio={''}
          followers={0}
          repos={1}
          repoList={[
            {name:'firt repo', created:'2023-06-18', description:'my first github repo'},
            {name:'second repo', created:'2023-06-18', description:'my second github repo'},
            {name:'third repo', created:'2023-06-18', description:'my third github repo'},
            {name:'firt repo', created:'2023-06-18', description:'my first github repo'},
            {name:'second repo', created:'2023-06-18', description:'my second github repo'},
            {name:'third repo', created:'2023-06-18', description:'my third github repo'},
            {name:'firt repo', created:'2023-06-18', description:'my first github repo'},
            {name:'second repo', created:'2023-06-18', description:'my second github repo'},
            {name:'third repo', created:'2023-06-18', description:'my third github repo'},
            {name:'firt repo', created:'2023-06-18', description:'my first github repo'},
            {name:'second repo', created:'2023-06-18', description:'my second github repo'},
            {name:'third repo', created:'2023-06-18', description:'my third github repo'},
          ]}
        />
      )

      expect(screen.getByText('Last 10 repos')).toBeDefined();
    });

    test('GitHubUserCard should have three repos elements if user has three repos', () => {
      render(
        <GitHubUserCard 
          avatar={Avatar as string} 
          name={''}
          bio={''}
          followers={0}
          repos={0}
          repoList={[
            {name:'firt repo', created:'2023-06-18', description:'my first github repo'},
            {name:'second repo', created:'2023-06-18', description:'my second github repo'},
            {name:'third repo', created:'2023-06-18', description:'my third github repo'},
          ]}
        />
      )

      expect(screen.queryAllByTestId('repo')).toHaveLength(3);
    });

    test('GitHubUserCard should have 10 repos elements if user has 10 or more repos', () => {
      render(
        <GitHubUserCard 
          avatar={Avatar as string} 
          name={''}
          bio={''}
          followers={0}
          repos={0}
          repoList={[
            {name:'firt repo', created:'2023-06-18', description:'my first github repo'},
            {name:'second repo', created:'2023-06-18', description:'my second github repo'},
            {name:'third repo', created:'2023-06-18', description:'my third github repo'},
            {name:'firt repo', created:'2023-06-18', description:'my first github repo'},
            {name:'second repo', created:'2023-06-18', description:'my second github repo'},
            {name:'third repo', created:'2023-06-18', description:'my third github repo'},
            {name:'firt repo', created:'2023-06-18', description:'my first github repo'},
            {name:'second repo', created:'2023-06-18', description:'my second github repo'},
            {name:'third repo', created:'2023-06-18', description:'my third github repo'},
            {name:'firt repo', created:'2023-06-18', description:'my first github repo'},
            {name:'second repo', created:'2023-06-18', description:'my second github repo'},
            {name:'third repo', created:'2023-06-18', description:'my third github repo'},
          ]}
        />
      )

      expect(screen.queryAllByTestId('repo')).toHaveLength(10);
    });
  });

  describe('GitHubUserForm Component Unit Test', () => {
    afterEach(() => {
      cleanup();
    });

    test('GitHubUserForm should have "User name" label', () => {
      render(
        <GitHubUserForm 
          userName={''}
          setUserName={() => {}}
          handleSubmit={() => {}}
        />
      )

      expect(screen.getByLabelText('User name')).toBeDefined();
    });

    test('GitHubUserForm should have a "Submit" button', () => {
      render(
        <GitHubUserForm 
          userName={''}
          setUserName={() => {}}
          handleSubmit={() => {}}
        />
      )

      expect(screen.getByText('Submit')).toBeDefined();
    });

    test('GitHubUserFrom should let to write to the search input', () => {
      render(
        <GitHubUserForm 
          userName={'Jhon'}
          setUserName={() => {}}
          handleSubmit={() => {}}
        />
      )

      expect(screen.getByDisplayValue('Jhon')).toBeDefined();
    });
  });
});
