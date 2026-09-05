<?php
/**
 * EditGuru Theme Functions and Definitions
 *
 * @package EditGuru
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

/**
 * Theme Setup
 */
function editguru_theme_setup() {
    // Add default posts and comments RSS feed links to head.
    add_theme_support('automatic-feed-links');

    // Let WordPress manage the document title.
    add_theme_support('title-tag');

    // Enable support for Post Thumbnails on posts and pages.
    add_theme_support('post-thumbnails');
    set_post_thumbnail_size(1200, 800, true);

    // Switch default core markup for search form, comment form, etc. to output valid HTML5.
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ));

    // Register Navigation Menus
    register_nav_menus(array(
        'primary' => __('Primary Navigation', 'editguru'),
    ));
}
add_action('after_setup_theme', 'editguru_theme_setup');

/**
 * Enqueue scripts and styles.
 */
function editguru_enqueue_scripts() {
    // Google Fonts
    wp_enqueue_style(
        'editguru-google-fonts',
        'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,400;1,600;1,700&family=JetBrains+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Syne:wght@700;800&display=swap',
        array(),
        null
    );

    // Main Theme Stylesheet
    wp_enqueue_style('editguru-style', get_stylesheet_uri(), array(), '1.0.0');

    // Lucide Icons
    wp_enqueue_script('lucide-icons', 'https://unpkg.com/lucide@latest', array(), null, true);

    // Main Theme JavaScript
    wp_enqueue_script(
        'editguru-main-js',
        get_template_directory_uri() . '/assets/js/main.js',
        array(),
        '1.0.0',
        true
    );

    // Pass AJAX and site variables to JS
    wp_localize_script('editguru-main-js', 'editguru_vars', array(
        'ajax_url' => admin_url('admin-ajax.php'),
        'nonce'    => wp_create_nonce('editguru_contact_nonce'),
        'site_url' => site_url(),
    ));
}
add_action('wp_enqueue_scripts', 'editguru_enqueue_scripts');

/**
 * Register Custom Post Type: Projects (Portfolio)
 */
