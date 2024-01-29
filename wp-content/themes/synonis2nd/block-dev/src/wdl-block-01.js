
import "./style.scss";
import "./editor.scss";

import { registerBlockType } from "@wordpress/blocks";
import { TextControl, TextareaControl } from "@wordpress/components";

registerBlockType("wdl/block-01", {
  title: "WDL Sample Block 01",
  icon: "smiley",
  category: "text",
  //入力された値を保存するための属性を追加
  attributes: {
    //TextControl の値を保持する属性
    myTextInput: {
      type: "string",
      default: "",
    },
    //TextareaControl の値を保持する属性
    myTextAreaInput: {
      type: "string",
      default: "",
    },
  },

  edit: (props) => {
    // props を変数に分割代入
    const { attributes, setAttributes } = props;
    return (
      <div>
        <TextControl
          label="Text input:"
          //値は属性から取得
          value={attributes.myTextInput}
          //onChange イベントで setAttributes を使って値を更新
          onChange={(newText) => setAttributes({ myTextInput: newText })}
        />
        <TextareaControl
          label="Textarea:"
          value={attributes.myTextAreaInput}
          onChange={(newText) => setAttributes({ myTextAreaInput: newText })}
        />
      </div>
    );
  },

  save: (props) => {
    const { attributes } = props;
    //値はそれぞれの属性から取得
    return (
      <div>
        <h3>{attributes.myTextInput}</h3>
        <div>{attributes.myTextAreaInput}</div>
      </div>
    );
  },
});