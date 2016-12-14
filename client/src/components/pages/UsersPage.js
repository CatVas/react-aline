import React from 'react';

import UsersList from '../users/UsersList';


const UsersPage = () => (
  <section className="userspage page">
    <p className="text-center">The secret list is available to registered users only!</p>

    <UsersList/>
  </section>
);

export default UsersPage;