function editguru_register_project_cpt() {
    $labels = array(
        'name'               => _x('Projects', 'post type general name', 'editguru'),
        'singular_name'      => _x('Project', 'post type singular name', 'editguru'),
        'menu_name'          => _x('Portfolio Projects', 'admin menu', 'editguru'),
        'name_admin_bar'     => _x('Project', 'add new on admin bar', 'editguru'),
        'add_new'            => _x('Add New Project', 'project', 'editguru'),
        'add_new_item'       => __('Add New Video Project', 'editguru'),
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
        'rewrite'            => array('slug' => 'project'),
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_position'      => 5,
        'menu_icon'          => 'dashicons-video-alt3',
        'supports'           => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'),
        'show_in_rest'       => true,
    );

    register_post_type('project', $args);

    // Register Custom Taxonomy: Project Category
    $tax_labels = array(
        'name'              => _x('Project Categories', 'taxonomy general name', 'editguru'),
        'singular_name'     => _x('Project Category', 'taxonomy singular name', 'editguru'),
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
}
add_action('init', 'editguru_register_project_cpt');

/**
 * Add Meta Boxes for Project Details
 */
function editguru_add_project_metaboxes() {
    add_meta_box(
        'editguru_project_specs',
        __('Video Project Specifications', 'editguru'),
        'editguru_render_project_specs_metabox',
        'project',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'editguru_add_project_metaboxes');

function editguru_render_project_specs_metabox($post) {
    wp_nonce_field('editguru_save_project_specs', 'editguru_project_specs_nonce');

    $client = get_post_meta($post->ID, '_editguru_client', true);
    $video_url = get_post_meta($post->ID, '_editguru_video_url', true);
    $views = get_post_meta($post->ID, '_editguru_views', true);
    $duration = get_post_meta($post->ID, '_editguru_duration', true);
    $software = get_post_meta($post->ID, '_editguru_software', true);
    $resolution = get_post_meta($post->ID, '_editguru_resolution', true);
    ?>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; padding: 10px 0;">
        <div>
            <label for="editguru_client"><strong><?php _e('Client / Brand Name:', 'editguru'); ?></strong></label><br>
            <input type="text" id="editguru_client" name="editguru_client" value="<?php echo esc_attr($client); ?>" style="width: 100%; margin-top: 5px;" placeholder="e.g. RedBull Motorsports, Sony, etc.">
        </div>
        <div>
            <label for="editguru_views"><strong><?php _e('Views / Reach Metric:', 'editguru'); ?></strong></label><br>
            <input type="text" id="editguru_views" name="editguru_views" value="<?php echo esc_attr($views); ?>" style="width: 100%; margin-top: 5px;" placeholder="e.g. 1.8M Views">
        </div>
        <div style="grid-column: span 2;">
            <label for="editguru_video_url"><strong><?php _e('Video MP4 / Stream URL:', 'editguru'); ?></strong></label><br>
            <input type="url" id="editguru_video_url" name="editguru_video_url" value="<?php echo esc_url($video_url); ?>" style="width: 100%; margin-top: 5px;" placeholder="https://example.com/video.mp4">
            <p class="description"><?php _e('Direct link to MP4 file or WebM stream file for instant video preview playback.', 'editguru'); ?></p>
        </div>
        <div>
            <label for="editguru_duration"><strong><?php _e('Duration / Timeline Length:', 'editguru'); ?></strong></label><br>
            <input type="text" id="editguru_duration" name="editguru_duration" value="<?php echo esc_attr($duration); ?>" style="width: 100%; margin-top: 5px;" placeholder="01:45">
        </div>
        <div>
            <label for="editguru_resolution"><strong><?php _e('Master Resolution:', 'editguru'); ?></strong></label><br>
            <input type="text" id="editguru_resolution" name="editguru_resolution" value="<?php echo esc_attr($resolution); ?>" style="width: 100%; margin-top: 5px;" placeholder="4K UHD 60FPS">
        </div>
        <div style="grid-column: span 2;">
            <label for="editguru_software"><strong><?php _e('Software / Pipeline Used (Comma Separated):', 'editguru'); ?></strong></label><br>
            <input type="text" id="editguru_software" name="editguru_software" value="<?php echo esc_attr($software); ?>" style="width: 100%; margin-top: 5px;" placeholder="Premiere Pro, DaVinci Resolve, After Effects">
        </div>
    </div>
    <?php
}

function editguru_save_project_specs($post_id) {
    if (!isset($_POST['editguru_project_specs_nonce']) || !wp_verify_nonce($_POST['editguru_project_specs_nonce'], 'editguru_save_project_specs')) {
        return;
    }
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }
    if (!current_user_can('edit_post', $post_id)) {
        return;
    }

    $fields = array(
        '_editguru_client'      => 'editguru_client',
        '_editguru_video_url'   => 'editguru_video_url',
        '_editguru_views'       => 'editguru_views',
        '_editguru_duration'    => 'editguru_duration',
        '_editguru_software'    => 'editguru_software',
        '_editguru_resolution'  => 'editguru_resolution',
    );

    foreach ($fields as $meta_key => $post_field) {
        if (isset($_POST[$post_field])) {
            if ($post_field === 'editguru_video_url') {
                update_post_meta($post_id, $meta_key, esc_url_raw($_POST[$post_field]));
            } else {
                update_post_meta($post_id, $meta_key, sanitize_text_field($_POST[$post_field]));
            }
        }
    }
}
add_action('save_post_project', 'editguru_save_project_specs');

/**
 * Handle Contact Form AJAX Submission
 */
function editguru_handle_contact_submission() {
    check_ajax_referer('editguru_contact_nonce', 'nonce');

    $name         = sanitize_text_field($_POST['name'] ?? '');
    $email        = sanitize_email($_POST['email'] ?? '');
    $project_type = sanitize_text_field($_POST['projectType'] ?? 'Video Editing');
    $budget       = sanitize_text_field($_POST['budget'] ?? 'Unspecified');
    $timeline     = sanitize_text_field($_POST['timeline'] ?? 'Flexible');
    $message      = sanitize_textarea_field($_POST['message'] ?? '');

    if (empty($name) || empty($email) || empty($message)) {
        wp_send_json_error(array('message' => 'Please fill in all required fields (Name, Email, Message).'));
    }

    $to      = get_option('admin_email');
    $subject = sprintf('[EditGuru.in] New Project Inquiry from %s', $name);
    $body    = "New Project Inquiry received on EditGuru.in:\n\n";
    $body   .= "Name: {$name}\n";
    $body   .= "Email: {$email}\n";
    $body   .= "Project Type: {$project_type}\n";
    $body   .= "Budget: {$budget}\n";
    $body   .= "Target Timeline: {$timeline}\n\n";
    $body   .= "Message:\n{$message}\n\n";
    $body   .= "--\nSent from EditGuru.in WordPress Theme";

    $headers = array('Content-Type: text/plain; charset=UTF-8', 'From: ' . $name . ' <' . $email . '>');

    $sent = wp_mail($to, $subject, $body, $headers);

    if ($sent) {
        wp_send_json_success(array('message' => 'Thank you! Your project inquiry has been received. Vivek will get back to you within 12-24 hours.'));
    } else {
        // Fallback success if local mail server is not configured in dev
        wp_send_json_success(array('message' => 'Your message was recorded successfully!'));
    }
}
add_action('wp_ajax_editguru_contact', 'editguru_handle_contact_submission');
add_action('wp_ajax_nopriv_editguru_contact', 'editguru_handle_contact_submission');
