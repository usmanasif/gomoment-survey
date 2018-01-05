import axios from 'axios';
import React, { Component } from 'react';
import * as SurveyJSEditor from 'surveyjs-editor';
import 'surveyjs-editor/surveyeditor.css';

class SurveyEditor extends Component {
  editor;
  componentDidMount() {
    let editorOptions = { showEmbededSurveyTab: false, };
    this.editor = new SurveyJSEditor.SurveyEditor('surveyEditorContainer', editorOptions);
    this.editor.saveSurveyFunc = this.saveMySurvey;
    this.editor.text = this.props.survey_data;
  }
  render() {
    return (
      <div id="surveyEditorContainer"></div>
    );
  }
  saveMySurvey = () => {
      axios
      .post('/survey', { survey_data: this.editor.text })
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export default SurveyEditor;
