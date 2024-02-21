import { registerBlockType } from '@wordpress/blocks';
import { Fragment } from '@wordpress/element';
import {  RichText } from '@wordpress/block-editor';
import "./common-qa-style.scss";

registerBlockType("common/qa", {
  title: "QA",
  icon: "editor-help",
  category: "layout",
  //入力された値を保存するための属性を設定
  attributes: {
    question: {
      type: "array",
      default: "",
      source: "children",
      selector: ".question",
    },
    answer: {
      type: "array",
      default: "",
      source: "children",
      selector: ".answer",
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

    const inputStyle = {
      border: "1px solid #000", // Thiết lập viền đậm
      borderRadius: "4px",
      padding: "8px",
      fontSize: "14px"
    };

    return (
      <Fragment>
        <label htmlFor="question">質問</label>
        <RichText
          tagName="div"
          className="wp-block-common-qa-question question"
          style={inputStyle} // Thêm kiểu dáng inline ở đây
          value={question}
          onChange={handleQuestionChange}
          placeholder="質問入力"
        />
        <label htmlFor="answer">答え</label>
        <RichText
          tagName="div"
          className="wp-block-common-qa-answer answer"
          style={inputStyle} // Thêm kiểu dáng inline ở đây
          value={answer}
          onChange={handleAnswerChange}
          placeholder="答え入力"
        />
      </Fragment>
    );
  },
  save: ({ attributes }) => {
    const { question, answer } = attributes;
    return (
      <div className="qa-wrapper">
        <div className="question-wrapper">
          <RichText.Content
            tagName="h3"
            className="question"
            value={question}
          />
          <span className="question-icon-group">
            <span className="icon-plus">+</span>
            <span className="icon-minus">-</span>
          </span>
        </div>
        <div className="answer-wrapper">
          <RichText.Content tagName="p" className="answer" value={answer} />
        </div>
      </div>
    );
  },
});
