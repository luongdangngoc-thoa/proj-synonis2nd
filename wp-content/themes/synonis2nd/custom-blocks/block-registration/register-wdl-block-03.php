<?php
function wdl_block_03_enqueue()
{
    $asset_file = include(get_theme_file_path('/custom-blocks/build/wdl-block-03.asset.php'));

    wp_register_script(
        'wdl-block-03',
        get_theme_file_uri('/custom-blocks/build/wdl-block-03.js'),
        $asset_file['dependencies'],
        $asset_file['version']
    );

    //フロント&エディター用スタイル（追加）
    wp_register_style(
        'wdl-block-03-style', //ハンドル名
        //style.scss は build ディレクトリに style-wdl-block-03.css として出力される
        get_theme_file_uri('/custom-blocks/build/style-wdl-block-01.css'),
        array(),
        filemtime(get_theme_file_path('/custom-blocks/build/style-wdl-block-01.css'))
    );

    //エディター用スタイル（追加）
    wp_register_style(
        'wdl-block-03-editor-style', //ハンドル名
        //editor.scss は build ディレクトリに wdl-block-03.css として出力される
        get_theme_file_uri('/custom-blocks/build/wdl-block-01.css'),
        array('wp-edit-blocks'),  //依存スタイルのハンドル
        filemtime(get_theme_file_path('/custom-blocks/build/wdl-block-01.css'))
    );

    //ブロックタイプの登録



    
    register_block_type(
        'wdl/block-03',
        array(
            'editor_script' => 'wdl-block-03',
            //フロント&エディター用スタイルのハンドル名を style に指定（追加）
            'style' => 'wdl-block-03-style',
            //エディター用スタイルのハンドル名を editor_style に指定（追加）
            'editor_style' => 'wdl-block-03-editor-style',
        )
    );
}
add_action('init', 'wdl_block_03_enqueue');
