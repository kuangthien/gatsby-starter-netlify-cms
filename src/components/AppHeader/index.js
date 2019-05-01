import React, { Component } from 'react'
import { Link } from 'gatsby'
import { Location } from '@reach/router'
import iconLogo from './logo.png'
import './styles.scss'

class AppHeader extends Component {
  render() {
    const logo = (
      <Link className="text-white text-decoration-none " to="/">
        <span
          className="  ml-3 logo "
          style={{ backgroundImage: `url(${iconLogo}` }}
        >
          AhaQuiz
        </span>
      </Link>
    )

    return (
      <div className="App-header  ">
        <div className="container-fluid px-0 px-sm-3 ">
          <div className="justify-content-between row no-gutters app-header-content">
            <div className="d-flex">
              <span className="align-self-center">
                <Location>
                  {({ location: { pathname } }) =>
                    pathname === '/' ? <h1>{logo}</h1> : <div>{logo}</div>
                  }
                </Location>
              </span>
            </div>
            <div className="p-2 pr-3">
              <button
                type="button"
                style={{ boxShadow: 'none' }}
                className="btn btn-light  font-weight-bold  "
                onClick={() => {
                  alert('Chức năng đang phát triển')
                }}
              >
                Góp Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AppHeader
