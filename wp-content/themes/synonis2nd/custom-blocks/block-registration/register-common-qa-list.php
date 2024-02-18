<?php
function common_qa_list_enqueue()
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
        'common-qa-list-style', //ハンドル名
        //style.scss は build ディレクトリに style-common-qa-list.css として出力される
        get_theme_file_uri('/custom-blocks/build/style-common-qa.css'),
        array(),
        filemtime(get_theme_file_path('/custom-blocks/build/style-common-qa.css'))
    );

    //エディター用スタイル（追加）
    wp_register_style(
        'common-qa-list-editor-style', //ハンドル名
        //editor.scss は build ディレクトリに common-qa-list.css として出力される
        get_theme_file_uri('/custom-blocks/build/common-qa-list.css'),
        array('wp-edit-blocks'),  //依存スタイルのハンドル
        filemtime(get_theme_file_path('/custom-blocks/build/common-qa-list.css'))
    );

    //ブロックタイプの登録



    
    register_block_type(
        'common/block-qa-list',
        array(
            'editor_script' => 'common-qa-list',
            //フロント&エディター用スタイルのハンドル名を style に指定（追加）
            'style' => 'common-qa-list-style',
            //エディター用スタイルのハンドル名を editor_style に指定（追加）
            'editor_style' => 'common-qa-list-editor-style',
        )
    );
}
add_action('init', 'common_qa_list_enqueue');
