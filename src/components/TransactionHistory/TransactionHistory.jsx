import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';


export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th className={css.tableHeader}>Type</th>
          <th className={css.tableHeader}>Amount</th>
          <th className={css.tableHeader}>Currency</th>
        </tr>
      </thead>

      {items.map(item => (
        <tbody key={item.id} className={css.tableString}>
          <tr>
            <td className={css.tableItem}>{item.type}</td>
            <td className={css.tableItem}>{item.amount}</td>
            <td className={css.tableItem}>{item.currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array,
};
