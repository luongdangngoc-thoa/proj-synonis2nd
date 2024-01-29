import { registerBlockType } from "@wordpress/blocks";
import { RichText } from "@wordpress/block-editor";

registerBlockType("wdl/block-03", {
  title: "WDL Sample Block 03",
  icon: "smiley",
  category: "layout",
  //入力された値を保存するための属性（myTitle と myContent）を設定
  attributes: {
    //タイトル（h3）の内容を保持するための属性
    myTitle: {
      type: "string",
      default: "",
    },
    //コンテンツ（div）の内容を保持するためのの属性
    myContent: {
      type: "string",
      default: "",
    },
  },

  edit: ({ className, attributes: { myTitle, myContent }, setAttributes }) => {
    return (
      <div className={className}>
        <RichText
          //値は属性から取得
          value={myTitle}
          //onChange イベントで setAttributes を使って値を更新
          onChange={(newTitle) => setAttributes({ myTitle: newTitle })}
          // h3 要素として表示
          tagName="h3"
          //プレースホルダーテキストを表示
          placeholder="タイトルを入力"
          //フォーカスされた際も文字が入力されるまでプレースホルダーテキストを表示
          keepPlaceholderOnFocus={true}
        />
        <RichText
          //値は属性から取得
          value={myContent}
          //onChange イベントで setAttributes を使って値を更新
          onChange={(newContent) => setAttributes({ myContent: newContent })}
          // div 要素として表示
          tagName="div"
          // 'p' を設定して Enter キーで新しい段落（p 要素）を生成
          multiline="p"
          //プレースホルダーテキストを表示
          placeholder="文章を入力"
          //フォーカスされた際も文字が入力されるまでプレースホルダーテキストを表示
          keepPlaceholderOnFocus={true}
        />
      </div>
    );
  },

  save: ({ attributes: { myTitle, myContent } }) => {
    //save 関数では RichText.Content を使います
    return (
      <div>
        <RichText.Content
          //値は属性から取得
          value={myTitle}
          // h3 要素として表示
          tagName="h3"
        />
        <RichText.Content
          //値は属性から取得
          value={myContent}
          // div 要素として表示
          tagName="div"
        />
      </div>
    );
  },
});
