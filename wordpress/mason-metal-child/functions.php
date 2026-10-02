<?php
/** MASON METAL Astra child theme: no automatic page creation or database changes. */
if (!defined('ABSPATH')) { exit; }
add_action('after_setup_theme', function () { add_theme_support('woocommerce'); });
add_action('wp_enqueue_scripts', function () {
    wp_enqueue_style('mason-child', get_stylesheet_uri(), array('astra-theme-css'), '1.0.0');
    $post = get_post();
    $elementor_data = $post ? get_post_meta($post->ID, '_elementor_data', true) : '';
    $is_sample = is_page_template('template-mason-metal.php') || ($post && (has_shortcode($post->post_content, 'mason_metal_home') || has_shortcode($post->post_content, 'mason_metal_collection') || (is_string($elementor_data) && strpos($elementor_data, 'mason_metal_') !== false)));
    if (!$is_sample) { return; }
    wp_enqueue_style('mason-design', get_stylesheet_directory_uri() . '/assets/design.css', array('mason-child'), '1.0.0');
    wp_enqueue_script('mason-shared', get_stylesheet_directory_uri() . '/assets/shared.js', array(), '1.0.0', true);
    wp_add_inline_script('mason-shared', 'window.MASON_ASSET_URL=' . wp_json_encode(get_stylesheet_directory_uri() . '/assets/silver-editorial.png') . ';');
    wp_enqueue_script('mason-storefront', get_stylesheet_directory_uri() . '/assets/app.js', array('mason-shared'), '1.0.0', true);
});
function mason_sample_html($filename) {
    $allowed = array('home.html', 'header.html', 'collection.html', 'perspective.html', 'care.html', 'footer.html', 'dialogs.html');
    if (!in_array($filename, $allowed, true)) { return ''; }
    $html = file_get_contents(get_stylesheet_directory() . '/partials/' . $filename);
    if ($html === false) { return ''; }
    $html = str_replace('assets/silver-editorial.png', esc_url(get_stylesheet_directory_uri() . '/assets/silver-editorial.png'), $html);
    $html = str_replace('../index.html', esc_url(home_url('/')), $html);
    return $html;
}
add_shortcode('mason_metal_home', function () { return mason_sample_html('home.html'); });
add_shortcode('mason_metal_header', function () { return mason_sample_html('header.html'); });
add_shortcode('mason_metal_collection', function () { return mason_sample_html('collection.html'); });
add_shortcode('mason_metal_perspective', function () { return mason_sample_html('perspective.html'); });
add_shortcode('mason_metal_care', function () { return mason_sample_html('care.html'); });
add_shortcode('mason_metal_footer', function () { return mason_sample_html('footer.html'); });
add_shortcode('mason_metal_dialogs', function () { return mason_sample_html('dialogs.html'); });
// Real catalog integration is optional and never creates demo products.
add_shortcode('mason_metal_live_catalog', function () {
    if (!class_exists('WooCommerce')) { return '<p>请先安装 WooCommerce 并添加客户确认的商品。</p>'; }
    return '<div class="mm-woo">' . do_shortcode('[products limit="8" columns="4" orderby="date" order="DESC"]') . '</div>';
});
