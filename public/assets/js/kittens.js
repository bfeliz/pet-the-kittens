$(document).ready(function() {
    $(".change-pet").on("click", function() {
        let id = $(this).data("id");
        let newPetStatus = {
            pet: true
        };

        $.ajax("/api/kittens/" + id, {
            type: "PUT",
            data: newPetStatus
        }).then(function() {
            location.reload();
        });
    });

    $(".create-form").on("submit", function(e) {
        e.preventDefault();
        let newKitten = {
            name: $("#ki")
                .val()
                .trim()
        };

        $.ajax("/api/kittens", {
            type: "POST",
            data: newKitten
        }).then(function() {
            location.reload();
        });
    });

    $(".delete-kitten").on("click", function() {
        let id = $(this).data("id");

        $.ajax("/api/kittens/" + id, {
            type: "DELETE"
        }).then(function() {
            location.reload();
        });
    });
});
