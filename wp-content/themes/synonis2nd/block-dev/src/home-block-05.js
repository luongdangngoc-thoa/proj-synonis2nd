import { registerBlockType } from "@wordpress/blocks";
//RichText, MediaUpload, MediaUploadCheck を block-editor パッケージからインポート
import {
    RichText,
    MediaUpload,
    MediaUploadCheck,
} from "@wordpress/block-editor";
// Button を components パッケージからインポート
import { Button } from "@wordpress/components";
import "./home-style-05.scss";
import "./home-editor-05.scss";

registerBlockType("home/block-05", {
    title: "Home Block 05",
    icon: "index-card",
    category: "layout",
    //入力された値を保存するための属性を設定
    attributes: {
        //RichText のheading
        heading: {
            type: "array",
            source: "children",
            selector: "h2",
            default: "ご相談からご依頼までの流れ",
        },
        //RichText のsubHeading
        subHeading: {
            type: "array",
            source: "children",
            selector: "h3",
            default:
                "相続手続きをお手伝いさせていただくに私たちの想い、私たちが大切にしていることがあります",
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
            selector: "img.image_01",
            attribute: "src",
        },
        //RichText の title
        title_01: {
            type: "array",
            source: "children",
            selector: ".title_01",
            default: "お問い合わせ",
        },
        //RichText の desc
        description_01: {
            type: "array",
            source: "children",
            selector: ".desc_01",
            default: "まずは、お電話かメールにてお問い合わせください。",
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
            selector: "img.image_02",
            attribute: "src",
        },
        //RichText の title
        title_02: {
            type: "array",
            source: "children",
            selector: ".title_02",
            default: "無料相談",
        },
        //RichText の desc
        description_02: {
            type: "array",
            source: "children",
            selector: ".desc_02",
            default: "ご相談内容をしっかりとお聞きし、解決方法を提案します。",
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
            selector: "img.image_03",
            attribute: "src",
        },
        //RichText の title
        title_03: {
            type: "array",
            source: "children",
            selector: ".title_03",
            default: "見積もり・ご検討",
        },
        //RichText の desc
        description_03: {
            type: "array",
            source: "children",
            selector: ".desc_03",
            default: "費用について見積もりを提示いたします。じっくりご検討ください。",
        },
        //MediaUpload の value の値（選択された画像から取得）
        mediaID_04: {
            type: "number",
            default: 0,
        },
        //MediaUpload の画像の URL（選択された画像から取得）
        mediaURL_04: {
            type: "string",
            source: "attribute",
            selector: "img.image_04",
            attribute: "src",
        },
        //RichText の title
        title_04: {
            type: "array",
            source: "children",
            selector: ".title_04",
            default: "ご依頼",
        },
        //RichText の desc
        description_04: {
            type: "array",
            source: "children",
            selector: ".desc_04",
            default: "ご検討の上、ご納得いただいた場合は、正式にご依頼ください。",
        },
        //RichText の desc
        text_bottom: {
            type: "array",
            source: "children",
            selector: ".text-bottom",
            default: "来所・訪問に加えてオンラインでもご相談に対応しております。",
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
                title_01,
                description_01,
                mediaID_02,
                mediaURL_02,
                title_02,
                description_02,
                mediaID_03,
                mediaURL_03,
                title_03,
                description_03,
                mediaID_04,
                mediaURL_04,
                title_04,
                description_04,
                mediaID_05,
                mediaURL_05,
                title_05,
                description_05,
                text_bottom
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
        //title を更新するハンドラ
        const onChangeTitle_01 = (value) => {
            setAttributes({ title_01: value });
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
        //title を更新するハンドラ
        const onChangeTitle_02 = (value) => {
            setAttributes({ title_02: value });
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
        //title を更新するハンドラ
        const onChangeTitle_03 = (value) => {
            setAttributes({ title_03: value });
        };

        //description を更新するハンドラ
        const onChangeDescription_03 = (value) => {
            setAttributes({ description_03: value });
        };

        const onSelectImage_04 = (media) => {
            setAttributes({
                mediaURL_04: media.url,
                mediaID_04: media.id,
            });
        };
        //画像を削除する（メディアをリセットする）ハンドラ
        const removeMedia_04 = () => {
            props.setAttributes({
                mediaID_04: 0,
                mediaURL_04: "",
            });
        };
        //title を更新するハンドラ
        const onChangeTitle_04 = (value) => {
            setAttributes({ title_04: value });
        };

        //description を更新するハンドラ
        const onChangeDescription_04 = (value) => {
            setAttributes({ description_04: value });
        };



        //description を更新するハンドラ
        const onChangeTextBottom = (value) => {
            setAttributes({ text_bottom: value });
        };

        text_bottom

        return (
          <div className={`${className} container`}>
            <div className="heading-wrapper">
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

            <div className="col-2">
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
                            <img
                              className="image_01"
                              src={mediaURL_01}
                              alt="アップロード画像"
                            />
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
                <div className="content-wrapper">
                  <RichText
                    tagName="h4"
                    className="title_01"
                    placeholder="title"
                    value={title_01}
                    onChange={onChangeTitle_01}
                  />
                  <RichText
                    tagName="p"
                    className="desc_01"
                    placeholder="description"
                    value={description_01}
                    onChange={onChangeDescription_01}
                  />
                </div>
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
                            <img
                              className="image_02"
                              src={mediaURL_02}
                              alt="アップロード画像"
                            />
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
                <div className="content-wrapper">
                  <RichText
                    tagName="h4"
                    className="title_02"
                    placeholder="title"
                    value={title_02}
                    onChange={onChangeTitle_02}
                  />
                  <RichText
                    tagName="p"
                    className="desc_02"
                    placeholder="description"
                    value={description_02}
                    onChange={onChangeDescription_02}
                  />
                </div>
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
                            <img
                              className="image_03"
                              src={mediaURL_03}
                              alt="アップロード画像"
                            />
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
                <div className="content-wrapper">
                  <RichText
                    tagName="h4"
                    className="title_01"
                    placeholder="title"
                    value={title_03}
                    onChange={onChangeTitle_03}
                  />
                  <RichText
                    tagName="p"
                    className="desc_03"
                    placeholder="description"
                    value={description_03}
                    onChange={onChangeDescription_03}
                  />
                </div>
              </div>

              <div className="col">
                <div className="image-wrapper">
                  <MediaUploadCheck>
                    <MediaUpload
                      onSelect={onSelectImage_04}
                      allowedTypes={["image"]}
                      value={mediaID_04}
                      render={({ open }) => (
                        <Button
                          className={
                            mediaID_04 ? "image-button" : "button button-large"
                          }
                          onClick={open}
                        >
                          {!mediaID_04 ? (
                            "画像をアップロード"
                          ) : (
                            <img
                              className="image_04"
                              src={mediaURL_04}
                              alt="アップロード画像"
                            />
                          )}
                        </Button>
                      )}
                    />
                  </MediaUploadCheck>
                  {mediaID_04 != 0 && (
                    <MediaUploadCheck>
                      <Button
                        onClick={removeMedia_04}
                        isDestructive
                        className="removeImage"
                      >
                        画像を削除
                      </Button>
                    </MediaUploadCheck>
                  )}
                </div>
                <div className="content-wrapper">
                  <RichText
                    tagName="h4"
                    className="title_04"
                    placeholder="title"
                    value={title_04}
                    onChange={onChangeTitle_04}
                  />
                  <RichText
                    tagName="p"
                    className="desc_04"
                    placeholder="description"
                    value={description_04}
                    onChange={onChangeDescription_04}
                  />
                </div>
              </div>

            </div>

            <div>
            <RichText
                tagName="p"
                placeholder="text bottom"
                value={text_bottom}
                onChange={onChangeTextBottom}
              />
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
                title_01,
                description_01,
                mediaURL_02,
                title_02,
                description_02,
                mediaURL_03,
                title_03,
                description_03,
                mediaURL_04,
                title_04,
                description_04,
                mediaURL_05,
                title_05,
                description_05,
                text_bottom
            },
        } = props;
        return (
            <div className={`${className} container`}>
                <div className="heading-wrapper">
                    <RichText.Content tagName="h2" className="heading" value={heading} />
                    <RichText.Content
                        tagName="h3"
                        className="SubHeading"
                        value={subHeading}
                    />
                </div>
                <div className="col-2">
                    <div className="col">
                        {mediaURL_01 && (
                            <div className="image-wrapper">
                                <img className="image_01" src={mediaURL_01} alt="画像" />
                            </div>
                        )}
                        <div className="content-wrapper">
                            <RichText.Content
                                tagName="h4"
                                className="title_01"
                                value={title_01}
                            />
                            <RichText.Content
                                tagName="p"
                                className="desc_01"
                                value={description_01}
                            />
                        </div>
                    </div>

                    <div className="col">
                        {mediaURL_02 && (
                            <div className="image-wrapper">
                                <img className="image_02" src={mediaURL_02} alt="画像" />
                            </div>
                        )}
                        <div className="content-wrapper">
                            <RichText.Content
                                tagName="h4"
                                className="title_02"
                                value={title_02}
                            />
                            <RichText.Content
                                tagName="p"
                                className="desc_02"
                                value={description_02}
                            />
                        </div>
                    </div>

                    <div className="col">
                        {mediaURL_03 && (
                            <div className="image-wrapper">
                                <img className="image_03" src={mediaURL_03} alt="画像" />
                            </div>
                        )}
                        <div className="content-wrapper">
                            <RichText.Content
                                tagName="h4"
                                className="title_03"
                                value={title_03}
                            />
                            <RichText.Content
                                tagName="p"
                                className="desc_03"
                                value={description_03}
                            />
                        </div>
                    </div>

                    <div className="col">
                        {mediaURL_04 && (
                            <div className="image-wrapper">
                                <img className="image_04" src={mediaURL_04} alt="画像" />
                            </div>
                        )}
                        <div className="content-wrapper">
                            <RichText.Content
                                tagName="h4"
                                className="title_04"
                                value={title_04}
                            />
                            <RichText.Content
                                tagName="p"
                                className="desc_04"
                                value={description_04}
                            />
                        </div>
                    </div>

                </div>

                <RichText.Content
                    tagName="p"
                    className="text-bottom"
                    value={text_bottom}
                />
            </div>
        );
    },
});
