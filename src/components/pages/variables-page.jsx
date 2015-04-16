/*
OpenFisca -- A versatile microsimulation software
By: OpenFisca Team <contact@openfisca.fr>

Copyright (C) 2011, 2012, 2013, 2014, 2015 OpenFisca Team
https://github.com/openfisca

This file is part of OpenFisca.

OpenFisca is free software; you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

OpenFisca is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/


// import {Link} from "react-router";
import React, {PropTypes} from "react";

import AppPropTypes from "../../prop-types";
import Tabs from "../ui/tabs";


var VariablesPage = React.createClass({
  contextTypes: {
    router: PropTypes.func.isRequired,
  },
  propTypes: {
    inputVariables: PropTypes.arrayOf(AppPropTypes.variable).isRequired,
    outputVariables: PropTypes.arrayOf(AppPropTypes.variable).isRequired,
  },
  render() {
    return (
      <div>
        <div className="page-header">
          <h1>Variables et formules socio-fiscales</h1>
        </div>
        <p>
          {this.renderSearchForm()}
        </p>
        <Tabs panes={[
          {
            element: this.renderVariablesTabPane(this.props.inputVariables),
            title: "En entrée",
          },
          {
            element: this.renderVariablesTabPane(this.props.outputVariables),
            title: "En sortie (calculées)",
          },
        ]} />
      </div>
    );
  },
  renderSearchForm() {
    return (
      <form>
        <input className="form-control" placeholder="Rechercher par nom de variable" />
      </form>
    );
  },
  renderVariablesTabPane(variables) {
    return (
      <ul>
        {
          variables.map((variable, idx) =>
            <li key={idx}>
              {variable.name}
              <br/>
              {variable.label ? variable.label : "Aucune description"}
              {/*<Link to="variable" params={variable}>{variable.name}</Link>*/}
            </li>
          )
        }
      </ul>
    );
  },
});


export default VariablesPage;
