<?php
function common_contact_button_enqueue()
{
    $asset_file = include(get_theme_file_path('/custom-blocks/build/common-contactButton.asset.php'));

    wp_register_script(
        'common-contactButton',
        get_theme_file_uri('/custom-blocks/build/common-contactButton.js'),
        $asset_file['dependencies'],
        $asset_file['version']
    );

    //フロント&エディター用スタイル（追加）
    wp_register_style(
        'common-contactButton-style', //ハンドル名
        //style.scss は build ディレクトリに style-common-contactButton.css として出力される
        get_theme_file_uri('/custom-blocks/build/style-common-contactButton.css'),
        array(),
        filemtime(get_theme_file_path('/custom-blocks/build/style-common-contactButton.css'))
    );

    //エディター用スタイル（追加）
    wp_register_style(
        'common-contactButton-editor-style', //ハンドル名
        //editor.scss は build ディレクトリに common-contactButton.css として出力される
        get_theme_file_uri('/custom-blocks/build/common-contactButton.css'),
        array('wp-edit-blocks'),  //依存スタイルのハンドル
        filemtime(get_theme_file_path('/custom-blocks/build/common-contactButton.css'))
    );

    //ブロックタイプの登録



    
    register_block_type(
        'common/contact-button',
        array(
            'editor_script' => 'common-contactButton',
            //フロント&エディター用スタイルのハンドル名を style に指定（追加）
            'style' => 'common-contactButton-style',
            //エディター用スタイルのハンドル名を editor_style に指定（追加）
            'editor_style' => 'common-contactButton-editor-style',
        )
    );
}
add_action('init', 'common_contact_button_enqueue');
