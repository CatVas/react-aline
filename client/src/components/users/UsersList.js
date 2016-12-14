import { connect } from 'react-redux';
import React from 'react';

import UsersListItem from './UsersListItem';


const UsersList = props => {
  const { users } = props;

  const usersList = users.map(user => {

    return (
      <UsersListItem
        {...user}
        fullName={user.userName}
        key={user._id}
        number={user._id + 1}
      />
    );
  });

  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Full Name</th>
          <th>Email</th>
        </tr>
      </thead>

      <tbody>
        {usersList}
      </tbody>
    </table>
  );
};

function mapStateToProps({ users }) {
  return { users };
}

export default connect(mapStateToProps)(UsersList);
