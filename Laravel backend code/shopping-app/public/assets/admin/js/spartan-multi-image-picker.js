/**
 * spartan-multi-image-picker.js
 * Repo : https://github.com/adispartadev/spartan-multi-image-picker
 * Created By I Wayan Adi Sparta, 2018
 */
(function ($) {
    "use strict";

    var ADDICON = 'data:image/png;base64,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';
    $.fn.spartanMultiImagePicker = function(options) {

        var count       = 0;
        var last_index  = 0;
        var total_count = 0;

        var defaults = {
            fieldName:        '',
            groupClassName:   'col-md-4 col-sm-4 col-xs-6',
            rowHeight:        '200px',
            dropFileLabel:    'Drop file here',
            placeholderImage: {
                image : ADDICON,
                width : '64px'
            },
            maxCount:          '',
            maxFileSize:       '',
            allowedExt:        'png|jpg|jpeg|gif',
            onAddRow:          function() {},
            onRenderedPreview: function() {},
            onRemoveRow:       function() {},
            onExtensionErr:    function() {},
            onSizeErr:         function() {},
            directUpload :  {
                loaderIcon: '<i class="fas fa-sync fa-spin"></i>',
                status:       false,
                url:          '',
                success:      function() {},
                error:        function() {}
            },
        };

        var settings = $.extend( {}, defaults, options );


        /**
         * CALLED ON IMAGE SUCCESS RENDERED AND ADD NEW IMAGE
         * @param {[type]} settings [description]
         * @param {[type]} el       [description]
         */
        function addRow(settings, el){
            last_index = count;
            var groupClassName = settings.groupClassName, rowHeight = settings.rowHeight, fieldName = settings.fieldName, placeholderImage = settings.placeholderImage, dropFileLabel = settings.dropFileLabel;
            var placeholderImageTarget = placeholderImage.image;
            var placeholderImageWidth  = '64px';

            var uploadLoaderIcon = '<i class="fas fa-sync fa-spin"></i>';
            if(typeof settings.directUpload.loaderIcon != 'undefined'){
                uploadLoaderIcon = settings.directUpload.loaderIcon;
            }

            if(typeof placeholderImage.width != 'undefined'){
                placeholderImageWidth = placeholderImage.width;
            }
            var template = `<div class="${groupClassName} spartan_item_wrapper" data-spartanindexrow="${count}" style="margin-bottom : 20px; ">`+
                                `<div style="position: relative;">`+
                                    `<div class="spartan_item_loader" data-spartanindexloader="${count}" style=" position: absolute; width: 100%; height: ${rowHeight}; background: rgba(255,255,255, 0.7); z-index: 22; text-align: center; align-items: center; margin: auto; justify-content: center; flex-direction: column; display : none; font-size : 1.7em; color: #CECECE">` +
                                        `${uploadLoaderIcon}` +
                                    `</div>`+
                                    `<label class="file_upload" style="width: 100%; height: ${rowHeight}; border: 2px dashed #ddd; border-radius: 3px; cursor: pointer; text-align: center; overflow: hidden; padding: 5px; margin-top: 5px; margin-bottom : 5px; position : relative; display: flex; align-items: center; margin: auto; justify-content: center; flex-direction: column;">`+
                                        `<a href="javascript:void(0)" data-spartanindexremove="${count}" style="position: absolute !important; right : 3px; top: 3px; display : none; background : transparent; border-radius: 3px; width: 30px; height: 30px; line-height : 30px; text-align: center; text-decoration : none; color : #ff0700;" class="spartan_remove_row"><i class="tio-add-to-trash"></i></a>`+
                                        `<img style="width: ${placeholderImageWidth}; margin: 0 auto; vertical-align: middle;" data-spartanindexi="${count}" src="${placeholderImageTarget}" class="spartan_image_placeholder" /> `+
                                        `<p data-spartanlbldropfile="${count}" style="color : #5FAAE1; display: none; width : auto; ">${dropFileLabel}</p>`+
                                        `<img style="width: 100%; vertical-align: middle; display:none;" class="img_" data-spartanindeximage="${count}">`+
                                        `<input class="form-control spartan_image_input" accept="image/*" data-spartanindexinput="${count}" style="display : none"  name="${fieldName}" type="file">`+
                                   `</label> `+
                                `</div>`+
                           `</div>`;

            var html = $.parseHTML(template);

            $(el).append(html);
            count++;
            var param = {
                index : count,
                last_index : last_index
            };
            settings.onAddRow.call(this, count);
        }


        /**
         * CALLED ON IMAGE RENDERED
         * @param  {[type]} settings [description]
         * @param  {[type]} input    [description]
         * @param  {[type]} parent   [description]
         * @return {[type]}          [description]
         */
        function loadImage(settings, input, parent){
            var index = $(input).data('spartanindexinput');

            if (input.files && input.files[0]) {

                var file_select = input.files[0], allowedExt = settings.allowedExt, maxFileSize = settings.maxFileSize;
                var file_select_type = file_select.type,
                    regex = new RegExp(`(.*?)\.(${allowedExt})$`);

                if(regex.test(file_select_type) || allowedExt == ''){

                    if((maxFileSize == '') ||  (maxFileSize != '' && file_select.size <= maxFileSize)){

                        var reader = new FileReader();
                        reader.onload = function(e) {
                            $(parent).find('img[data-spartanindexi="'+index+'"]').hide();
                            $(parent).find('a[data-spartanindexremove="'+index+'"]').show();
                            $(parent).find('img[data-spartanindeximage="'+index+'"]').attr('src', e.target.result);
                            $(parent).find('img[data-spartanindeximage="'+index+'"]').show();
                            settings.onRenderedPreview.call(this, index);

                            // on upload
                            if(settings.directUpload.status == true){
                                actionDirectUpload(settings, input, parent);
                            }
                        };

                        reader.readAsDataURL(input.files[0]);
                        var is_add = false;
                        if( $(parent).find('img[data-spartanindeximage="'+index+'"]').is(":visible")  == false){
                            total_count++;
                            is_add = true;
                        }
                        if(index == (count - 1) && is_add ){
                            if(settings.maxCount == ''){
                                addRow(settings, parent);
                            }
                            else if(settings.maxCount != '' && total_count < settings.maxCount ){
                                addRow(settings, parent);
                            }
                        }
                    }
                    else if(maxFileSize != '' && file_select.size > maxFileSize){

                        if( $(parent).find('img[data-spartanindeximage="'+index+'"]').is(":visible")  == true){
                            $(parent).find('img[data-spartanindexi="'+index+'"]').hide();
                        }
                        settings.onSizeErr.call(this, index, file_select);
                        return false;
                    }

                }
                else{
                    if( $(parent).find('img[data-spartanindeximage="'+index+'"]').is(":visible")  == true){
                        $(parent).find('img[data-spartanindexi="'+index+'"]').hide();
                    }
                    settings.onExtensionErr.call(this, index, file_select);
                    return false;
                }

            }
        }


        /**
         * CALLED ON UPLOAD IS ON
         * @param  {[type]} settings [description]
         * @param  {[type]} input    [description]
         * @param  {[type]} parent   [description]
         * @return {[type]}          [description]
         */
        function actionDirectUpload(settings, input, parent){
            var index = $(input).data('spartanindexinput');
            var formData = new FormData();
            var file = input.files[0];
            var additionalParam = settings.directUpload.additionalParam;
            $(parent).find('[data-spartanindexloader="'+index+'"]').css('display', 'flex');
            formData.append('file', file);

            if(typeof additionalParam != 'undefined'){
                $.each(additionalParam, function(key, value){
                    formData.append(key, value);
                });
            }

            $.ajax({
                url: settings.directUpload.url,
                type: 'POST',
                data: formData,
                cache: false,
                processData: false,
                contentType: false,
                success: function(data, textStatus, jqXHR){
                    $(parent).find('[data-spartanindexloader="'+index+'"]').css('display', 'none');

                    if(typeof settings.directUpload.success != 'undefined'){
                        settings.directUpload.success(this, data, textStatus, jqXHR);
                    }
                },
                error: function(jqXHR, textStatus, errorThrown){
                    $(parent).find('[data-spartanindexloader="'+index+'"]').css('display', 'none');
                    if(typeof settings.directUpload.error != 'undefined'){
                        settings.directUpload.error(this, jqXHR, textStatus, errorThrown);
                    }
                }
            });

        }


        /**
         * CALLED ON CLOSE BUTTON CLICK
         * @param  {[type]} settings [description]
         * @param  {[type]} input    [description]
         * @param  {[type]} parent   [description]
         * @return {[type]}          [description]
         */
        function removeRow(settings, input, parent){
            var index = $(input).data('spartanindexremove');
            $(parent).find('[data-spartanindexrow="'+index+'"]').remove();
            if (last_index == index  || $(parent).find('img[data-spartanindeximage="'+last_index+'"]').is(":visible")  == true){
                addRow(settings, parent);
            }
            total_count--;
            settings.onRemoveRow.call(this, index);
        }



        /**
         * CALLED ON HOVER THE BOX
         * @param  {[type]} parent [description]
         * @return {[type]}        [description]
         */
        function onDragEnter(parent){
            var index = $(parent).data('spartanindexrow');
            $(parent).find('.file_upload').css({'border-color': '#5FAAE1', 'background' : '#DBE9F3'});
            if( $(parent).find('img[data-spartanindeximage="'+index+'"]').is(":visible")  == false){
                $(parent).find('p[data-spartanlbldropfile="'+index+'"]').show();
                $(parent).find('img[data-spartanindexi="'+index+'"]').hide();
            }
        }




        /**
         * ON LEAVE BOX
         * @param  {[type]} parent [description]
         * @return {[type]}        [description]
         */
        function onDragLeave(parent){
            var index = $(parent).data('spartanindexrow');
            $(parent).find('.file_upload').css({'border-color': '#ddd', 'background' : 'none'});
            if( $(parent).find('img[data-spartanindeximage="'+index+'"]').is(":visible")  == false){
                $(parent).find('p[data-spartanlbldropfile="'+index+'"]').hide();
                $(parent).find('img[data-spartanindexi="'+index+'"]').show();
            }
        }



        /**
         * DROP IMAGE TO BOX
         * 1. GET THE FILE
         * 2. RESET STYLING
         * 3. RENDER THE IMAGE
         * @param  {[type]} setting [description]
         * @param  {[type]} input   [description]
         * @param  {[type]} parent  [description]
         * @param  {[type]} evt     [description]
         * @return {[type]}         [description]
         */
        function onDropImage(setting, input, parent, evt){
            var index = $(input).data('spartanindexrow');
            var file_p = $(parent).find('.spartan_image_input[data-spartanindexinput="'+index+'"]');
            file_p.files = evt.originalEvent.dataTransfer.files;

            // clear on hover style
            $(input).find('.file_upload').css({'border-color': '#ddd', 'background' : 'none'});
            $(input).find('p[data-spartanlbldropfile="'+index+'"]').hide();
            $(input).find('img[data-spartanindexi="'+index+'"]').show();

            loadImage(settings, file_p, parent);
        }



        return this.each( function() {
            var that = this;
            addRow(settings, that);

            $(this).on("change", ".spartan_image_input", function(){
                loadImage(settings, this, that);
            });

            $(this).on("click", ".spartan_remove_row", function(){
                removeRow(settings, this, that);
            });


            $(this).on("dragenter dragover dragstart", '.spartan_item_wrapper', function(event){
                event.stopPropagation();
                event.preventDefault();
                onDragEnter(this);
            });

            $(this).on("dragleave", '.spartan_item_wrapper', function(){
                onDragLeave(this);
            });


            $(this).on("drop", '.spartan_item_wrapper', function(event){
                event.stopPropagation();
                event.preventDefault();
                onDropImage(settings, this, that, event);
            });

        });
    };
})(jQuery);
