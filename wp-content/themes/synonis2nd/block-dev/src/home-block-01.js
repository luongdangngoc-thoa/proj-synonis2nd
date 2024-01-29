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
    //RichText のタイトル
    title: {
      type: "array",
      source: "children",
      selector: "h3",
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
    //RichText のsubタイトル
    subTitle: {
        type: "array",
        source: "children",
        selector: "h4",
      },
    //RichText のリスト（ul/li）
    data: {
      type: "array",
      source: "children",
      selector: ".data",
    },
  },

  edit: (props) => {
    // props からプロパティを抽出（分割代入）
    const {
      className,
      attributes: { title, mediaID, mediaURL, data, subTitle },
      setAttributes,
    } = props;
    //タイトルを更新するハンドラ
    const onChangeTitle = (value) => {
      setAttributes({ title: value });
    };
    //選択された画像の情報（URLとID）を更新するハンドラ
    const onSelectImage = (media) => {
      setAttributes({
        mediaURL: media.url,
        mediaID: media.id,
      });
    };
    //subTitleを更新するハンドラ
    const onChangeSubTitle = (value) => {
        setAttributes({ subTitle: value });
      };
    //リストを更新するハンドラ
    const onChangeData = (value) => {
      setAttributes({ data: value });
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
          tagName="h3"
          placeholder="Title"
          value={title}
          onChange={onChangeTitle}
        />
        <RichText
          tagName="h4"
          className="subTitle"
          placeholder="sub title"
          value={subTitle}
          onChange={onChangeSubTitle}
        />
        <RichText
          tagName="ul"
          multiline="li"
          placeholder="list data"
          value={data}
          onChange={onChangeData}
          className="data"
        />
        </div>

        <div className="banner-image">
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
      attributes: { title, mediaURL, data, subTitle },
    } = props;
    return (
 
        <div className={`${className} container`}>
            <div className="content-wrapper">
            <RichText.Content tagName="h3" className="title" value={title} />
            <RichText.Content tagName="h4" className="subTitle" value={subTitle} />
            <RichText.Content tagName="ul" className="data" value={data} />
            </div>
            {mediaURL && <img className="banner-image" src={mediaURL} alt="画像" />}
        </div>
    );
  },
});
