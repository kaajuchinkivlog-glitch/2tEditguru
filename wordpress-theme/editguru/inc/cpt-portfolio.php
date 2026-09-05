<?php
/**
 * EditGuru Custom Post Type: Portfolio Projects
 *
 * @package EditGuru
 */

if (!defined('ABSPATH')) {
    exit;
}

function editguru_register_portfolio_cpt() {
    $labels = array(
        'name'               => _x('Portfolio Projects', 'post type general name', 'editguru'),
        'singular_name'      => _x('Portfolio Project', 'post type singular name', 'editguru'),
        'menu_name'          => _x('Portfolio Projects', 'admin menu', 'editguru'),
        'name_admin_bar'     => _x('Project', 'add new on admin bar', 'editguru'),
        'add_new'            => _x('Add New Project', 'project', 'editguru'),
        'add_new_item'       => __('Add New Portfolio Project', 'editguru'),
        'new_item'           => __('New Project', 'editguru'),
        'edit_item'          => __('Edit Project', 'editguru'),
        'view_item'          => __('View Project', 'editguru'),
        'all_items'          => __('All Projects', 'editguru'),
        'search_items'       => __('Search Projects', 'editguru'),
        'not_found'          => __('No projects found.', 'editguru'),
        'not_found_in_trash' => __('No projects found in Trash.', 'editguru'),
    );

    $args = array(
        'labels'             => $labels,
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array('slug' => 'portfolio'),
        'capability_type'    => 'post',
        'has_archive'        => 'portfolio-archive',
        'hierarchical'       => false,
        'menu_position'      => 5,
        'menu_icon'          => 'dashicons-video-alt2',
        'supports'           => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields', 'revisions'),
        'show_in_rest'       => true,
    );

    register_post_type('project', $args);

    // Custom Taxonomy: Portfolio Category
    $tax_labels = array(
        'name'              => _x('Portfolio Categories', 'taxonomy general name', 'editguru'),
        'singular_name'     => _x('Portfolio Category', 'taxonomy singular name', 'editguru'),
        'search_items'      => __('Search Categories', 'editguru'),
        'all_items'         => __('All Categories', 'editguru'),
        'edit_item'         => __('Edit Category', 'editguru'),
        'update_item'       => __('Update Category', 'editguru'),
        'add_new_item'      => __('Add New Category', 'editguru'),
        'new_item_name'     => __('New Category Name', 'editguru'),
        'menu_name'         => __('Categories', 'editguru'),
    );

    register_taxonomy('project_category', array('project'), array(
        'hierarchical'      => true,
        'labels'            => $tax_labels,
        'show_ui'           => true,
        'show_admin_column' => true,
        'query_var'         => true,
        'rewrite'           => array('slug' => 'project-category'),
        'show_in_rest'      => true,
    ));

    // Seed default categories if they don't exist
    $default_cats = array('Reels', 'YouTube Videos', 'Gaming', 'Commercials', 'Motion Graphics', 'Color Grading', 'Cinematic');
    foreach ($default_cats as $cat) {
        if (!term_exists($cat, 'project_category')) {
            wp_insert_term($cat, 'project_category');
        }
    }
}
add_action('init', 'editguru_register_portfolio_cpt');
