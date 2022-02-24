$("#testing-click").on("click", function () {
    let timerInterval
    Swal.fire({
        title: "Attention",
        // html: 'I will close in <b></b> milliseconds.',
        html: "Some field(s) is Required !",
        timer: 3000,
        timerProgressBar: true,
        position: "top-end",
        showCancelButton: false,
        showConfirmButton: false,
        icon: "warning",
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
        }
    })
});

/// Change Icon
/*
- icon Option:
success
error
warning
info
question
 */

/// Change Position
/*
- icon Option:
top
top-start
top-end

center
center-start
center-end

bottom
bottom-start
bottom-end
*/

/// Change Time
// timer: 3000
