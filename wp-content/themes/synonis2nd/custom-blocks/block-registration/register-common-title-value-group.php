<?php
function common_title_value_group_enqueue()
{
    $asset_file = include(get_theme_file_path('/custom-blocks/build/common-title-value-group.asset.php'));

    wp_register_script(
        'common-title-value-group',
        get_theme_file_uri('/custom-blocks/build/common-title-value-group.js'),
        $asset_file['dependencies'],
        $asset_file['version']
    );

    //フロント&エディター用スタイル（追加）
    // wp_register_style(
    //     'common-title-value-group-style',
    //     get_theme_file_uri('/custom-blocks/build/style-common-title-value-group.css'),
    //     array(),
    //     filemtime(get_theme_file_path('/custom-blocks/build/style-common-title-value-group.css'))
    // );

    //エディター用スタイル（追加）
    // wp_register_style(
    //     'common-title-value-group-editor-style', 
    //     get_theme_file_uri('/custom-blocks/build/common-title-value-group.css'),
    //     array('wp-edit-blocks'),  
    //     filemtime(get_theme_file_path('/custom-blocks/build/common-title-value-group.css'))
    // );

    //ブロックタイプの登録



    
    register_block_type(
        'common/title-value-group',
        array(
            'editor_script' => 'common-title-value-group',
            //フロント&エディター用スタイルのハンドル名を style に指定（追加）
            // 'style' => 'common-title-value-group-style',
            // 'editor_style' => 'common-title-value-group-editor-style',
        )
    );
}
add_action('init', 'common_title_value_group_enqueue');
