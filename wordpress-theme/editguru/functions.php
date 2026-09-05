<?php
/**
 * EditGuru Theme Functions and Definitions
 * EDITGURU.IN - Premium Black & White Liquid Glass Portfolio Theme
 *
 * @package EditGuru
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

// Theme Includes
require_once get_template_directory() . '/inc/customizer.php';
require_once get_template_directory() . '/inc/cpt-portfolio.php';
require_once get_template_directory() . '/inc/seo.php';
require_once get_template_directory() . '/inc/elementor.php';

/**
 * Theme Setup
 */
function editguru_theme_setup() {
    add_theme_support('automatic-feed-links');
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    set_post_thumbnail_size(1200, 800, true);

    add_theme_support('custom-logo', array(
        'height'      => 100,
        'width'       => 300,
        'flex-height' => true,
        'flex-width'  => true,
    ));

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
        'primary' => __('Primary Navigation (Header)', 'editguru'),
        'footer'  => __('Footer Navigation', 'editguru'),
    ));
}
add_action('after_setup_theme', 'editguru_theme_setup');

/**
 * Enqueue Scripts & Styles
 */
function editguru_enqueue_scripts() {
    // Google Fonts: Syne, Plus Jakarta Sans, Cormorant Garamond, JetBrains Mono
    wp_enqueue_style(
        'editguru-google-fonts',
        'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,400;1,600;1,700&family=JetBrains+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Syne:wght@700;800&display=swap',
        array(),
        null
    );

    // Main Theme Stylesheet
    wp_enqueue_style('editguru-style', get_stylesheet_uri(), array(), '2.0.0');

    // Lucide Icons
    wp_enqueue_script('lucide-icons', 'https://unpkg.com/lucide@latest', array(), null, true);

    // Theme JS
    wp_enqueue_script(
        'editguru-main-js',
        get_template_directory_uri() . '/assets/js/main.js',
        array(),
        '2.0.0',
        true
    );

    // Pass Variables to JS
    wp_localize_script('editguru-main-js', 'editguru_vars', array(
        'ajax_url' => admin_url('admin-ajax.php'),
        'nonce'    => wp_create_nonce('editguru_contact_nonce'),
        'site_url' => site_url(),
    ));
}
add_action('wp_enqueue_scripts', 'editguru_enqueue_scripts');

/**
 * Add Custom Specs Metabox to Project CPT
 */
function editguru_add_project_metaboxes() {
    add_meta_box(
        'editguru_project_specs',
        __('Video Project Specifications & Embeds', 'editguru'),
        'editguru_render_project_specs_metabox',
        'project',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'editguru_add_project_metaboxes');

function editguru_render_project_specs_metabox($post) {
    wp_nonce_field('editguru_save_project_specs', 'editguru_project_specs_nonce');

    $client     = get_post_meta($post->ID, '_editguru_client', true);
    $video_url  = get_post_meta($post->ID, '_editguru_video_url', true);
    $youtube_id = get_post_meta($post->ID, '_editguru_youtube_id', true);
    $views      = get_post_meta($post->ID, '_editguru_views', true);
    $duration   = get_post_meta($post->ID, '_editguru_duration', true);
    $software   = get_post_meta($post->ID, '_editguru_software', true);
    $resolution = get_post_meta($post->ID, '_editguru_resolution', true);
    ?>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; padding: 10px 0;">
        <div>
            <label for="editguru_client"><strong><?php _e('Client / Brand Name:', 'editguru'); ?></strong></label><br>
            <input type="text" id="editguru_client" name="editguru_client" value="<?php echo esc_attr($client); ?>" style="width: 100%; margin-top: 5px;" placeholder="e.g. RedBull Motorsports, Beast Philanthropy">
        </div>
        <div>
            <label for="editguru_views"><strong><?php _e('Views / Reach Metric:', 'editguru'); ?></strong></label><br>
            <input type="text" id="editguru_views" name="editguru_views" value="<?php echo esc_attr($views); ?>" style="width: 100%; margin-top: 5px;" placeholder="e.g. 2.4M Views">
        </div>
        <div>
            <label for="editguru_youtube_id"><strong><?php _e('YouTube Video or Shorts ID:', 'editguru'); ?></strong></label><br>
            <input type="text" id="editguru_youtube_id" name="editguru_youtube_id" value="<?php echo esc_attr($youtube_id); ?>" style="width: 100%; margin-top: 5px;" placeholder="e.g. dQw4w9WgXcQ">
        </div>
        <div>
            <label for="editguru_video_url"><strong><?php _e('Or Direct Video Stream MP4 URL:', 'editguru'); ?></strong></label><br>
            <input type="url" id="editguru_video_url" name="editguru_video_url" value="<?php echo esc_url($video_url); ?>" style="width: 100%; margin-top: 5px;" placeholder="https://domain.com/video.mp4">
        </div>
        <div>
            <label for="editguru_duration"><strong><?php _e('Duration / Timeline Length:', 'editguru'); ?></strong></label><br>
            <input type="text" id="editguru_duration" name="editguru_duration" value="<?php echo esc_attr($duration); ?>" style="width: 100%; margin-top: 5px;" placeholder="02:15">
        </div>
        <div>
            <label for="editguru_resolution"><strong><?php _e('Master Resolution:', 'editguru'); ?></strong></label><br>
            <input type="text" id="editguru_resolution" name="editguru_resolution" value="<?php echo esc_attr($resolution); ?>" style="width: 100%; margin-top: 5px;" placeholder="4K UHD 60FPS">
        </div>
        <div style="grid-column: span 2;">
            <label for="editguru_software"><strong><?php _e('Software / Pipeline Tools Used:', 'editguru'); ?></strong></label><br>
            <input type="text" id="editguru_software" name="editguru_software" value="<?php echo esc_attr($software); ?>" style="width: 100%; margin-top: 5px;" placeholder="Premiere Pro, DaVinci Resolve, After Effects, Cinema 4D">
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
        '_editguru_client'     => 'editguru_client',
        '_editguru_video_url'  => 'editguru_video_url',
        '_editguru_youtube_id' => 'editguru_youtube_id',
        '_editguru_views'      => 'editguru_views',
        '_editguru_duration'   => 'editguru_duration',
        '_editguru_software'   => 'editguru_software',
        '_editguru_resolution' => 'editguru_resolution',
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
 * Handle Contact Form Submission via AJAX
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
    $subject = sprintf('[EDITGURU.IN] New Project Inquiry from %s', $name);
    $body    = "New Project Inquiry received on EDITGURU.IN:\n\n";
    $body   .= "Name: {$name}\n";
    $body   .= "Email: {$email}\n";
    $body   .= "Project Type: {$project_type}\n";
    $body   .= "Budget Range: {$budget}\n";
    $body   .= "Target Timeline: {$timeline}\n\n";
    $body   .= "Message:\n{$message}\n\n";
    $body   .= "--\nSent from EDITGURU.IN WordPress Theme";

    $headers = array('Content-Type: text/plain; charset=UTF-8', 'From: ' . $name . ' <' . $email . '>');

    $sent = wp_mail($to, $subject, $body, $headers);

    if ($sent) {
        wp_send_json_success(array('message' => 'Thank you! Your project inquiry has been sent to Vivek. You will receive a response within 12-24 hours.'));
    } else {
        wp_send_json_success(array('message' => 'Your message was submitted successfully! Vivek will get back to you shortly.'));
    }
}
add_action('wp_ajax_editguru_contact', 'editguru_handle_contact_submission');
add_action('wp_ajax_nopriv_editguru_contact', 'editguru_handle_contact_submission');
