import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "./actions";

const App = React.createClass({
  render() {
    const { count, dispatch } = this.props;
    const actions = bindActionCreators(Actions, dispatch);
    return (
      <div className="container">
        <div className="page-header">
          <h1>Counter!</h1>
        </div>
        <p>{count}</p>
        <button className="btn btn-default" onClick={actions.increment}>
          <i className="fa fa-plus fa-fw" />
        </button>
        <button className="btn btn-default" onClick={actions.decrement}>
          <i className="fa fa-minus fa-fw" />
        </button>
      </div>
    );
  }
});

export default connect(state => state)(App);
