import { registerBlockType } from "@wordpress/blocks";
//RichText, MediaUpload, MediaUploadCheck を block-editor パッケージからインポート
import {
  RichText,
  MediaUpload,
  MediaUploadCheck,
} from "@wordpress/block-editor";
// Button を components パッケージからインポート
import { Button } from "@wordpress/components";
import "./home-style-01.scss";
import "./home-editor-01.scss";

registerBlockType("home/block-01", {
  title: "Home Block 01",
  icon: "index-card",
  category: "layout",
  //入力された値を保存するための属性を設定
  attributes: {
    //RichText heading
    heading: {
      type: "array",
      source: "children",
      selector: "h2",
    },
    //RichText のsubHeading
    subHeading: {
      type: "array",
      source: "children",
      selector: "h3",
    },
    //RichText のリスト（ul/li）
    list: {
      type: "array",
      source: "children",
      selector: ".list",
    },
    //RichText button
    buttonLable: {
      type: "array",
      source: "children",
      selector: "h4",
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
      attributes: { heading, subHeading, list, buttonLable,mediaID, mediaURL },
      setAttributes,
    } = props;
    //タイトルを更新するハンドラ
    const onChangeheading = (value) => {
      setAttributes({ heading: value });
    };

    //subHeadingを更新するハンドラ
    const onChangeSubHeading = (value) => {
      setAttributes({ subHeading: value });
    };

    //リストを更新するハンドラ
    const onChangelist = (value) => {
      setAttributes({ list: value });
    };

    //リストを更新するハンドラ
    const onChangeButtonLable = (value) => {
      setAttributes({ buttonLable: value });
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
      <div className={`${className} container`}>
        <div className="content-wrapper">
          <RichText
            tagName="h2"
            placeholder="heading"
            value={heading}
            onChange={onChangeheading}
          />
          <RichText
            tagName="h3"
            className="subHeading"
            placeholder="sub heading"
            value={subHeading}
            onChange={onChangeSubHeading}
          />
          <RichText
            tagName="ul"
            multiline="li"
            placeholder="list"
            value={list}
            onChange={onChangelist}
            className="list"
          />
          <RichText
            tagName="h4"
            className="buttonLable"
            placeholder="buttonLable"
            value={buttonLable}
            onChange={onChangeButtonLable}
          />
        </div>

        <div className="image-wrapper">
          <MediaUploadCheck>
            <MediaUpload
              onSelect={onSelectImage}
              allowedTypes={["image"]}
              value={mediaID}
              render={({ open }) => (
                <Button
                  className={mediaID ? "image-button" : "button button-large"}
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
      attributes: { heading, subHeading, list, buttonLable, mediaURL },
    } = props;
    return (
      <div className={`${className} container`}>
        <div className="content-wrapper">
          <RichText.Content tagName="h2" className="heading" value={heading} />
          <RichText.Content
            tagName="h3"
            className="subHeading"
            value={subHeading}
          />
          <RichText.Content tagName="ul" className="list" value={list} />
          <RichText.Content
            tagName="h4"
            className="buttonLable"
            value={buttonLable}
          />
        </div>
        {mediaURL && (
          <div className="image-wrapper">
            <img src={mediaURL} alt="画像" />
          </div>
        )}
      </div>
    );
  },
});
