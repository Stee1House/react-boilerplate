import React, { PureComponent } from "react";
import { Link } from 'react-router-dom';
import { IconSvg } from 'helpers';

export default class Footer extends PureComponent {
  render() {
    return (
      <footer className="footer">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>

        <div className="wrapper-social">
          <Link className="fcb" to="#">
            <IconSvg
              width="44px"
              height="44px"
              viewBox="0 0 44 44"
              id="#fb"
            />
          </Link>
          <Link className="twt" to="#">
            <IconSvg
              width="44px"
              height="44px"
              viewBox="0 0 44 44"
              id="#tw"
            />
          </Link>
          <Link className="rdt" to="#">
            <IconSvg
              width="45px"
              height="44px"
              viewBox="0 0 45 44"
              id="#reddit"
            />
          </Link>
          <Link className="tlg" to="#">
            <IconSvg
              width="45px"
              height="44px"
              viewBox="0 0 45 44"
              id="#telegram"
            />
          </Link>
          <Link className="mdm" to="#">
            <IconSvg
              width="45px"
              height="44px"
              viewBox="0 0 45 44"
              id="#medium"
            />
          </Link>
        </div>
        <p className="copyright">COPYRIGHT 2018. ALL RIGHTS RESERVED.</p>
      </footer>
    )
  }
}
