/** === user item ===
 * @param {String} _id - unique users identifier;
 * @param {String} email - users email;
 * @param {String} fullName - full users name;
 * @param {String} number - ordered number;
*/

import React from 'react';

const UsersListItem = ({ _id, email, fullName, number }) => (
  <tr>
    <td>{number}</td>
    <td>{fullName}</td>
    <td>{email}</td>
  </tr>
);

export default UsersListItem;
