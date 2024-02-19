import { registerBlockType } from '@wordpress/blocks';
import { Fragment } from '@wordpress/element';
import { InspectorControls, RichText } from '@wordpress/block-editor';
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

      const boldBorderStyle = {
        border: '1px solid #000', // Thiết lập viền đậm
        borderRadius: '4px' ,
        padding: '8px',
      };

      return (
        <Fragment>
          <label htmlFor="question">Question:</label>
          <RichText
            tagName="div"
            className="wp-block-common-qa-question question-class"
            style={boldBorderStyle} // Thêm kiểu dáng inline ở đây
            value={question}
            onChange={handleQuestionChange}
            placeholder="Enter your question..."
          />
          <label htmlFor="answer">Answer:</label>
          <RichText
            tagName="div"
            className="wp-block-common-qa-answer answer-class"
            style={boldBorderStyle} // Thêm kiểu dáng inline ở đây
            value={answer}
            onChange={handleAnswerChange}
            placeholder="Enter your answer..."
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
