<?php

/**
 * Title: footer-custom
 * Slug: themeslug/footer-pattern
 * Categories: footer
 */
?>
<!-- Pattern code goes here. -->


<!-- wp:group {"align":"full","style":{"elements":{"link":{"color":{"text":"var:preset|color|white"}}},"spacing":{"padding":{"top":"var:preset|spacing|60","right":"var:preset|spacing|40","bottom":"var:preset|spacing|60","left":"var:preset|spacing|40"},"margin":{"top":"0","bottom":"0"},"blockGap":"var:preset|spacing|30"},"dimensions":{"minHeight":"40vh"}},"backgroundColor":"black","textColor":"white","className":"has-background-color","layout":{"type":"flex","orientation":"vertical","justifyContent":"stretch","verticalAlignment":"center"}} -->
<div class="wp-block-group alignfull has-background-color has-white-color has-black-background-color has-text-color has-background has-link-color" style="min-height:40vh;margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--60);padding-right:var(--wp--preset--spacing--40);padding-bottom:var(--wp--preset--spacing--60);padding-left:var(--wp--preset--spacing--40)"><!-- wp:columns {"align":"wide","fontSize":"small"} -->
    <div class="wp-block-columns alignwide has-small-font-size"><!-- wp:column -->
        <div class="wp-block-column"><!-- wp:paragraph {"align":"center"} -->
            <p class="has-text-align-center">Location</p>
            <!-- /wp:paragraph -->

            <!-- wp:paragraph {"align":"center"} -->
            <p class="has-text-align-center">2020 Lomita Blvd,&nbsp;<br>Torrance, CA 90101<br>United States</p>
            <!-- /wp:paragraph -->

            <!-- wp:spacer {"height":"24px"} -->
            <div style="height:24px" aria-hidden="true" class="wp-block-spacer"></div>
            <!-- /wp:spacer -->
        </div>
        <!-- /wp:column -->

        <!-- wp:column -->
        <div class="wp-block-column"><!-- wp:paragraph {"align":"center"} -->
            <p class="has-text-align-center">Pages</p>
            <!-- /wp:paragraph -->

            <!-- wp:navigation {"ref":233,"overlayMenu":"never","layout":{"type":"flex","orientation":"vertical","justifyContent":"center","flexWrap":"nowrap"},"style":{"spacing":{"blockGap":"8px"}},"fontSize":"small"} /-->

            <!-- wp:spacer {"height":"24px"} -->
            <div style="height:24px" aria-hidden="true" class="wp-block-spacer"></div>
            <!-- /wp:spacer -->
        </div>
        <!-- /wp:column -->

        <!-- wp:column -->
        <div class="wp-block-column"><!-- wp:paragraph {"align":"center"} -->
            <p class="has-text-align-center">Follow us</p>
            <!-- /wp:paragraph -->

            <!-- wp:group {"style":{"spacing":{"blockGap":"8px"}},"layout":{"type":"flex","orientation":"vertical","justifyContent":"center"}} -->
            <div class="wp-block-group"><!-- wp:paragraph -->
                <p><a href="#">Facebook</a></p>
                <!-- /wp:paragraph -->

                <!-- wp:paragraph -->
                <p><a href="#">Instagram</a></p>
                <!-- /wp:paragraph -->

                <!-- wp:paragraph -->
                <p><a href="#">Twitter</a></p>
                <!-- /wp:paragraph -->
            </div>
            <!-- /wp:group -->

            <!-- wp:spacer {"height":"24px"} -->
            <div style="height:24px" aria-hidden="true" class="wp-block-spacer"></div>
            <!-- /wp:spacer -->
        </div>
        <!-- /wp:column -->
    </div>
    <!-- /wp:columns -->

    <!-- wp:group {"align":"wide","layout":{"type":"flex","justifyContent":"center","flexWrap":"wrap"}} -->
    <div class="wp-block-group alignwide"><!-- wp:paragraph {"align":"center","fontSize":"small"} -->
        <p class="has-text-align-center has-small-font-size"> Proudly powered by <a rel="nofollow" href="https://wordpress.org">WordPress</a> </p>
        <!-- /wp:paragraph -->
    </div>
    <!-- /wp:group -->
</div>
<!-- /wp:group -->