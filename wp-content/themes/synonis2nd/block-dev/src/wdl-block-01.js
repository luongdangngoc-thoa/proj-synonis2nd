import { registerBlockType } from "@wordpress/blocks";

registerBlockType("wdl/block-01", {
  title: "WDL Sample Block 01",
  icon: "smiley",
  category: "text",
  edit: () => <div>Hello World! (Edit)</div>,
  save: () => <div>Hello World! (Save)</div>,
});
