<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'proj-synonis2nd' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

if ( !defined('WP_CLI') ) {
    define( 'WP_SITEURL', $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['HTTP_HOST'] );
    define( 'WP_HOME',    $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['HTTP_HOST'] );
}



/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'qOgutNcFCINStY7zv18DOWZUBI2LnF2Rbh9Ogp0veCQlt0SwqFjiTPOKCv5pHWY1' );
define( 'SECURE_AUTH_KEY',  'lrgsIyErN8l5e8rNuweEp7a1ZuIc8fzNt0YnzbYOV6MAPmIyITudQOnnkj2PEgHr' );
define( 'LOGGED_IN_KEY',    '1qwSL9lwxgLvPxU1RNWHQgDg3ab1fcMWr9cOHrf9BHxfPsxDukukuTqa4E1V7NmQ' );
define( 'NONCE_KEY',        'hsGr3XV5ExsNbjzKPb1jwX4f7dgSWJYntiZ46qc2f334QnRg2zHJcCdHQNyxjEmI' );
define( 'AUTH_SALT',        'c6GqgImQPW1ZWtTXNH8k88eluYXjGjwkKaPBnc2jWvYicAGijNSE9BMkxBvXgY70' );
define( 'SECURE_AUTH_SALT', 'VJDY8BKlGocC6jPq5MV8Q3SjSWYhIF5Uy8s5ikFSDQL73cgBYVaIBpdPLNJD6XwO' );
define( 'LOGGED_IN_SALT',   '2MK8ZxgDtJxkPM6pkIFvEtK0V0nFGYg16n2djGt3g20uyxkwS5uhQXSf6mzvctdU' );
define( 'NONCE_SALT',       'C8kofOhi7z0zSL6oOagPMU3GEzhkUw9HfoQCF5m9VVS2J7omMObrFjykkPk1hz64' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', true );
define( 'WP_DEBUG_LOG', true );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
