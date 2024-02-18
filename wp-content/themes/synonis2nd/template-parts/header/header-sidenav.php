<div id="js_sidenav" class="sidenav">
    <img class="closebtn" id="closebtn" onclick="closeNav()" src="<?php bloginfo('template_directory'); ?>/assets/images/close.svg"></img>

    <?php
    $sidenav = array(
        'theme_location'  => 'primary_menu',
        'menu'            => 'primary_menu',
        'container'       => '',
        'container_id'    => '',
        'menu_class'      => 'sidenav-inner',
        'menu_id'         => '',
        'list_item_class' => 'header-nav-item',
        'link_class' => 'header-nav-link',
        'echo'            => true,
        'fallback_cb'     => 'wp_page_menu',
        'depth'           => 0,
        'walker'         => ''
    );
    wp_nav_menu($sidenav);
    ?>

</div>