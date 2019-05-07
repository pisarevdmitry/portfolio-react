import React, { PureComponent } from 'react'
import {connect} from 'react-redux';
import {getLoaded, loadSkills, getSkills} from '../../modules/skills';
import styles from '../../styles/Skills.module.scss'
import SkillItem from './SkillItem'
 class Skills extends PureComponent {
  
   componentDidMount() {
    const {isLoaded, loadSkills} = this.props;
    if(!isLoaded) {
      loadSkills()
    }
   }
   

   renderSkills = () => {
    const {skills} = this.props;
    return Object.entries(skills).map(([cat, items]) =>{
      return(
        <li key={cat} className={styles["skills-list__item"]}>
          <div className={styles["skills-row"]}>
            <div className={styles["skills-row__title"]}>{cat}</div>
            <ul className={styles["skills-row__list"]}>
                {this.renderSkillsItems(items)}
            </ul>
          </div>
        </li>
      )
    })
   }
   renderSkillsItems = (skills) => {
     return skills.map(skill => (
       <li key={skill['_id']} className={styles["skills-row__item"]}>
          <SkillItem skill={skill}/>
       </li>
     ))
   }

  render() {
    const {isLoaded} = this.props;
    if(!isLoaded) {
      return null
    }

    return (
      <ul className={styles['skills-list']} ref={this.skillsBlock}>
          {this.renderSkills()}
      </ul>
    )
  }
}

const mapStateToProps = (state) => ({
    isLoaded: getLoaded(state),
    skills: getSkills(state) 
}) 

export default connect(mapStateToProps, {loadSkills})(Skills)