<?php
/**
 * EditGuru Customizer Options
 *
 * @package EditGuru
 */

if (!defined('ABSPATH')) {
    exit;
}

function editguru_customize_register($wp_customize) {

    // 1. EDITGURU Brand & Creator Details
    $wp_customize->add_section('editguru_brand_section', array(
        'title'    => __('EDITGURU Brand & Creator', 'editguru'),
        'priority' => 20,
    ));

    // Creator Name
    $wp_customize->add_setting('editguru_creator_name', array(
        'default'           => 'Vivek',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('editguru_creator_name', array(
        'label'    => __('Creator / Editor Name', 'editguru'),
        'section'  => 'editguru_brand_section',
        'type'     => 'text',
    ));

    // Creator Title/Tagline
    $wp_customize->add_setting('editguru_creator_title', array(
        'default'           => 'Creator • Vlogger • Video Editor',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('editguru_creator_title', array(
        'label'    => __('Creator Tagline / Role', 'editguru'),
        'section'  => 'editguru_brand_section',
        'type'     => 'text',
    ));

    // Logo Text / Domain
    $wp_customize->add_setting('editguru_logo_text', array(
        'default'           => 'EDITGURU.IN',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('editguru_logo_text', array(
        'label'    => __('Brand Logo Text', 'editguru'),
        'section'  => 'editguru_brand_section',
        'type'     => 'text',
    ));

    // Profile Photo Image
    $wp_customize->add_setting('editguru_profile_photo', array(
        'default'           => 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
        'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'editguru_profile_photo', array(
        'label'    => __('Profile Photo / Avatar', 'editguru'),
        'section'  => 'editguru_brand_section',
    )));

    // 2. Hero Section Settings
    $wp_customize->add_section('editguru_hero_section', array(
        'title'    => __('Hero Section (Home)', 'editguru'),
        'priority' => 25,
    ));

    // Hero Headline
    $wp_customize->add_setting('editguru_hero_headline', array(
        'default'           => 'Creating Stories Through Visuals',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('editguru_hero_headline', array(
        'label'    => __('Hero Headline', 'editguru'),
        'section'  => 'editguru_hero_section',
        'type'     => 'text',
    ));

    // Hero Subtitle
    $wp_customize->add_setting('editguru_hero_subtitle', array(
        'default'           => 'Professional video editing and cinematic storytelling by Vivek. Crafting high-converting Reels, YouTube docs, commercials, and viral visual experiences.',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));
    $wp_customize->add_control('editguru_hero_subtitle', array(
        'label'    => __('Hero Description', 'editguru'),
        'section'  => 'editguru_hero_section',
        'type'     => 'textarea',
    ));

    // Showreel MP4 URL
    $wp_customize->add_setting('editguru_hero_showreel_url', array(
        'default'           => 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
        'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control('editguru_hero_showreel_url', array(
        'label'    => __('Showreel MP4 Video Background URL', 'editguru'),
        'section'  => 'editguru_hero_section',
        'type'     => 'url',
    ));

    // Primary CTA Button Text
    $wp_customize->add_setting('editguru_hero_btn1_text', array(
        'default'           => 'View My Work',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('editguru_hero_btn1_text', array(
        'label'    => __('Button 1 Label', 'editguru'),
        'section'  => 'editguru_hero_section',
        'type'     => 'text',
    ));

    // Secondary CTA Button Text
    $wp_customize->add_setting('editguru_hero_btn2_text', array(
        'default'           => 'Start a Project',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('editguru_hero_btn2_text', array(
        'label'    => __('Button 2 Label', 'editguru'),
        'section'  => 'editguru_hero_section',
        'type'     => 'text',
    ));

    // 3. Contact & Social Links
    $wp_customize->add_section('editguru_social_section', array(
        'title'    => __('Social Links & Contact Info', 'editguru'),
        'priority' => 30,
    ));

    // Contact Email
    $wp_customize->add_setting('editguru_contact_email', array(
        'default'           => 'vivek@editguru.in',
        'sanitize_callback' => 'sanitize_email',
    ));
    $wp_customize->add_control('editguru_contact_email', array(
        'label'    => __('Contact Email Address', 'editguru'),
        'section'  => 'editguru_social_section',
        'type'     => 'email',
    ));

    // Instagram URL
    $wp_customize->add_setting('editguru_instagram_url', array(
        'default'           => 'https://instagram.com/editguru.in',
        'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control('editguru_instagram_url', array(
        'label'    => __('Instagram URL', 'editguru'),
        'section'  => 'editguru_social_section',
        'type'     => 'url',
    ));

    // YouTube URL
    $wp_customize->add_setting('editguru_youtube_url', array(
        'default'           => 'https://youtube.com/@editguru',
        'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control('editguru_youtube_url', array(
        'label'    => __('YouTube Channel URL', 'editguru'),
        'section'  => 'editguru_social_section',
        'type'     => 'url',
    ));

    // X/Twitter URL
    $wp_customize->add_setting('editguru_twitter_url', array(
        'default'           => 'https://x.com/editguru_in',
        'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control('editguru_twitter_url', array(
        'label'    => __('X / Twitter URL', 'editguru'),
        'section'  => 'editguru_social_section',
        'type'     => 'url',
    ));
}
add_action('customize_register', 'editguru_customize_register');
