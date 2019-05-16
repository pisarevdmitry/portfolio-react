import React, { PureComponent } from "react";
import { connect } from "react-redux";
import produce from "immer";
import {
  getLoaded,
  loadSkills,
  getSkills,
  getRequestProcessing,
  addSkillRequest,
  deleteSkillRequest,
  updateSkillsRequest
} from "../../modules/skills";
import styles from "../../styles/admin/SkillsBlock.module.scss";
import buttonStyles from "../../styles/admin/Button.module.scss";
import AdminSkillItem from "./AdminSkillItem";
import AddSkill from "./AddSkill";

class SkillsBlock extends PureComponent {
  state = { skills: null };
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.skills && !prevState.skills) {
      const state = Object.entries(nextProps.skills).reduce(
        (acc, [cat, values]) => {
          acc[cat] = values.reduce((innerAcc, skill) => {
            innerAcc[skill.name] = skill.percents;
            return innerAcc;
          }, {});
          return acc;
        },
        {}
      );
      return { skills: state };
    } else {
      return null;
    }
  }
  componentDidMount() {
    const { isLoaded, loadSkills } = this.props;
    if (!isLoaded) {
      loadSkills();
    }
  }
  onSuccessCreate = (category, name) => {
    console.log(this.state);
    this.setState(
      produce(this.state, draft => {
        draft.skills[category][name] = 0;
      })
    );
  };
  renderSkills = (skills, cat) => {
    const { deleteSkillRequest } = this.props;
    const { skills: stateSkills } = this.state;
    return skills.map(skill => (
      <AdminSkillItem
        onChange={this.onChangeSkill}
        value={stateSkills[cat][skill.name]}
        onDelete={deleteSkillRequest}
        key={skill["_id"]}
        item={skill}
      />
    ));
  };
  onChangeSkill = (value, cat, name) => {
    this.setState(produce(this.state, draft => {
      draft.skills[cat][name] = value;
    }));
  };
  renderSkillCategory = () => {
    const { skills, requestProcessing, addSkillRequest } = this.props;
    return Object.entries(skills).map(([category, skillArr]) => {
      return (
        <div key={category} className={styles["category-container"]}>
          <h4 className={styles["category-title"]}>{category}</h4>
          <table>
            <tbody>{this.renderSkills(skillArr, category)}</tbody>
          </table>
          <AddSkill
            onCreate={addSkillRequest}
            disabled={requestProcessing}
            category={category}
            onSuccess={this.onSuccessCreate}
          />
        </div>
      );
    });
  };
  updateSkills = () => {
    const {updateSkillsRequest} = this.props
    updateSkillsRequest(this.state.skills)
  }
  render() {
    const { skills, requestProcessing } = this.props;
    return (
      <div>
        <h2
          className={styles.title}
          dangerouslySetInnerHTML={{ __html: "Страница &laquo Обо мне &raquo" }}
        />
        <div className={styles.skills}>
          {skills && this.renderSkillCategory()}
        </div>
        <button onClick={this.updateSkills} disabled={requestProcessing} className={buttonStyles.button}>
          Сохранить
        </button>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isLoaded: getLoaded(state),
  skills: getSkills(state),
  requestProcessing: getRequestProcessing(state)
});
export default connect(
  mapStateToProps,
  { loadSkills, addSkillRequest, deleteSkillRequest, updateSkillsRequest }
)(SkillsBlock);
