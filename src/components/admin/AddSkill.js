import React, { PureComponent } from 'react'
import styles from '../../styles/admin/AddSkill.module.scss';

export default class AddSkill extends PureComponent {
  state ={name : ''}
  createSkill = () => {
    const {name} = this.state
    const { onCreate, category ,onSuccess} = this.props
    onCreate({ values:{name,category ,percents: 0}, 
      onSuccess: () => {
        if(typeof onSuccess === 'function') {
          onSuccess(category, name)
        }
        this.setState({name: ''})
      }})
  }
  onChangeHandler = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  render() {
    const {disabled} = this.props
    const {name} = this.state
    return (
      <div className={styles['addSkill']}>
        <button onClick ={this.createSkill} disabled={disabled} className={styles['button']}>Добавить новый</button>
        <input name='name' value={name} onChange={this.onChangeHandler} className={styles['addSkill__input']}/>
      </div>
    )
  }
}
