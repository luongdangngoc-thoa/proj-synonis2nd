import { registerBlockType } from '@wordpress/blocks';
import { Fragment } from '@wordpress/element';
import { RichText } from '@wordpress/block-editor';

import "./common-title-value-style.scss";

registerBlockType("common/title-value", {
  title: "Title + Value",
  icon: "editor-ul",
  category: "layout",
  //入力された値を保存するための属性を設定
  attributes: {
    title: {
      type: "array",
      default: "",
      source: "children",
      selector: ".title",
    },
    value: {
      type: "array",
      default: "",
      source: "children",
      selector: ".value",
    },
  },
  edit: ({ attributes, setAttributes }) => {
    const { title, value } = attributes;

    const handleTitleChange = (newTitle) => {
      setAttributes({ title: newTitle });
    };

    const handleValueChange = (newValue) => {
      setAttributes({ value: newValue });
    };

    const wrapperStyle = {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "40px",
      border: "1px solid #000", // Thiết lập viền đậm
      borderRadius: "4px",
      padding: "8px",
      width: "96%",
    };
    const innerStyle = {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "20px",
      width: "100%",
    };

    const textStyle = {
      width: "100%",
      fontSize: "14px",
    };

    return (
      <Fragment>
        <div style={wrapperStyle}>
          <div style={innerStyle}>
            <RichText
              tagName="div"
              style={textStyle}
              value={title}
              onChange={handleTitleChange}
              placeholder="タイトル入力 (例：事務所名）"
            />
          </div>
          <div style={innerStyle}>
            <RichText
              tagName="div"
              style={textStyle}
              value={value}
              onChange={handleValueChange}
              placeholder="テキスト入力(例：015まほろばO〇〇士事務所）"
            />
          </div>
        </div>
      </Fragment>
    );
  },
  save: ({ attributes }) => {
    const { title, value } = attributes;
    return (
      <div>
        <RichText.Content tagName="h3" className="title" value={title} />
        <RichText.Content tagName="p" className="value" value={value} />
      </div>
    );
  },
});
