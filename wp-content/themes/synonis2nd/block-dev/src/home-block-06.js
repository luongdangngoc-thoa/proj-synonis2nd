import { registerBlockType } from "@wordpress/blocks";
//RichText, MediaUpload, MediaUploadCheck を block-editor パッケージからインポート
import {
    RichText,
    MediaUpload,
    MediaUploadCheck,
} from "@wordpress/block-editor";
// Button を components パッケージからインポート
import { Button } from "@wordpress/components";
import "./home-style-06.scss";
import "./home-editor-06.scss";

registerBlockType("home/block-06", {
    title: "Home Block 06",
    icon: "index-card",
    category: "layout",
    //入力された値を保存するための属性を設定
    attributes: {
        //RichText のheading
        heading: {
            type: "array",
            source: "children",
            selector: "h2",
            default: "私たちの想い",
        },
        //RichText の desc
        description_01: {
            type: "array",
            source: "children",
            selector: ".desc_01",
            default: "依頼者に寄り添い、ご不安やお悩みの解消に全力を尽くします",
        },
        //RichText の desc
        description_02: {
            type: "array",
            source: "children",
            selector: ".desc_02",
            default: "依頼者に寄り添い、ご不安やお悩みの解消に全力を尽くします",
        },
        //RichText の desc
        description_03: {
            type: "array",
            source: "children",
            selector: ".desc_03",
            default: "依頼者に寄り添い、ご不安やお悩みの解消に全力を尽くします",
        },

        button_tel: {
            type: "array",
            source: "children",
            selector: ".button_tel",
            default: "",
        },

        button_tel_small_text: {
            type: "array",
            source: "children",
            selector: ".button_tel_small_text",
            default: "",
        },

        button_to_form: {
            type: "array",
            source: "children",
            selector: ".button_to_form",
            default: "",
        },

        button_to_form_small_text: {
            type: "array",
            source: "children",
            selector: ".button_to_form",
            default: "",
        },
    },

    edit: (props) => {
        // props からプロパティを抽出（分割代入）
        const {
            className,
            attributes: {
                heading,
                description_01,
                description_02,
                description_03,
                button_tel,
                button_tel_small_text,
                button_to_form,
                button_to_form_small_text
            },
            setAttributes,
        } = props;

        //タイトルを更新するハンドラ
        const onChangeHeading = (value) => {
            setAttributes({ heading: value });
        };
        //description を更新するハンドラ
        const onChangeDescription_01 = (value) => {
            setAttributes({ description_01: value });
        };

        //description を更新するハンドラ
        const onChangeDescription_02 = (value) => {
            setAttributes({ description_02: value });
        };

        //description を更新するハンドラ
        const onChangeDescription_03 = (value) => {
            setAttributes({ description_03: value });
        };

        const onChangeButtonTel = (value) => {
            setAttributes({ button_tel: value });
        };

        const onChangeButtonTelSmallText = (value) => {
            setAttributes({ button_tel_small_text: value });
        };

        const onChangeButtonToForm = (value) => {
            setAttributes({ button_to_form: value });
        };

        const onChangeButtonToFormSmallText = (value) => {
            setAttributes({ button_to_form_small_text: value });
        };

        return (
            <div className={`${className} container`}>
                <div className="heading-wrapper">
                    <RichText
                        tagName="h2"
                        placeholder="heading"
                        value={heading}
                        onChange={onChangeHeading}
                    />
                </div>

                <div className="col-3">
                    <RichText
                        tagName="p"
                        className="desc_01"
                        placeholder="description"
                        value={description_01}
                        onChange={onChangeDescription_01}
                    />
                    <RichText
                        tagName="p"
                        className="desc_02"
                        placeholder="description"
                        value={description_02}
                        onChange={onChangeDescription_02}
                    />
                    <RichText
                        tagName="p"
                        className="desc_03"
                        placeholder="description"
                        value={description_03}
                        onChange={onChangeDescription_03}
                    />
                </div>

                <div className="button-wrapper">
                    <div className="button-tel">
                        <RichText
                            className="button_tel"
                            tagName="p"
                            placeholder="button tel"
                            value={button_tel}
                            onChange={onChangeButtonTel}
                        />
                        <RichText
                            className="button_tel_small_text"
                            tagName="p"
                            placeholder="text bottom"
                            value={button_tel_small_text}
                            onChange={onChangeButtonTelSmallText}
                        />
                    </div>
                    <div className="button-to-form">
                        <RichText
                            className="button_to_form"
                            tagName="p"
                            placeholder="button lable"
                            value={button_to_form}
                            onChange={onChangeButtonToForm}
                        />
                        <RichText
                            className="button_to_form_small_text"
                            tagName="p"
                            placeholder="text bottom"
                            value={button_to_form_small_text}
                            onChange={onChangeButtonToFormSmallText}
                        />
                    </div>



                </div>
            </div>
        );
    },
    save: (props) => {
        const {
            className,
            attributes: {
                heading,
                description_01,
                description_02,
                description_03,
                button_tel,
                button_tel_small_text,
                button_to_form,
                button_to_form_small_text
            },
        } = props;
        return (
            <div className={`${className} container`}>
                <div className="heading-wrapper">
                    <RichText.Content tagName="h2" className="heading" value={heading} />
                </div>
                <div className="col-3">
                    <RichText.Content
                        tagName="p"
                        className="desc_01"
                        value={description_01}
                    />
                    <RichText.Content
                        tagName="p"
                        className="desc_02"
                        value={description_02}
                    />
                    <RichText.Content
                        tagName="p"
                        className="desc_03"
                        value={description_03}
                    />
                </div>

                <div className="button-wrapper">
                    <div className="button-tel">
                        <RichText.Content
                            className="button_tel"
                            tagName="p"
                            value={button_tel}
                        />
                        <RichText.Content
                            className="button_tel_small_text"
                            tagName="p"
                            value={button_tel_small_text}
                        />
                    </div>
                    <div className="button-to-form">
                        <RichText.Content
                            className="button_to_form"
                            tagName="p"
                            value={button_to_form}
                        />
                        <RichText.Content
                            className="button_to_form_small_text"
                            tagName="p"
                            value={button_to_form_small_text}
                        />
                    </div>
                </div>
            </div>
        );
    },
});
