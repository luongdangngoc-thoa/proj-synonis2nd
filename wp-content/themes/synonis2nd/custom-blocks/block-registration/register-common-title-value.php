<?php
function common_title_value_enqueue()
{
    $asset_file = include(get_theme_file_path('/custom-blocks/build/common-title-value.asset.php'));

    wp_register_script(
        'common-title-value',
        get_theme_file_uri('/custom-blocks/build/common-title-value.js'),
        $asset_file['dependencies'],
        $asset_file['version']
    );

    //フロント&エディター用スタイル（追加）
    wp_register_style(
        'common-title-value-style', //ハンドル名
        //style.scss は build ディレクトリに style-common-title-value.css として出力される
        get_theme_file_uri('/custom-blocks/build/style-common-title-value.css'),
        array(),
        filemtime(get_theme_file_path('/custom-blocks/build/style-common-title-value.css'))
    );

    //エディター用スタイル（追加）
    // wp_register_style(
    //     'common-title-value-editor-style', 
    //     get_theme_file_uri('/custom-blocks/build/common-title-value.css'),
    //     array('wp-edit-blocks'),  //依存スタイルのハンドル
    //     filemtime(get_theme_file_path('/custom-blocks/build/common-title-value.css'))
    // );

    //ブロックタイプの登録



    
    register_block_type(
        'common/block-title-value',
        array(
            'editor_script' => 'common-title-value',
            //フロント&エディター用スタイルのハンドル名を style に指定（追加）
            'style' => 'common-title-value-style',
            //エディター用スタイルのハンドル名を editor_style に指定（追加）
            // 'editor_style' => 'common-title-value-editor-style',
        )
    );
}
add_action('init', 'common_title_value_enqueue');
