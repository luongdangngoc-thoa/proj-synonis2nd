<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package synonis
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'synonis' ); ?></a>

	<header>
		<nav id="site-navigation" class="main-navigation">
				<div class="container_ws">
					<!-- Brand and toggle get grouped for better mobile display -->
					<button class="navbartoggler" type="button" data-bs-toggle="collapse" data-bs-target="#bs-example-navbar-collapse-1" aria-controls="bs-example-navbar-collapse-1" aria-expanded="false" aria-label="<?php esc_attr_e('Toggle navigation', 'your-theme-slug'); ?>">
						<span class="navbar-toggler-icon"></span>
					</button>
					<p class="navbarbrand" href="">015 まほろば○○○事務所</p>
					<?php
					wp_nav_menu(array(
						'theme_location'    => 'primary',
						'depth'             => 2,
						'container'         => 'div',
						'container_class'   => 'navbarcollapse',
						'container_id'      => 'bs-example-navbar-collapse-1',
						'menu_class'        => 'navbar_nav',
						'fallback_cb'       => 'WP_Bootstrap_Navwalker::fallback',
						'walker'            => new WP_Bootstrap_Navwalker(),
					));
					?>
				</div>
			</nav><!-- #site-navigation -->
	</header><!-- #masthead -->
