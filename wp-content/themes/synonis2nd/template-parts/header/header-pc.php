<div class="pc-header-wrapper">
    <div class="pc-header">
        <div class="header-logo">
            <a href="<?php echo site_url() ?>">
                <?php 
                the_custom_logo();
                ?>
            </a>
        </div>

        <nav>
            <?php
            $header_menu_defaults = array(
                'theme_location'  => '',
                'menu'            => 'main-menu',
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