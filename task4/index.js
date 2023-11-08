$(document).ready(function(){
    let $checkboxes = $("input[type='checkbox']");
    $checkboxes.change(function() {
        if(this.checked && $("input[type='checkbox']:checked").length >= 3) {
            $checkboxes.attr("disabled", "disabled");
        }
    });
})