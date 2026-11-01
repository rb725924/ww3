<?php
/**
 * Prikaz bloka na sajtu.
 *
 * @var array $attributes
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$amonra_hdk_style = '';
if ( ! empty( $attributes['accentColor'] ) ) {
	$amonra_hdk_color = sanitize_hex_color( $attributes['accentColor'] );
	if ( $amonra_hdk_color ) {
		$amonra_hdk_style = '--hdk-accent:' . $amonra_hdk_color . ';';
	}
}

$amonra_hdk_wrapper = get_block_wrapper_attributes(
	array(
		'class'           => 'hd-kalkulator',
		'style'           => $amonra_hdk_style,
		'data-types-base' => $attributes['typesBase'] ?? '/human-design/',
		'data-cta-url'    => esc_url( $attributes['ctaUrl'] ?? '' ),
		'data-cta-text'   => $attributes['ctaText'] ?? '',
		'data-cta-button' => $attributes['ctaButton'] ?? '',
		'data-geocode'    => empty( $attributes['geocode'] ) ? 'off' : 'on',
	)
);
?>
<div <?php echo $amonra_hdk_wrapper; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- get_block_wrapper_attributes escapes. ?>>
	<noscript><?php esc_html_e( 'Za kalkulator je potreban JavaScript.', 'amonra-hd-kalkulator' ); ?></noscript>
</div>
