import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { IconSvg } from 'helpers';

export default class Header extends PureComponent {
	render() {
		return (
      <header className="header-welcome">
        <div className="wrapper">
          <div className="left-part-header">
            <Link className="logo" to="/" title="logo">
              <IconSvg
                width="229px"
                height="46px"
                viewBox="0 0 229 46"
                id="#logo"
              />
            </Link>
          </div>
          <div className="right-part-header">

          </div>
        </div>
      </header>
		)
  }
}
