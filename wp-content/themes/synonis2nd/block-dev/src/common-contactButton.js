import { registerBlockType } from "@wordpress/blocks";
import {
    RichText,
} from "@wordpress/block-editor";
import "./common-contactButton-editor.scss";
import "./common-contactButton-style.scss";

registerBlockType("common/contact-button", {
    title: "Contact Button",
    icon: "index-card",
    category: "layout",
    attributes: {
        buttonTel: {
            type: "array",
            source: "children",
            selector: ".button_tel",
            default: "00-0000-0000",
        },
        buttonTelSmallText: {
            type: "array",
            source: "children",
            selector: ".button_tel_small_text",
            default: "受付時間 平日 00:00~00:00",
        },
        tel: {
            type: "string",
            source: "attribute",
            selector: "a.tel",
            attribute: "href",
            default: "tel:+6494461709",
        },
        buttonToForm: {
            type: "array",
            source: "children",
            selector: ".button_to_form",
            default: "お問合せフォーム",
        },
        buttonToFormSmallText: {
            type: "array",
            source: "children",
            selector: ".button_to_form_small_text",
            default: "24時間受付", 
        },
        buttonURL: {
            type: "string",
            source: "attribute",
            selector: "a.button_form",
            attribute: "href",
            default: "http://localhost/proj-synonis2nd/contact/",
        },
    },
    edit: (props) => {
        const {
            className,
            attributes: {
                buttonTel,
                buttonTelSmallText,
                tel,
                buttonToForm,
                buttonToFormSmallText,
                buttonURL,
            },
            setAttributes,
        } = props;

        const onChangeButtonTel = (value) => {
            setAttributes({ buttonTel: value });
        };

        const onChangeTel = (value) => {
            setAttributes({ tel: value });
        };

        const onChangeButtonTelSmallText = (value) => {
            setAttributes({ buttonTelSmallText: value });
        };

        const onChangeButtonToForm = (value) => {
            setAttributes({ buttonToForm: value });
        };

        const onChangeButtonToFormSmallText = (value) => {
            setAttributes({ buttonToFormSmallText: value });
        };

        const onChangeButtonURL = (value) => {
            setAttributes({ buttonURL: value });
        };

        return (
            <div className={`${className}`}>
                    <div className="button-wrapper">
                        <div className="button-tel">
                            <RichText
                                className="button_tel"
                                tagName="span"
                                placeholder="Button Tel"
                                value={buttonTel}
                                onChange={onChangeButtonTel}
                            />
                            <RichText
                                className="button_tel_small_text"
                                tagName="span"
                                placeholder="Text Bottom"
                                value={buttonTelSmallText}
                                onChange={onChangeButtonTelSmallText}
                            />
                            <RichText
                                tagName="span"
                                className="tel"
                                placeholder="Tel"
                                value={tel}
                                onChange={onChangeTel}
                            />
                        </div>
                        <div className="button-to-form">
                            <div className="button-to-form-inner">
                                <RichText
                                    className="button_to_form"
                                    tagName="span"
                                    placeholder="Button Label"
                                    value={buttonToForm}
                                    onChange={onChangeButtonToForm}
                                />
                                <RichText
                                    className="button_to_form_small_text"
                                    tagName="span"
                                    placeholder="Text Bottom"
                                    value={buttonToFormSmallText}
                                    onChange={onChangeButtonToFormSmallText}
                                />
                            </div>
                            <RichText
                                tagName="span"
                                className="buttonURL"
                                placeholder="Button URL"
                                value={buttonURL}
                                onChange={onChangeButtonURL}
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
                buttonTel,
                buttonTelSmallText,
                tel,
                buttonToForm,
                buttonToFormSmallText,
                buttonURL,
            },
        } = props;
        return (
            <div className={`${className}`}>
                    <div className="button-wrapper">
                        <div className="button-tel">
                            <RichText.Content
                                tagName="a"
                                className="button_tel tel"
                                href={tel}
                                value={buttonTel}
                                allowedFormats={["core/bold", "core/italic", "core/link"]}
                            />
                            <RichText.Content
                                tagName="a"
                                className="button_tel_small_text tel"
                                href={tel}
                                value={buttonTelSmallText}
                                allowedFormats={["core/bold", "core/italic", "core/link"]}
                            />
                        </div>
                        <div className="button-to-form">
                            <RichText.Content
                                tagName="a"
                                className="button_to_form button_form"
                                href={buttonURL}
                                value={buttonToForm}
                                allowedFormats={["core/bold", "core/italic", "core/link"]}
                            />
                            <RichText.Content
                                tagName="a"
                                className="button_to_form_small_text button_form"
                                href={buttonURL}
                                value={buttonToFormSmallText}
                                allowedFormats={["core/bold", "core/italic", "core/link"]}
                            />
                        </div>
                    </div>
            </div>
        );
    },
});
