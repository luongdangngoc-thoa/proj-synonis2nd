import { registerBlockType } from '@wordpress/blocks';
import { Fragment } from '@wordpress/element';
import { RichText, InnerBlocks } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import "./common-style-title-value.scss";
import "./common-editor-title-value.scss";

registerBlockType("common/title-value-group", {
  title: "Title + Value Group",
  icon: "index-card",
  category: "layout",
  // Set up attributes for visibility
  attributes: {
  },
  edit: () => {
    return (
          <div className="qa-list">
            <InnerBlocks allowedBlocks={['common/title-value']} />
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
