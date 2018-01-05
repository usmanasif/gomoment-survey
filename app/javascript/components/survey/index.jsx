import axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Survey} from 'survey-react';
export default class SurveyIndex extends Component {
  constructor(props) {
    super(props);
    Survey.cssType = "bootstrap";
    this.state = { survey_data: this.props.survey }

  }


  sendDataToServer(survey) {

    var resultAsString = JSON.stringify(survey.data);
    //alert(resultAsString); //send Ajax request to your web server.

    // survey.sendResult('8287a3bd-29bd-4f74-ba8e-da739c1cf31c');
  }

  render() {
    return (
      <div>
       <Survey json={this.state.survey_data} onComplete={this.sendDataToServer}/>
      </div>
    );
  }
}
