import axios from 'axios';
import React, { Component } from 'react';
import * as Survey from 'survey-react';
import 'survey-react/survey.css';
import SurveyEditor from './SurveyEditor';
import 'bootstrap/dist/css/bootstrap.css';

export default class SurveyNew extends Component {
  constructor(props) {
    super(props);
    Survey.Survey.cssType = "bootstrap";
    this.state = {survey_data: this.props.survey}
  }

  render() {
    return (
      <div className="surveyjs">
        <SurveyEditor survey_data = {this.state.survey_data} />
      </div>
    );
  }
}
