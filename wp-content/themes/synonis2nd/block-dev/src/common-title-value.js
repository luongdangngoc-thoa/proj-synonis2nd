import { registerBlockType } from '@wordpress/blocks';
import { Fragment } from '@wordpress/element';
import { RichText } from '@wordpress/block-editor';
import "./common-style-qa.scss";
import "./common-editor-qa.scss";

registerBlockType("common/title-value", {
    title: "Title + Value",
    icon: "index-card",
    category: "layout",
    //入力された値を保存するための属性を設定
    attributes: {
        title: {
            type: 'string',
            default: '',
            source: 'text',
            selector: '.title',
        },
        value: {
            type: 'string',
            default: '',
            source: 'text',
            selector: '.value',
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

        const boldBorderStyle = {
            border: '1px solid #000', // Thiết lập viền đậm
            borderRadius: '4px',
            padding: '8px',
            width: "100%"
        };

        const wrapperStyle = { 
        display: "flex", 
        justifyContent: "space-between",
         alignItems: "center", "gap": "60px" 
        }
        const innerStyle = { 
        display: "flex", 
        justifyContent: "space-between",
        alignItems: "center", "gap": "60px" ,
        width: "100%"
        }


        return (
            <Fragment>
                <div style={wrapperStyle} >
                    <div style={innerStyle} >
                        <label htmlFor="question">Title:</label>
                        <RichText
                            tagName="div"
                            style={boldBorderStyle} // Thêm kiểu dáng inline ở đây
                            value={title}
                            onChange={handleTitleChange}
                            placeholder="Enter title..."
                        />
                    </div>
                    <div style={innerStyle} >
                        <label htmlFor="answer">Value:</label>
                        <RichText
                            tagName="div"
                            style={boldBorderStyle} // Thêm kiểu dáng inline ở đây
                            value={value}
                            onChange={handleValueChange}
                            placeholder="Enter value..."
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
                <h3 className="title">{title}</h3>
                <p className="value">{value}</p>
            </div>
        );
    },
});
