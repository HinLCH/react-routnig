import React from 'react'
import { Link } from 'react-router-dom'
import {  Route } from 'react-router-dom'
import Work from './Work'

function Works({ match }) {
  return (
    <div>
      <h2>Works</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:topicId`} component={Work} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

 
export default Works