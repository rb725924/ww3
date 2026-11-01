<?php
/**
 * Plugin Name:       Amonra Human Design kalkulator
 * Description:       Besplatan Human Design kalkulator (bodygraf, tip, strategija, autoritet, profil) na srpskom. Kratki kod: [hd_kalkulator]
 * Version:           1.0.0
 * Requires at least: 5.8
 * Requires PHP:      7.4
 * Author:            Amonra
 * License:           MIT
 * Text Domain:       amonra-hd-kalkulator
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'AMONRA_HDK_VERSION', '1.0.0' );

add_action( 'wp_enqueue_scripts', function () {
	$base = plugin_dir_url( __FILE__ ) . 'assets/';
	wp_register_style( 'amonra-hdk', $base . 'hd-kalkulator.css', array(), AMONRA_HDK_VERSION );
	wp_register_script( 'amonra-hdk', $base . 'hd-kalkulator.js', array(), AMONRA_HDK_VERSION, true );
} );

/**
 * [hd_kalkulator types_base="/human-design/" cta_url="/tvoje-pitanje/"
 *   cta_text="..." cta_button="..." geocode="on"]
 */
add_shortcode( 'hd_kalkulator', function ( $atts ) {
	$atts = shortcode_atts(
		array(
			'types_base' => '/human-design/',
			'cta_url'    => '',
			'cta_text'   => 'Želiš da zajedno pročitamo tvoju kartu?',
			'cta_button' => 'Zakaži razgovor',
			'geocode'    => 'on',
		),
		$atts,
		'hd_kalkulator'
	);

	wp_enqueue_style( 'amonra-hdk' );
	wp_enqueue_script( 'amonra-hdk' );

	return sprintf(
		'<div class="hd-kalkulator" data-types-base="%s" data-cta-url="%s" data-cta-text="%s" data-cta-button="%s" data-geocode="%s"><noscript>Za kalkulator je potreban JavaScript.</noscript></div>',
		esc_attr( $atts['types_base'] ),
		esc_url( $atts['cta_url'] ),
		esc_attr( $atts['cta_text'] ),
		esc_attr( $atts['cta_button'] ),
		esc_attr( 'off' === $atts['geocode'] ? 'off' : 'on' )
	);
} );
