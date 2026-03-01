const slider_top_left = document.getElementById("top-left");
const slider_top_right = document.getElementById("top-right");
const slider_bottom_left = document.getElementById("bottom-left");
const slider_bottom_right = document.getElementById("bottom-right");
const box = document.getElementById("box");

slider_top_left.addEventListener("input", () => {
    const value = slider_top_left.value;
    box.style.borderTopLeftRadius = value + "px";
});

slider_top_right.addEventListener("input", () => {
    const value = slider_top_right.value;
    box.style.borderTopRightRadius = value + "px";
});

slider_bottom_left.addEventListener("input", () => {
    const value = slider_bottom_left.value;
    box.style.borderBottomLeftRadius = value + "px";
});

slider_bottom_right.addEventListener("input", () => {
    const value = slider_bottom_right.value;
    box.style.borderBottomRightRadius = value + "px";
});

function copyCSS() {
    var copyText = box.style.borderTopLeftRadius + ", " + box.style.borderTopRightRadius + ", " + box.style.borderBottomLeftRadius + ", " +box.style.borderBottomRightRadius;

    navigator.clipboard.writeText(copyText)
        .then(() => {
            alert("Copied the text: " + copyText);
        })
        .catch(err => {
            console.error("Failed to copy:", err);
        });

    return copyText;
}