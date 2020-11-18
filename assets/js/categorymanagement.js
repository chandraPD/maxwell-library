
        function alertSuccess() {
            swal("Success", "Your Category has been Added!", "success");
        }

        function editSuccess() {
            swal("Success", "Your Category has been Edited!", "success");
        }

        $(document).ready(function () {
            $.validator.setDefaults({
                submitHandler: function () {
                    alertSuccess();
                    $('#modal-add').modal('hide');
                    $('#modal-add').on('hidden.bs.modal', function (e) {
                        $(this).find('#addCategory')[0].reset();
                    });
                }
            });
            $('#addCategory').validate({
                rules: {
                    categoryId: {
                        required: true,
                    },
                    categoryName: {
                        required: true,
                    }
                },
                messages: {
                    categoryId: {
                        required: "Please enter Category ID",
                    },
                    categoryName: {
                        required: "Please enter Category Name",

                    },
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
                        $(this).find('#editCategory')[0].reset();
                    });
                }
            });
            $('#editCategory').validate({
                rules: {
                    categoryId: {
                        required: true,
                    },
                    categoryName: {
                        required: true,
                    }
                },
                messages: {
                    categoryId: {
                        required: "Please edit Category ID",
                    },
                    categoryName: {
                        required: "Please edit Category Name",

                    },
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

