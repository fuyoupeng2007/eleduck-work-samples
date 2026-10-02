<?php
/**
 * Template Name: MASON METAL 完整样品
 * Template Post Type: page
 */
if (!defined('ABSPATH')) { exit; }
?><!doctype html>
<html <?php language_attributes(); ?>><head><meta charset="<?php bloginfo('charset'); ?>"><meta name="viewport" content="width=device-width,initial-scale=1"><?php wp_head(); ?></head>
<body <?php body_class('mason-page'); ?>><?php wp_body_open(); echo do_shortcode('[mason_metal_home]'); wp_footer(); ?></body></html>
