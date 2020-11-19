
        function alertSuccess() {
            swal("Success", "Your Slideshow Image has been Added!", "success");
        }

        function editSuccess() {
            swal("Success", "Your Slideshow Image has been Edited!", "success");
        }

        function resetModal() {
            $('#modal-add').on('hidden.bs.modal', function () {
                $(this).find('#addSlideshow')[0].reset();
            });
        }

        $(document).ready(function () {
            $.validator.setDefaults({
                submitHandler: function () {
                    alertSuccess();
                    $('#modal-add').modal('hide');
                    $('#modal-add').on('hidden.bs.modal', function () {
                        $(this).find('#addSlideshow')[0].reset();
                    });
                }
            });
            $('#addSlideshow').validate({
                rules: {
                    slideshowTitle: {
                        required: true,
                    },
                    slideshowSubTitle: {
                        required: true,
                    },
                    slideshowImage: {
                        extension: "png|jpe?g",
                    },
                },
                messages: {
                    slideshowTitle: {
                        required: "Please enter Image Title",
                    },
                    slideshowSubTitle: {
                        required: "Please enter Image Subtitle",
                    },
                    slideshowImage: {
                        extension: "Only accept jpg, jpeg, or png images",
                    }
                },
                errorElement: 'span',
                errorPlacement: function (error, element) {
                    error.addClass('invalid-feedback');
                    element.closest('.form-group').append(error);
                },
                highlight: function (element, errorClass, validClass) {
                    $(element).addClass('is-invalid');
                },
                unhighlight: function (element, errorClass, validClass) {
                    $(element).removeClass('is-invalid');
                }
            });
        });

        $(document).ready(function () {
            $.validator.setDefaults({
                submitHandler: function () {
                    editSuccess();
                    $('#modal-edit').modal('hide');
                    $('#modal-edit').on('hidden.bs.modal', function (e) {
                        $(this).find('#editSlideshow')[0].reset();
                    });
                }
            });
            $('#editSlideshow').validate({
                rules: {
                    slideshowTitle: {
                        required: true,
                    },
                    slideshowSubTitle: {
                        required: true,
                    },
                    slideshowImage: {
                        extension: "png|jpe?g",
                    },
                },
                messages: {
                    slideshowTitle: {
                        required: "Please enter Image Title",
                    },
                    slideshowSubTitle: {
                        required: "Please enter Image Subtitle",
                    },
                    slideshowImage: {
                        extension: "Only accept jpg, jpeg, or png images",
                    }
                },
                errorElement: 'span',
                errorPlacement: function (error, element) {
                    error.addClass('invalid-feedback');
                    element.closest('.form-group').append(error);
                },
                highlight: function (element, errorClass, validClass) {
                    $(element).addClass('is-invalid');
                },
                unhighlight: function (element, errorClass, validClass) {
                    $(element).removeClass('is-invalid');
                }
            });
        });

        $(function () {
            //Colorpicker
            $('.my-colorpicker1').colorpicker()
            //color picker with addon
            $('.my-colorpicker2').colorpicker()
      
            $('.my-colorpicker2').on('colorpickerChange', function (event) {
              $('.my-colorpicker2 .fa-square').css('color', event.color.toString());
            });
      
            $("input[data-bootstrap-switch]").each(function () {
              $(this).bootstrapSwitch('state', $(this).prop('checked'));
            });
      
          })

