import React, { PureComponent } from "react";
import { connect } from "react-redux";
import {
  getArticles,
  getArticlesLoaded,
  loadAricles
} from "../../modules/blog";
import BlogArticle from "./BlogArticle";
import BlogNav from "./BlogNav";
import styles from "../../styles/BlogSection.module.scss";
class BlogSection extends PureComponent {
  constructor(props) {
    super();
    this.container = React.createRef();
    this.ariclesContainer = React.createRef();
    this.state = {
      activeNav: null,
      fixed: false,
      isMobile: document.documentElement.clientWidth <= 768
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.articles && !prevState.activeNav) {
      return { activeNav: nextProps.articles[0]["_id"] };
    } else {
      return null;
    }
  }
  componentDidMount() {
    const { loaded, loadAricles, articles } = this.props;
    if (!loaded) {
      loadAricles();
    }
    if(articles) {
      this.setCurrentArticle();
    }
    this.onScroll();
    window.addEventListener("scroll", this.onScroll);
    window.addEventListener("resize", this.onResize);
  }
  componentDidUpdate(prevProps, prevState) {
    const {articles} = this.props
    console.log(prevProps)
    if(!prevProps.articles && articles) {
     this.setCurrentArticle()
    }
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
    window.removeEventListener("resize", this.onResize);
  }
  setCurrentArticle = () => {
    const { activeNav } = this.state;
    if (!this.ariclesContainer.current) {
      return;
    }
    const children = this.ariclesContainer.current.children;
    [].forEach.call(children, child => {
      const childBox = child.getBoundingClientRect();
      if (childBox.top <= 300 && childBox.top + child.offsetHeight > 300) {
        if (activeNav !== child.dataset.id) {
          this.setState({
            activeNav: child.dataset.id
          });
        }
      }
    });
  };
  onScroll = () => {
    const { fixed } = this.state;
    const box = this.container.current.getBoundingClientRect();
    if (fixed) {
      this.setCurrentArticle();
    }
    if (box.top <= 0 && !fixed) {
      this.setState({
        fixed: true
      });
    } else if (box.top > 0 && fixed) {
      this.setState({
        fixed: false
      });
    }
  };
  onResize = () => {
    const { isMobile } = this.state;
    if (document.documentElement.clientWidth <= 768 && !isMobile) {
      this.setState({
        isMobile: true
      });
    } else if (document.documentElement.clientWidth > 768 && isMobile) {
      this.setState({
        isMobile: false
      });
    }
  };
  renderArticles = () => {
    const { articles } = this.props;

    return articles.map(article => (
      <li
        data-id={article["_id"]}
        key={article["_id"]}
        className={styles["article__item"]}
      >
        <BlogArticle article={article} />
      </li>
    ));
  };
  scrollTo = (id) => {
    const children = this.ariclesContainer.current.children;
    const ref = [].find.call(children,item => {
        return item.dataset.id === id
    })
    ref.scrollIntoView({behavior:"smooth"});
  }
  render() {
    const { loaded, articles } = this.props;
    const { activeNav, fixed, isMobile } = this.state;
    return (
      <section ref={this.container} className={styles["blog"]}>
        {loaded && (
          <div className={styles["blog__content"]}>
            <main className={styles["blog__articles"]}>
              <ul ref={this.ariclesContainer} className="articles">
                {this.renderArticles()}
              </ul>
            </main>
            <BlogNav
              items={articles}
              active={activeNav}
              fixed={fixed}
              isMobile={isMobile}
              onClick={this.scrollTo}
            />
          </div>
        )}
      </section>
    );
  }
}
const mapStateToProps = state => ({
  loaded: getArticlesLoaded(state),
  articles: getArticles(state)
});
export default connect(
  mapStateToProps,
  { loadAricles }
)(BlogSection);
