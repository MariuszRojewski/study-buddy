import React from 'react';
import { users } from 'data/users';
import UsersListItem from 'components/organisms/UsersListItem/UsersListItem';
import { Wrapper, StyledList } from './UsersList.styles';

const UserList = () => (
  <Wrapper>
    <StyledList>
      {users.map((userData, index) => (
        <UsersListItem index={index} userData={userData} />
      ))}
    </StyledList>
  </Wrapper>
);

export default UserList;
