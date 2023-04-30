import css from './FriendListItem.module.css';

export const FriendList = ({friends}) => {
    return <ul className={css.friendList}>
        {friends.map(friend => (<li key={friend.id} className={css.item}>
            <span className={css.status} style={{ backgroundColor: friend.isOnline ? "green" : "red" }}></span>
            <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
            <p className={css.name}>{friend.name}</p>
            </li>))}
    </ul>
    
}