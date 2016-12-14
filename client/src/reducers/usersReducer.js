/** Users list
*/
const dummyUsers = [
  { _id: 0, email: 'miss@peregrine.com', userName: 'Miss Peregrine', },
  { _id: 1, email: 'peter@pan.com', userName: 'Peter Pan', },
  { _id: 2, email: 'harry@potter.com', userName: 'Harry Potter', },
  { _id: 3, email: 'bilbo@beggins.com', userName: 'Bilbo Beggins', },
];

export default function(state = [], action) {
  return dummyUsers;
}
