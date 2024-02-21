<?php
function common_QA_list_enqueue()
{
    $asset_file = include(get_theme_file_path('/custom-blocks/build/common-qa-list.asset.php'));

    wp_register_script(
        'common-qa-list',
        get_theme_file_uri('/custom-blocks/build/common-qa-list.js'),
        $asset_file['dependencies'],
        $asset_file['version']
    );

    //フロント&エディター用スタイル（追加）
    wp_register_style(
        'common-qa-list-style', 
        get_theme_file_uri('/custom-blocks/build/style-common-qa-list.css'),
        array(),
        filemtime(get_theme_file_path('/custom-blocks/build/style-common-qa-list.css'))
    );

    //エディター用スタイル（追加）
    // wp_register_style(
    //     'common-qa-list-editor-style', 
    //     get_theme_file_uri('/custom-blocks/build/common-qa-list.css'),
    //     array('wp-edit-blocks'),  
    //     filemtime(get_theme_file_path('/custom-blocks/build/common-qa-list.css'))
    // );

    //ブロックタイプの登録
    register_block_type(
        'common/qa-list',
        array(
            'editor_script' => 'common-qa-list',
            //フロント&エディター用スタイルのハンドル名を style に指定（追加）
            'style' => 'common-qa-list-style',
            //エディター用スタイルのハンドル名を editor_style に指定（追加）
            // 'editor_style' => 'common-title-value-group-editor-style',
        )
    );
}
add_action('init', 'common_QA_list_enqueue');
