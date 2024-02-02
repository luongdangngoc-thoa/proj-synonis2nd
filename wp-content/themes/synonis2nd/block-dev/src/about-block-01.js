import { registerBlockType } from "@wordpress/blocks";
//RichText, MediaUpload, MediaUploadCheck を block-editor パッケージからインポート
import {
  RichText,
  MediaUpload,
  MediaUploadCheck,
} from "@wordpress/block-editor";
// Button を components パッケージからインポート
import { Button } from "@wordpress/components";
import "./about-style-01.scss";
import "./about-editor-01.scss";

registerBlockType("about/block-01", {
  title: "about Block 01",
  icon: "index-card",
  category: "layout",
  //入力された値を保存するための属性を設定
  attributes: {
    //RichText heading
    heading: {
      type: "array",
      source: "children",
      selector: "h2",
      default: "相続発生後の手続きは私たちにお任せてください。",
    },
    //RichText のsubHeading
    subHeading: {
      type: "array",
      source: "children",
      selector: "h3",
      default: "こんなお悩みありますか？",
    },
    // RichText のリスト（ul/li）
    description: {
      type: "array",
      source: "children",
      selector: ".desc",
      default:
        "当事務所は、主に〇O県·〇〇県·〇〇県の起業家·中小企業経営者の皆さまからのご相談に対応しております。",
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
      selector: "img.image-01",
      attribute: "src",
    },
  },

  edit: (props) => {
    // props からプロパティを抽出（分割代入）
    const {
      className,
      attributes: { heading, subHeading,description, mediaID, mediaURL },
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
    const onChangedescription = (value) => {
      setAttributes({ description: value });
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
        <div className="custom_block_1">
        <RichText
            tagName="h2"
            placeholder="Heading"
            value={heading}
            onChange={onChangeheading}
          />
        </div>
        <div className="content-wrapper">
        <div className="content-about" > 
          <RichText
            tagName="h3"
            className="subHeading"
            placeholder="Sub heading"
            value={subHeading}
            onChange={onChangeSubHeading}
          />
           <RichText
            tagName="p"
            className="description"
            placeholder="sub heading"
            value={description}
            onChange={onChangedescription}
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
      </div>
    );
  },
  save: (props) => {
    const {
      className,
      attributes: { heading, subHeading,description,mediaURL },
    } = props;
    return (
      <div className={`${className} container`}>
        <div className="custom_block_1">
        <RichText.Content tagName="h2" className="heading" value={heading} />
        </div>
        <div className="content-wrapper"> 
        <div className="content-about">
          <RichText.Content
            tagName="h3"
            className="subHeading"
            value={subHeading}
          />
          <RichText.Content
            tagName="p"
            className="desc"
            value={description}
          />
          </div>
          {mediaURL && (
          <div className="image-wrapper">
            <img src={mediaURL} alt="画像" />
          </div>
        )}
        </div>
      </div>
    );
  },
});
