( function ( wp ) {
	var el = wp.element.createElement;
	var __ = wp.i18n.__;
	var useBlockProps = wp.blockEditor.useBlockProps;
	var InspectorControls = wp.blockEditor.InspectorControls;
	var PanelBody = wp.components.PanelBody;
	var TextControl = wp.components.TextControl;
	var ToggleControl = wp.components.ToggleControl;
	var ColorPalette = wp.components.ColorPalette;
	var BaseControl = wp.components.BaseControl;

	var COLORS = [
		{ name: 'Zlatna', color: '#b07a2a' },
		{ name: 'Terakota', color: '#b4532a' },
		{ name: 'Šljiva', color: '#6d3b6b' },
		{ name: 'Maslinasta', color: '#5d6b3a' },
		{ name: 'Ponoć', color: '#2c3e63' }
	];

	function Edit( props ) {
		var a = props.attributes;
		var set = props.setAttributes;
		var style = a.accentColor ? { '--hdk-accent': a.accentColor } : {};
		var blockProps = useBlockProps( { className: 'amonra-hdk-preview', style: style } );

		return el(
			wp.element.Fragment,
			null,
			el(
				InspectorControls,
				null,
				el(
					PanelBody,
					{ title: __( 'Poziv na akciju', 'amonra-hd-kalkulator' ), initialOpen: true },
					el( TextControl, {
						label: __( 'Link dugmeta (npr. stranica usluge)', 'amonra-hd-kalkulator' ),
						help: __( 'Ako ostane prazno, dugme se ne prikazuje.', 'amonra-hd-kalkulator' ),
						type: 'url',
						value: a.ctaUrl,
						onChange: function ( v ) { set( { ctaUrl: v } ); }
					} ),
					el( TextControl, {
						label: __( 'Tekst pored dugmeta', 'amonra-hd-kalkulator' ),
						value: a.ctaText,
						onChange: function ( v ) { set( { ctaText: v } ); }
					} ),
					el( TextControl, {
						label: __( 'Tekst na dugmetu', 'amonra-hd-kalkulator' ),
						value: a.ctaButton,
						onChange: function ( v ) { set( { ctaButton: v } ); }
					} )
				),
				el(
					PanelBody,
					{ title: __( 'Podešavanja', 'amonra-hd-kalkulator' ), initialOpen: false },
					el( TextControl, {
						label: __( 'Adresa stranica o tipovima', 'amonra-hd-kalkulator' ),
						help: __( 'Npr. /human-design/ za /human-design/projektor/', 'amonra-hd-kalkulator' ),
						value: a.typesBase,
						onChange: function ( v ) { set( { typesBase: v } ); }
					} ),
					el( ToggleControl, {
						label: __( 'Pretraga mesta preko interneta (Open-Meteo)', 'amonra-hd-kalkulator' ),
						help: a.geocode
							? __( 'Uključeno: posetilac može da nađe bilo koje mesto. Šalje se samo naziv mesta.', 'amonra-hd-kalkulator' )
							: __( 'Isključeno: samo ugrađena lista od ~45 gradova iz regiona.', 'amonra-hd-kalkulator' ),
						checked: !! a.geocode,
						onChange: function ( v ) { set( { geocode: v } ); }
					} ),
					el(
						BaseControl,
						{ label: __( 'Boja dugmeta', 'amonra-hd-kalkulator' ), id: 'amonra-hdk-color' },
						el( ColorPalette, {
							colors: COLORS,
							value: a.accentColor,
							onChange: function ( v ) { set( { accentColor: v || '' } ); }
						} )
					)
				)
			),
			el(
				'div',
				blockProps,
				el( 'h3', null, __( 'Human Design kalkulator', 'amonra-hd-kalkulator' ) ),
				el( 'p', null, __( 'Pregled. Pravi kalkulator radi na objavljenoj stranici.', 'amonra-hd-kalkulator' ) ),
				el(
					'div',
					{ className: 'amonra-hdk-fields' },
					el( 'div', { className: 'amonra-hdk-field full' }, __( 'Ime (nije obavezno)', 'amonra-hd-kalkulator' ) ),
					el( 'div', { className: 'amonra-hdk-field' }, __( 'Datum rođenja', 'amonra-hd-kalkulator' ) ),
					el( 'div', { className: 'amonra-hdk-field' }, __( 'Vreme rođenja', 'amonra-hd-kalkulator' ) ),
					el( 'div', { className: 'amonra-hdk-field full' }, __( 'Mesto rođenja', 'amonra-hd-kalkulator' ) )
				),
				el( 'span', { className: 'amonra-hdk-btn' }, __( 'Izračunaj kartu', 'amonra-hd-kalkulator' ) ),
				a.ctaUrl
					? el( 'p', null, __( 'Dugme ispod rezultata vodi na: ', 'amonra-hd-kalkulator' ) + a.ctaUrl )
					: el( 'p', null, __( 'Dodaj link dugmeta u bočnoj traci (Poziv na akciju).', 'amonra-hd-kalkulator' ) )
			)
		);
	}

	wp.blocks.registerBlockType( 'amonra/hd-kalkulator', {
		edit: Edit,
		save: function () { return null; }
	} );
} )( window.wp );
