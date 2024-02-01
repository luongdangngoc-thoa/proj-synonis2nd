import { registerBlockType } from "@wordpress/blocks";
//RichText, MediaUpload, MediaUploadCheck を block-editor パッケージからインポート
import {
  RichText,
  MediaUpload,
  MediaUploadCheck,
} from "@wordpress/block-editor";
// Button を components パッケージからインポート
import { Button } from "@wordpress/components";
import "./home-style-02.scss";
import "./home-editor-02.scss";

registerBlockType("home/block-02", {
  title: "Home Block 02",
  icon: "index-card",
  category: "layout",
  //入力された値を保存するための属性を設定
  attributes: {
    //RichText のheading
    heading: {
      type: "array",
      source: "children",
      selector: "h2",
      default: "大切な資産と想♡を確実に安心して引き継ぐために",
    },
    //RichText のdescription
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
      selector: "img",
      attribute: "src",
    },
  },

  edit: (props) => {
    // props からプロパティを抽出（分割代入）
    const {
      className,
      attributes: { heading, description, mediaID, mediaURL },
      setAttributes,
    } = props;
    //タイトルを更新するハンドラ
    const onChangeheading = (value) => {
      setAttributes({ heading: value });
    };
    //選択された画像の情報（URLとID）を更新するハンドラ
    const onSelectImage = (media) => {
      setAttributes({
        mediaURL: media.url,
        mediaID: media.id,
      });
    };
    //descriptionを更新するハンドラ
    const onChangedescription = (value) => {
      setAttributes({ description: value });
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
                isLink
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
      attributes: { heading, description, mediaURL },
    } = props;
    return (
      <div className={`${className} container`}>
        <div className="content-wrapper">
          <RichText.Content tagName="h2" className="heading" value={heading} />
          <RichText.Content tagName="p" className="desc" value={description} />
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
