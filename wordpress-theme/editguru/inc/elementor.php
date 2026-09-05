<?php
/**
 * EditGuru Elementor & Plugin Compatibility
 *
 * @package EditGuru
 */

if (!defined('ABSPATH')) {
    exit;
}

// Declare theme support for Elementor
function editguru_add_elementor_support() {
    add_theme_support('elementor');
    add_theme_support('align-wide');
    add_theme_support('editor-styles');
    add_theme_support('wp-block-styles');
    add_theme_support('responsive-embeds');
}
add_action('after_setup_theme', 'editguru_add_elementor_support');

// Register Elementor Header & Footer Location
function editguru_register_elementor_locations($elementor_theme_manager) {
    $elementor_theme_manager->register_all_core_location();
}
add_action('elementor/theme/register_locations', 'editguru_register_elementor_locations');
