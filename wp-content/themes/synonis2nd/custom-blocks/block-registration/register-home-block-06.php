<?php
function home_block_06_enqueue()
{
    $asset_file = include(get_theme_file_path('/custom-blocks/build/home-block-06.asset.php'));

    wp_register_script(
        'home-block-06',
        get_theme_file_uri('/custom-blocks/build/home-block-06.js'),
        $asset_file['dependencies'],
        $asset_file['version']
    );

    //フロント&エディター用スタイル（追加）
    wp_register_style(
        'home-block-06-style', //ハンドル名
        //style.scss は build ディレクトリに style-home-block-06.css として出力される
        get_theme_file_uri('/custom-blocks/build/style-home-block-06.css'),
        array(),
        filemtime(get_theme_file_path('/custom-blocks/build/style-home-block-06.css'))
    );

    //エディター用スタイル（追加）
    wp_register_style(
        'home-block-06-editor-style', //ハンドル名
        //editor.scss は build ディレクトリに home-block-06.css として出力される
        get_theme_file_uri('/custom-blocks/build/home-block-06.css'),
        array('wp-edit-blocks'),  //依存スタイルのハンドル
        filemtime(get_theme_file_path('/custom-blocks/build/home-block-06.css'))
    );

    //ブロックタイプの登録



    
    register_block_type(
        'home/block-06',
        array(
            'editor_script' => 'home-block-06',
            //フロント&エディター用スタイルのハンドル名を style に指定（追加）
            'style' => 'home-block-06-style',
            //エディター用スタイルのハンドル名を editor_style に指定（追加）
            'editor_style' => 'home-block-06-editor-style',
        )
    );
}
add_action('init', 'home_block_06_enqueue');
