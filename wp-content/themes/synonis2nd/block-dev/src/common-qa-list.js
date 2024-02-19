import { registerBlockType } from '@wordpress/blocks';
import { Fragment } from '@wordpress/element';
import { RichText, InnerBlocks } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import "./common-style-qa.scss";
import "./common-editor-qa.scss";

registerBlockType("common/qa-list", {
  title: "QA list",
  icon: "index-card",
  category: "layout",
  // Set up attributes for visibility
  attributes: {
    title: {
        type: "array",
        source: "children",
        selector: ".title",
        default: "Q&A",
    },
    isVisible: {
      type: 'boolean',
      default: true,
    },
  },
  edit: ({ attributes, setAttributes }) => {
    const { isVisible, title } = attributes;
    const toggleVisibility = () => {
      setAttributes({ isVisible: !isVisible });
    };

    //title を更新するハンドラ
    const onChangeTitle = (value) => {
        setAttributes({ title: value });
    };


    return (
      <Fragment>
         <Button className="button" onClick={toggleVisibility}>{isVisible ? 'Hide Block' : 'Show Block'}</Button>
        {isVisible && (
          <div className="qa-list">
            <RichText
                    tagName="h2"
                    className="title"
                    placeholder="title"
                    value={title}
                    onChange={onChangeTitle}
                  />
            <InnerBlocks allowedBlocks={['common/qa']} />
          </div>
        )}
      </Fragment>
    );
  },
  save: ({ attributes }) => {
    const { isVisible , title} = attributes;
    if (!isVisible) {
      return null;
    }
    return (
      <div>
        <RichText.Content
                                tagName="h2"
                                className="title"
                                value={title}
                            />
        <InnerBlocks.Content />
      </div>
    );
  },
});
