import css from './Statistics.module.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


export const Statistics = props => {
    return props.title ? <section className={css.statistics}>
        <h2 className={css.title}>{props.title}</h2>

  <ul className={css.statList}>
    <li className={css.item} style={{backgroundColor: getRandomHexColor()}}>
      <span className={css.label}>{props.stats[0].label}</span>
      <span className={css.percentage}>{props.stats[0].percentage}%</span>
    </li>
    <li className={css.item} style={{backgroundColor: getRandomHexColor()}}>
      <span className={css.label}>{props.stats[1].label}</span>
      <span className={css.percentage}>{props.stats[1].percentage}%</span>
    </li>
    <li className={css.item} style={{backgroundColor: getRandomHexColor()}}>
      <span className={css.label}>{props.stats[2].label}</span>
      <span className={css.percentage}>{props.stats[2].percentage}%</span>
    </li>
    <li className={css.item} style={{backgroundColor: getRandomHexColor()}}>
      <span className={css.label}>{props.stats[3].label}</span>
      <span className={css.percentage}>{props.stats[3].percentage}%</span>
    </li>
  </ul>
    </section>
        :
        <section className={css.statistics}>

  <ul className={css.statList}>
    <li className={css.item} style={{backgroundColor: getRandomHexColor()}}>
      <span className={css.label}>{props.stats[0].label}</span>
      <span className={css.percentage}>{props.stats[0].percentage}%</span>
    </li>
    <li className={css.item} style={{backgroundColor: getRandomHexColor()}}>
      <span className={css.label}>{props.stats[1].label}</span>
      <span className={css.percentage}>{props.stats[1].percentage}%</span>
    </li>
    <li className={css.item} style={{backgroundColor: getRandomHexColor()}}>
      <span className={css.label}>{props.stats[4].label}</span>
      <span className={css.percentage}>{props.stats[4].percentage}%</span>
    </li>
    <li className={css.item} style={{backgroundColor: getRandomHexColor()}}>
      <span className={css.label}>{props.stats[3].label}</span>
      <span className={css.percentage}>{props.stats[3].percentage}%</span>
    </li>
  </ul>
    </section>
        
}