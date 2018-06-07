CKEDITOR.plugins.add( 'timestamp', {
    icon: 'timestamp',
    init: function( editor ) {
        //Plugin logic goes here.
        console.log("timestamp init called");
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

