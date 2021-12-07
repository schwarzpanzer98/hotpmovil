module.exports =  {
    // Default assets
    assets: [],
  
    // Style prefix
    stylePrefix: 'am-',
  
    // Url where uploads will be send, set false to disable upload
    upload: 'http://localhost:3000/pmovil/',
  
    // Text on upload input
    uploadText: 'Drop files here or click to upload',
  
    // Label for the add button
    addBtnText: 'Add image',
  
    // Custom uploadFile function
   // @example
    uploadFile: function(e) {
      var files = e.dataTransfer ? e.dataTransfer.files : e.target.files;
      // ...send somewhere
        console.log(files);
  
        var formData = new FormData();
  
        for(var i in files){
            formData.append('file-'+i, files[i])
        }
  
        $.ajax({url: 'http://localhost:3000/pmovil/',
            type: 'POST',
            data: formData,
            contentType:false,
            crossDomain: true,
            mimeType: "multipart/form-data",
            processData:false,
            success: function(result){
            console.log(result);
  
        }});
  
    }
  
   //  uploadFile: '',
  };