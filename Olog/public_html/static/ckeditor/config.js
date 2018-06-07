/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
        //config.filebrowserBrowseUrl = 'plugins/uploader/imgbrowser.html';
	config.removeButtons = 'Save,Source';
        config.extraPlugins = 'image,timestamp,uploader';
	config.enterMode = CKEDITOR.ENTER_DIV;
};
