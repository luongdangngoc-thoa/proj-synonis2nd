<div class="pc-header-wrapper">
    <div class="pc-header">
        <div class="header-logo">
                <?php 
                the_custom_logo();
                ?>
        </div>

        <nav>
            <?php
            $header_menu_defaults = array(
                'theme_location'  => 'primary_menu',
                'menu'            => 'primary_menu',
                'container'       => '',
                'container_id'    => '',
                'menu_class'      => 'header-nav',
                'menu_id'         => 'header-nav',
                'list_item_class' => 'header-nav-item',
                'link_class' => 'header-nav-link',
                'echo'            => true,
                'fallback_cb'     => 'wp_page_menu',
                'depth'           => 0,
                'walker'         => ''
            );
            wp_nav_menu($header_menu_defaults);
            ?>
        </nav>

    </div>
</div>