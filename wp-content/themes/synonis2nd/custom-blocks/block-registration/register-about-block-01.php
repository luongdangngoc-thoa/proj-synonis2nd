<?php
function about_block_01_enqueue()
{
    $asset_file = include(get_theme_file_path('/custom-blocks/build/about-block-01.asset.php'));

    wp_register_script(
        'about-block-01',
        get_theme_file_uri('/custom-blocks/build/about-block-01.js'),
        $asset_file['dependencies'],
        $asset_file['version']
    );

    //フロント&エディター用スタイル（追加）
    wp_register_style(
        'about-block-01-style', //ハンドル名
        //style.scss は build ディレクトリに style-about-block-01.css として出力される
        get_theme_file_uri('/custom-blocks/build/style-about-block-01.css'),
        array(),
        filemtime(get_theme_file_path('/custom-blocks/build/style-about-block-01.css'))
    );

    //エディター用スタイル（追加）
    wp_register_style(
        'about-block-01-editor-style', //ハンドル名
        //editor.scss は build ディレクトリに about-block-01.css として出力される
        get_theme_file_uri('/custom-blocks/build/about-block-01.css'),
        array('wp-edit-blocks'),  //依存スタイルのハンドル
        filemtime(get_theme_file_path('/custom-blocks/build/about-block-01.css'))
    );

    //ブロックタイプの登録



    
    register_block_type(
        'about/block-01',
        array(
            'editor_script' => 'about-block-01',
            //フロント&エディター用スタイルのハンドル名を style に指定（追加）
            'style' => 'about-block-01-style',
            //エディター用スタイルのハンドル名を editor_style に指定（追加）
            'editor_style' => 'about-block-01-editor-style',
        )
    );
}
add_action('init', 'about_block_01_enqueue');
