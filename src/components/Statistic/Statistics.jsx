import css from './Statistics.module.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


export const Statistics = props => {
  return <section className={css.statistics}>
    {props.title != null && <h2 className={css.title}>{props.title}</h2>}

    <ul className={css.statList}>
      {props.stats.map(stat => (<li key={stat.id} className={css.item} style={{backgroundColor: getRandomHexColor()}}>
      <span className={css.label}>{stat.label}</span>
      <span className={css.percentage}>{stat.percentage}%</span>
    </li>))}
  </ul>
    </section>
        
}