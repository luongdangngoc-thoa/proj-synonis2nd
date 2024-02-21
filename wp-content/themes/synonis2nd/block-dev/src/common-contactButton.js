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
        buttonTelLable: {
            type: "array",
            source: "children",
            selector: ".buttonTel-label",
            default: "00-0000-0000",
        },
        buttonTelSmallText: {
            type: "array",
            source: "children",
            selector: ".buttonTel-smallText",
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
            selector: ".buttonToForm",
            default: "お問合せフォーム",
        },
        buttonToFormSmallText: {
            type: "array",
            source: "children",
            selector: ".buttonToForm-smallText",
            default: "24時間受付", 
        },
        buttonURL: {
            type: "string",
            source: "attribute",
            selector: "a.buttonToForm-url",
            attribute: "href",
            default: "http://localhost/proj-synonis2nd/contact/",
        },
    },
    edit: (props) => {
        const {
          className,
          attributes: {
            buttonTelLable,
            buttonTelSmallText,
            tel,
            buttonToForm,
            buttonToFormSmallText,
            buttonURL,
          },
          setAttributes,
        } = props;

        const onChangeButtonTel = (value) => {
            setAttributes({ buttonTelLable: value });
        };

        const onChangeTel = (value) => {
            setAttributes({ tel: value });
        };

        const onChangeButtonTelSmallText = (value) => {
            setAttributes({ buttonTelSmallText: value });
        };

        const onChangebuttonToForm = (value) => {
            setAttributes({ buttonToForm: value });
        };

        const onChangebuttonToFormSmallText = (value) => {
            setAttributes({ buttonToFormSmallText: value });
        };

        const onChangeButtonURL = (value) => {
            setAttributes({ buttonURL: value });
        };

        return (
          <div className={`${className}`}>
            <div className="button-group-wrapper">
              <div className="buttonTel-wrapper">
                <RichText
                  className="buttonTel-label"
                  tagName="span"
                  placeholder="Button Tel"
                  value={buttonTelLable}
                  onChange={onChangeButtonTel}
                />
                <RichText
                  className="buttonTel-smallText"
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
              <div className="buttonToForm-wrapper">
                <div className="buttonToForm-inner">
                  <RichText
                    className="buttonToForm"
                    tagName="span"
                    placeholder="Button Label"
                    value={buttonToForm}
                    onChange={onChangebuttonToForm}
                  />
                  <RichText
                    className="buttonToForm-smallText"
                    tagName="span"
                    placeholder="Text Bottom"
                    value={buttonToFormSmallText}
                    onChange={onChangebuttonToFormSmallText}
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
            buttonTelLable,
            buttonTelSmallText,
            tel,
            buttonToForm,
            buttonToFormSmallText,
            buttonURL,
          },
        } = props;
        return (
          <div className={`${className} contact-button-style`}>
            <div className="button-group-wrapper">
              <div className="buttonTel-wrapper">
                <RichText.Content
                  tagName="a"
                  className="buttonTel-label tel"
                  href={tel}
                  value={buttonTelLable}
                  allowedFormats={["core/bold", "core/italic", "core/link"]}
                />
                <RichText.Content
                  tagName="a"
                  className="buttonTel-smallText tel"
                  href={tel}
                  value={buttonTelSmallText}
                  allowedFormats={["core/bold", "core/italic", "core/link"]}
                />
              </div>
              <div className="break-line"></div>
              <div className="buttonToForm-wrapper">
                <RichText.Content
                  tagName="a"
                  className="buttonToForm buttonToForm-url"
                  href={buttonURL}
                  value={buttonToForm}
                  allowedFormats={["core/bold", "core/italic", "core/link"]}
                />
                <RichText.Content
                  tagName="a"
                  className="buttonToForm-smallText buttonToForm-url"
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
