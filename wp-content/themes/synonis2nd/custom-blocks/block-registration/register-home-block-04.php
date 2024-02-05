<?php
function home_block_04_enqueue()
{
    $asset_file = include(get_theme_file_path('/custom-blocks/build/home-block-04.asset.php'));

    wp_register_script(
        'home-block-04',
        get_theme_file_uri('/custom-blocks/build/home-block-04.js'),
        $asset_file['dependencies'],
        $asset_file['version']
    );

    //フロント&エディター用スタイル（追加）
    wp_register_style(
        'home-block-04-style', //ハンドル名
        //style.scss は build ディレクトリに style-home-block-04.css として出力される
        get_theme_file_uri('/custom-blocks/build/style-home-block-04.css'),
        array(),
        filemtime(get_theme_file_path('/custom-blocks/build/style-home-block-04.css'))
    );

    //エディター用スタイル（追加）
    wp_register_style(
        'home-block-04-editor-style', //ハンドル名
        //editor.scss は build ディレクトリに home-block-04.css として出力される
        get_theme_file_uri('/custom-blocks/build/home-block-04.css'),
        array('wp-edit-blocks'),  //依存スタイルのハンドル
        filemtime(get_theme_file_path('/custom-blocks/build/home-block-04.css'))
    );

    //ブロックタイプの登録



    
    register_block_type(
        'home/block-04',
        array(
            'editor_script' => 'home-block-04',
            //フロント&エディター用スタイルのハンドル名を style に指定（追加）
            'style' => 'home-block-04-style',
            //エディター用スタイルのハンドル名を editor_style に指定（追加）
            'editor_style' => 'home-block-04-editor-style',
        )
    );
}
add_action('init', 'home_block_04_enqueue');
