<?php
function home_block_02_enqueue()
{
    $asset_file = include(get_theme_file_path('/custom-blocks/build/home-block-02.asset.php'));

    wp_register_script(
        'home-block-02',
        get_theme_file_uri('/custom-blocks/build/home-block-02.js'),
        $asset_file['dependencies'],
        $asset_file['version']
    );

    //フロント&エディター用スタイル（追加）
    wp_register_style(
        'home-block-02-style', //ハンドル名
        //style.scss は build ディレクトリに style-home-block-02.css として出力される
        get_theme_file_uri('/custom-blocks/build/style-home-block-02.css'),
        array(),
        filemtime(get_theme_file_path('/custom-blocks/build/style-home-block-02.css'))
    );

    //エディター用スタイル（追加）
    wp_register_style(
        'home-block-02-editor-style', //ハンドル名
        //editor.scss は build ディレクトリに home-block-02.css として出力される
        get_theme_file_uri('/custom-blocks/build/home-block-02.css'),
        array('wp-edit-blocks'),  //依存スタイルのハンドル
        filemtime(get_theme_file_path('/custom-blocks/build/home-block-02.css'))
    );

    //ブロックタイプの登録



    
    register_block_type(
        'home/block-02',
        array(
            'editor_script' => 'home-block-02',
            //フロント&エディター用スタイルのハンドル名を style に指定（追加）
            'style' => 'home-block-02-style',
            //エディター用スタイルのハンドル名を editor_style に指定（追加）
            'editor_style' => 'home-block-02-editor-style',
        )
    );
}
add_action('init', 'home_block_02_enqueue');
