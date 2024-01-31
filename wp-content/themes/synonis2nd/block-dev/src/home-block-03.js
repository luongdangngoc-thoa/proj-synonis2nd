import { registerBlockType } from "@wordpress/blocks";
//RichText, MediaUpload, MediaUploadCheck を block-editor パッケージからインポート
import {
  RichText,
  MediaUpload,
  MediaUploadCheck,
} from "@wordpress/block-editor";
// Button を components パッケージからインポート
import { Button } from "@wordpress/components";
import "./home-style-03.scss";
import "./home-editor-03.scss";

registerBlockType("home/block-03", {
  title: "Home Block 03",
  icon: "index-card",
  category: "layout",
  //入力された値を保存するための属性を設定
  attributes: {
    //RichText のheading
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
    //MediaUpload の value の値（選択された画像から取得）
    mediaID_01: {
      type: "number",
      default: 0,
    },
    //MediaUpload の画像の URL（選択された画像から取得）
    mediaURL_01: {
      type: "string",
      source: "attribute",
      selector: "img.image",
      attribute: "src",
    },
    //RichText の desc
    description_01: {
      type: "array",
      source: "children",
      selector: ".desc_01",
    },
    //MediaUpload の value の値（選択された画像から取得）
    mediaID_02: {
      type: "number",
      default: 0,
    },
    //MediaUpload の画像の URL（選択された画像から取得）
    mediaURL_02: {
      type: "string",
      source: "attribute",
      selector: "img.image",
      attribute: "src",
    },
    //RichText の desc
    description_02: {
      type: "array",
      source: "children",
      selector: ".desc_02",
    },
    //MediaUpload の value の値（選択された画像から取得）
    mediaID_03: {
      type: "number",
      default: 0,
    },
    //MediaUpload の画像の URL（選択された画像から取得）
    mediaURL_03: {
      type: "string",
      source: "attribute",
      selector: "img.image",
      attribute: "src",
    },
    //RichText の desc
    description_03: {
      type: "array",
      source: "children",
      selector: ".desc_03",
    },
  },

  edit: (props) => {
    // props からプロパティを抽出（分割代入）
    const {
      className,
      attributes: {
        heading,
        subHeading,
        mediaID_01,
        mediaURL_01,
        description_01,
        mediaID_02,
        mediaURL_02,
        description_02,
        mediaID_03,
        mediaURL_03,
        description_03,
      },
      setAttributes,
    } = props;

    //タイトルを更新するハンドラ
    const onChangeHeading = (value) => {
      setAttributes({ heading: value });
    };

    //subHeadingを更新するハンドラ
    const onChangeSubHeading = (value) => {
      setAttributes({ subHeading: value });
    };
    //選択された画像の情報（URLとID）を更新するハンドラ
    const onSelectImage_01 = (media) => {
      setAttributes({
        mediaURL_01: media.url,
        mediaID_01: media.id,
      });
    };
    //画像を削除する（メディアをリセットする）ハンドラ
    const removeMedia_01 = () => {
      props.setAttributes({
        mediaID_01: 0,
        mediaURL_01: "",
      });
    };

    //description を更新するハンドラ
    const onChangeDescription_01 = (value) => {
      setAttributes({ description_01: value });
    };

    //選択された画像の情報（URLとID）を更新するハンドラ
    const onSelectImage_02 = (media) => {
      setAttributes({
        mediaURL_02: media.url,
        mediaID_02: media.id,
      });
    };
    //画像を削除する（メディアをリセットする）ハンドラ
    const removeMedia_02 = () => {
      props.setAttributes({
        mediaID_02: 0,
        mediaURL_02: "",
      });
    };

    //description を更新するハンドラ
    const onChangeDescription_02 = (value) => {
      setAttributes({ description_02: value });
    };

    //選択された画像の情報（URLとID）を更新するハンドラ
    const onSelectImage_03 = (media) => {
      setAttributes({
        mediaURL_03: media.url,
        mediaID_03: media.id,
      });
    };
    //画像を削除する（メディアをリセットする）ハンドラ
    const removeMedia_03 = () => {
      props.setAttributes({
        mediaID_03: 0,
        mediaURL_03: "",
      });
    };

    //description を更新するハンドラ
    const onChangeDescription_03 = (value) => {
      setAttributes({ description_03: value });
    };

    return (
      <div className={`${className} container`}>
        <div className="content-wrapper">
          <RichText
            tagName="h2"
            placeholder="heading"
            value={heading}
            onChange={onChangeHeading}
          />
          <RichText
            tagName="h3"
            className="SubHeading"
            placeholder="SubHeading"
            value={subHeading}
            onChange={onChangeSubHeading}
          />
        </div>

        <div className="col-3">
          <div className="col">
            <div className="image-wrapper">
              <MediaUploadCheck>
                <MediaUpload
                  onSelect={onSelectImage_01}
                  allowedTypes={["image"]}
                  value={mediaID_01}
                  render={({ open }) => (
                    <Button
                      className={
                        mediaID_01 ? "image-button" : "button button-large"
                      }
                      onClick={open}
                    >
                      {!mediaID_01 ? (
                        "画像をアップロード"
                      ) : (
                        <img className="image" src={mediaURL_01} alt="アップロード画像" />
                      )}
                    </Button>
                  )}
                />
              </MediaUploadCheck>
              {mediaID_01 != 0 && (
                <MediaUploadCheck>
                  <Button
                    onClick={removeMedia_01}
                    isDestructive
                    className="removeImage"
                  >
                    画像を削除
                  </Button>
                </MediaUploadCheck>
              )}
            </div>
            <RichText
              tagName="p"
              className="desc_01"
              placeholder="description"
              value={description_01}
              onChange={onChangeDescription_01}
            />
          </div>
          <div className="col">
            <div className="image-wrapper">
              <MediaUploadCheck>
                <MediaUpload
                  onSelect={onSelectImage_02}
                  allowedTypes={["image"]}
                  value={mediaID_02}
                  render={({ open }) => (
                    <Button
                      className={
                        mediaID_02 ? "image-button" : "button button-large"
                      }
                      onClick={open}
                    >
                      {!mediaID_02 ? (
                        "画像をアップロード"
                      ) : (
                        <img className="image" src={mediaURL_02} alt="アップロード画像" />
                      )}
                    </Button>
                  )}
                />
              </MediaUploadCheck>
              {mediaID_02 != 0 && (
                <MediaUploadCheck>
                  <Button
                    onClick={removeMedia_02}
                    isDestructive
                    className="removeImage"
                  >
                    画像を削除
                  </Button>
                </MediaUploadCheck>
              )}
            </div>
            <RichText
              tagName="p"
              className="desc_02"
              placeholder="description"
              value={description_02}
              onChange={onChangeDescription_02}
            />
          </div>
          <div className="col">
            <div className="image-wrapper">
              <MediaUploadCheck>
                <MediaUpload
                  onSelect={onSelectImage_03}
                  allowedTypes={["image"]}
                  value={mediaID_03}
                  render={({ open }) => (
                    <Button
                      className={
                        mediaID_03 ? "image-button" : "button button-large"
                      }
                      onClick={open}
                    >
                      {!mediaID_03 ? (
                        "画像をアップロード"
                      ) : (
                        <img className="image" src={mediaURL_03} alt="アップロード画像" />
                      )}
                    </Button>
                  )}
                />
              </MediaUploadCheck>
              {mediaID_03 != 0 && (
                <MediaUploadCheck>
                  <Button
                    onClick={removeMedia_03}
                    isDestructive
                    className="removeImage"
                  >
                    画像を削除
                  </Button>
                </MediaUploadCheck>
              )}
            </div>
            <RichText
              tagName="p"
              className="desc_03"
              placeholder="description"
              value={description_03}
              onChange={onChangeDescription_03}
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
        subHeading,
        mediaURL_01,
        description_01,
        mediaURL_02,
        description_02,
        mediaURL_03,
        description_03,
      },
    } = props;
    return (
      <div className={`${className} container`}>
        <div className="content-wrapper">
          <RichText.Content tagName="h2" className="heading" value={heading} />
          <RichText.Content
            tagName="h3"
            className="SubHeading"
            value={subHeading}
          />
        </div>
        <div className="col-3">
          <div className="col">
            {mediaURL_01 && (
              <div className="image-wrapper">
                <img className="image" src={mediaURL_01} alt="画像" />
              </div>
            )}
            <RichText.Content
              tagName="p"
              className="desc_01"
              value={description_01}
            />
          </div>
          <div className="col">
            {mediaURL_02 && (
              <div className="image-wrapper">
                <img className="image" src={mediaURL_02} alt="画像" />
              </div>
            )}
            <RichText.Content
              tagName="p"
              className="desc_02"
              value={description_02}
            />
          </div>
          <div className="col">
            {mediaURL_03 && (
              <div className="image-wrapper">
                <img className="image" src={mediaURL_03} alt="画像" />
              </div>
            )}
            <RichText.Content
              tagName="p"
              className="desc_03"
              value={description_03}
            />
          </div>
        </div>
      </div>
    );
  },
});
