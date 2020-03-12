$(document).ready(function() {
    $(".change-pet").on("click", function(e) {
        const id = $(this).data("id");
        const newStatus = $(this).data("newpet");

        const newPetStatus = {
            petted: newStatus
        };

        $.ajax("/api/kittens/" + id, {
            type: "PUT",
            data: newPetStatus
        }).then(function() {
            console.log("changed petting status to", newStatus);
            location.reload();
        });
    });

    $(".create-form").on("submit", function(e) {
        e.preventDefault();

        const newKitten = {
            kitten_name: $("#ki")
                .val()
                .trim(),
            petted: $("[name=petted]:checked")
                .val()
                .trim()
        };

        $.ajax("/api/kittens", {
            type: "POST",
            data: newKitten
        }).then(function() {
            console.log("created new kitten");
            location.reload();
        });
    });
});
