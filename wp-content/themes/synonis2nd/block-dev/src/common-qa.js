import { registerBlockType } from '@wordpress/blocks';
import { Fragment } from '@wordpress/element';
import { InspectorControls } from '@wordpress/editor';
import { PanelBody, Button, TextControl } from '@wordpress/components';
import "./common-style-qa.scss";
import "./common-editor-qa.scss";

registerBlockType("common/qa", {
  title: "QA",
  icon: "index-card",
  category: "layout",
  //入力された値を保存するための属性を設定
  attributes: {
    question: {
        type: 'string',
        default: '',
        source: 'text',
        selector: '.question-class',
      },
      answer: {
        type: 'string',
        default: '',
        source: 'text',
        selector: '.answer-class',
      },
},
edit: ({ attributes, setAttributes }) => {
    const { question, answer } = attributes;

    const handleQuestionChange = (newQuestion) => {
        setAttributes({ question: newQuestion });
      };
  
      const handleAnswerChange = (newAnswer) => {
        setAttributes({ answer: newAnswer });
      };

      return (
        <Fragment>
          <TextControl
            label="Question"
            value={question}
            onChange={handleQuestionChange}
          />
          <TextControl
            label="Answer"
            value={answer}
            onChange={handleAnswerChange}
          />
        </Fragment>
      );
    },
    save: ({ attributes }) => {
      const { question, answer } = attributes;
      return (
        <div>
          <h3 className="question-class">{question}</h3>
          <p className="answer-class">{answer}</p>
        </div>
      );
    },
  });