"use strict";
const EDITOR_ELEMENT = document.getElementById("editor");
function createEditor() {
    let editor = ace.edit(EDITOR_ELEMENT);
    editor.setOptions({
        "cursorStyle": "smooth",
        "fontFamily": "Fira Code",
        "fontSize": 16,
    });
}
window.onload = () => {
    createEditor();
};
