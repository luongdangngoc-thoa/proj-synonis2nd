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
            default: "些細なことでも遠慮なくご相談ください",
        },
        //RichText の desc
        description_01: {
            type: "array",
            source: "children",
            selector: ".desc_01",
            default: "初回相談60分無料",
        },
        //RichText の desc
        description_02: {
            type: "array",
            source: "children",
            selector: ".desc_02",
            default: "オンライン相談対応",
        },
        //RichText の desc
        description_03: {
            type: "array",
            source: "children",
            selector: ".desc_03",
            default: "土日祝·夜間対応(要予約)",
        },

        button_tel: {
            type: "array",
            source: "children",
            selector: ".button_tel",
            default: "00-0000-0000",
        },

        button_tel_small_text: {
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

        button_to_form: {
            type: "array",
            source: "children",
            selector: ".button_to_form",
            default: "お問合せフォーム",
        },

        button_to_form_small_text: {
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
            default: "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox",
        },
        //MediaUpload の value の値（選択された画像から取得）
        mediaID: {
            type: "number",
            default: 0,
        },
        //MediaUpload の画像の URL（選択された画像から取得）
        mediaURL: {
            type: "string",
            source: "attribute",
            selector: "img",
            attribute: "src",
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
                tel,
                button_to_form,
                button_to_form_small_text,
                buttonURL,
                mediaID,
                mediaURL,
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

        //リストを更新するハンドラ
        const onChangeTel = (value) => {
            setAttributes({ tel: value });
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

        //リストを更新するハンドラ
        const onChangeButtonURL = (value) => {
            setAttributes({ buttonURL: value });
        };

        //選択された画像の情報（URLとID）を更新するハンドラ
        const onSelectImage = (media) => {
            setAttributes({
                mediaURL: media.url,
                mediaID: media.id,
            });
        };

        //画像を削除する（メディアをリセットする）ハンドラ
        const removeMedia = () => {
            props.setAttributes({
                mediaID: 0,
                mediaURL: "",
            });
        };

        return (
          <div className={`${className}`}>
             {/* <div className="image-overlay"></div>  */}

            <div className="content-wrap">
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

                  <RichText
                    tagName="p"
                    className="tel"
                    placeholder="tel"
                    value={tel}
                    onChange={onChangeTel}
                  />
                </div>
                <div className="button-to-form">
                  <div className="button-to-form-inner">
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

                  <RichText
                    tagName="p"
                    className="buttonURL"
                    placeholder="Button URL"
                    value={buttonURL}
                    onChange={onChangeButtonURL}
                  />
                </div>
              </div>
            </div>

            <div className="image-wrapper">
              <MediaUploadCheck>
                <MediaUpload
                  onSelect={onSelectImage}
                  allowedTypes={["image"]}
                  value={mediaID}
                  render={({ open }) => (
                    <Button
                      className={
                        mediaID ? "image-button" : "button button-add"
                      }
                      onClick={open}
                    >
                      {!mediaID ? (
                        "画像をアップロード"
                      ) : (
                        <img src={mediaURL} alt="アップロード画像" />
                      )}
                    </Button>
                  )}
                />
              </MediaUploadCheck>
              {mediaID != 0 && (
                <MediaUploadCheck>
                  <Button
                    onClick={removeMedia}
                    isDestructive
                    className="removeImage"
                  >
                    画像を削除
                  </Button>
                </MediaUploadCheck>
              )}
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
                tel,
                button_to_form,
                button_to_form_small_text,
                buttonURL,
                mediaID,
                mediaURL,
            },
        } = props;
        return (
          <div className={`${className} home-block-style-06`}>
            {mediaURL && (
              <div className="image-wrapper">
                <img src={mediaURL} alt="画像" />
              </div>
            )}
            <div className="image-overlay"></div> 

            <div className="content-wrap">
              <div className="heading-wrapper">
                <RichText.Content
                  tagName="h2"
                  className="heading"
                  value={heading}
                />
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
                    tagName="a"
                    className="button_tel tel"
                    href={tel}
                    value={button_tel}
                    allowedFormats={["core/bold", "core/italic", "core/link"]}
                  />
                  <RichText.Content
                    tagName="a"
                    className="button_tel_small_text tel"
                    href={tel}
                    value={button_tel_small_text}
                    allowedFormats={["core/bold", "core/italic", "core/link"]}
                  />
                </div>
                <div className="button-to-form">
                  <RichText.Content
                    tagName="a"
                    className="button_to_form button_form"
                    href={buttonURL}
                    value={button_to_form}
                    allowedFormats={["core/bold", "core/italic", "core/link"]}
                  />
                  <RichText.Content
                    tagName="a"
                    className="button_to_form_small_text button_form"
                    href={buttonURL}
                    value={button_to_form_small_text}
                    allowedFormats={["core/bold", "core/italic", "core/link"]}
                  />
                </div>
              </div>
            </div>
          </div>
        );
    },
});
