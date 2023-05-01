import user from './path/to/user.json';
import data from './path/to/data.json';
import friends from './path/to/friends.json';
import transactions from './path/to/transactions.json';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistic/Statistics';
import { FriendList } from 'components/FriendListItem/FriendListItem';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
