import { registerBlockType } from '@wordpress/blocks';
import {  InnerBlocks } from '@wordpress/block-editor';
// import "./common-style-title-value.scss";
// import "./common-editor-title-value.scss";

registerBlockType("common/title-value-group", {
  title: "Title + Value Group",
  icon: "editor-ul",
  category: "layout",
  // Set up attributes for visibility
  attributes: {},
  edit: () => {
    return (
      <div className="title-value-list">
        <InnerBlocks allowedBlocks={["common/title-value"]} />
      </div>
    );
  },
  save: () => {
    return (
      <div>
        <InnerBlocks.Content />
      </div>
    );
  },
});
