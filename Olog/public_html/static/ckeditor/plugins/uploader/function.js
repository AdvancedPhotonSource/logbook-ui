// Use image and overgive image src to ckeditor
function useImage(imgSrc, uploadData) {
    function getUrlParam( paramName ) {
        var reParam = new RegExp( '(?:[\?&]|&)' + paramName + '=([^&]+)', 'i' ) ;
        var match = window.location.search.match(reParam) ;

        return ( match && match.length > 1 ) ? match[ 1 ] : null ;
    }
    var funcNum = getUrlParam( 'CKEditorFuncNum' );
    var imgSrc = imgSrc;
    var fileUrl = imgSrc;
    window.opener.CKEDITOR.tools.callFunction( funcNum, fileUrl );
    window.opener.appendCKEImages(uploadData);
    window.close();
}

function selected() {
    var x = document.getElementById("fileupload5");
    if ('files' in x) {
        if (x.files.length == 0) {
            console.log("Select one or more files.");
	    window.close();
        } else {
                if ( x.files.length >1) {
                    alert("select single file only");
		    window.close();
                }
                else {
		file=x.files[0];
		console.log(file.name);
                setTimeout(function(){
                    useImage("#!#!#!#"+file.name, uploadData);
                }, 300);
            }
         }    
    }
    else {
        if (x.value == "") {
            console.log("Select one or more files.");
        } else {
            alert("The files property is not supported by your browser!");
        }
        window.close();
    }
}

