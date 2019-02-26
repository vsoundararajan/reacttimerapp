var React = require('react');
import Navigation from './Navigation.jsx';
var Main = props => {
  return (
    <div>
      <div>
        <div>
          <Navigation />
          <p>Main.jsx Rendered</p>
          {props.children}
        </div>
      </div>
    </div>
  );
};

module.exports = Main;
