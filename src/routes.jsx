import React from 'react'
import {Redirect, Route, IndexRedirect, IndexRoute} from 'react-router'

import App from './components/app'
import HomePage from './components/pages/home'
import SwaggerPage from './components/pages/swagger'
import ParameterOrVariableOrEntityPage from './components/pages/parameter-or-variable-or-entity'


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="swagger" component={SwaggerPage}/>
    <Route path=":name" component={ParameterOrVariableOrEntityPage}/>
    <Route path="parameters">
      <IndexRedirect to="/" />
      <Redirect from=":name" to="/:name" />
    </Route>
    <Route path="variables">
      <IndexRedirect to="/" />
      <Redirect from=":name" to="/:name" />
    </Route>
    <Route path="entities">
      <IndexRedirect to="/" />
      <Redirect from=":name" to="/:name" />
    </Route>
  </Route>
)
