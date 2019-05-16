import React, { PureComponent } from 'react'
import styles from '../../styles/admin/AdminSkillItem.module.scss';


export default class AdminSkillItem extends PureComponent {
  _onDelete = () => {
    const {item, onDelete} = this.props
    onDelete(item['_id'])
  }
  _onChange = (e) => {
    const {onChange, item} = this.props;
    onChange(e.target.value, item.category, item.name)
  }
  render() {
      const {item, value} = this.props
    return (
      <tr >
        <td className={styles.title}>{item.name}</td>
        <td>
            <input onChange={this._onChange} className={styles['input']} value={value}/>
        </td>
        <td>%</td>
        <td>
             <button onClick={this._onDelete} className={styles['button']}>Удалить</button>
        </td>
      </tr>
    )
  }
}
