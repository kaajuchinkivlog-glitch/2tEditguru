<?php
/**
 * EditGuru SEO & Schema.org Integration
 *
 * @package EditGuru
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Output OpenGraph and Twitter Meta Tags in Head
 */
function editguru_output_seo_meta() {
    $site_name   = get_bloginfo('name');
    $site_desc   = get_bloginfo('description');
    $current_url = esc_url(home_url(add_query_arg(array(), $wp->request ?? '')));

    if (is_singular('project')) {
        $title = get_the_title() . ' | ' . $site_name;
        $desc  = get_the_excerpt() ? get_the_excerpt() : wp_trim_words(get_the_content(), 25);
        $thumb = get_the_post_thumbnail_url(get_the_ID(), 'full');
    } else {
        $title = $site_name . ' — ' . $site_desc;
        $desc  = 'Professional video editing, motion graphics, and cinematic visual storytelling for EDITGURU.IN by Vivek.';
        $thumb = get_theme_mod('editguru_profile_photo', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80');
    }
    ?>
    <!-- SEO Meta Tags -->
    <meta name="description" content="<?php echo esc_attr($desc); ?>">
    <meta property="og:title" content="<?php echo esc_attr($title); ?>">
    <meta property="og:description" content="<?php echo esc_attr($desc); ?>">
    <meta property="og:type" content="<?php echo is_singular('project') ? 'video.other' : 'website'; ?>">
    <meta property="og:url" content="<?php echo esc_url($current_url); ?>">
    <?php if ($thumb): ?>
    <meta property="og:image" content="<?php echo esc_url($thumb); ?>">
    <?php endif; ?>
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="<?php echo esc_attr($title); ?>">
    <meta name="twitter:description" content="<?php echo esc_attr($desc); ?>">
    <?php if ($thumb): ?>
    <meta name="twitter:image" content="<?php echo esc_url($thumb); ?>">
    <?php endif; ?>

    <!-- Schema.org JSON-LD -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Vivek",
      "jobTitle": "Creative Director & Lead Video Editor",
      "worksFor": {
        "@type": "Organization",
        "name": "EDITGURU.IN"
      },
      "url": "<?php echo esc_url(home_url()); ?>",
      "sameAs": [
        "<?php echo esc_url(get_theme_mod('editguru_instagram_url', 'https://instagram.com/editguru.in')); ?>",
        "<?php echo esc_url(get_theme_mod('editguru_youtube_url', 'https://youtube.com/@editguru')); ?>"
      ]
    }
    </script>
    <?php
}
add_action('wp_head', 'editguru_output_seo_meta', 5);
