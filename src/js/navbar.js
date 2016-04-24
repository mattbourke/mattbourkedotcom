import React    from 'react';
import page     from './pageContent';

var Navbar = React.createClass({

  getDefaultProps() {
    return {
      selected: 0
    };
  },
  getInitialState() {
    return {
      selected: this.props.selected
    };
  },
  handleClick(index, event) {
    event.preventDefault();
    this.setState({
      selected: index
    });
  },

  _renderNavBar() {
     return (
      <nav id="navbar">
          <ul className="navigation">
            {[...page].map((page, i) =>
              <li><a href="#" onClick={this.handleClick.bind(this, i)}>{page.page}</a></li>
            )}
          </ul>
      </nav>
     );
  },
  _renderContent() {
    let pageContent   = page[this.state.selected].content;
    return (
      <section className="body-content">
        <div id="bodyArticle" className="body-content-article"><p className="bodyArticle">{pageContent}</p></div>
      </section>
    );
  },
  render() {
    return (
      <div>
        {this._renderNavBar()}
        {this._renderContent()}
      </div>
    );
  }
});

module.exports = Navbar;