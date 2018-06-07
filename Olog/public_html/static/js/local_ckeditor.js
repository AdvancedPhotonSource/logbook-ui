CKEDITOR.replace( "log_body" );
CKEDITOR.plugins.add( 'timestamp', {
    icons: 'timestamp',
    init: function( editor ) {
        //Plugin logic goes here.
        editor.addCommand( 'insertTimestamp', {
            exec: function( editor ) {
            var now = new Date();
            editor.insertHtml( '<em>' + now.toString() + '</em>' );
            }
        });
        editor.ui.addButton( 'Timestamp', {
            label: 'Insert Timestamp',
            command: 'insertTimestamp',
            toolbar: 'insert,0'
        });
    }
});

