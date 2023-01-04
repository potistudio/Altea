const EDITOR_ELEMENT: HTMLElement = document.getElementById ("editor")!;

function createEditor(): void {
	let editor: AceAjax.Editor = ace.edit (EDITOR_ELEMENT);
	editor.setOptions ({
		"cursorStyle": "smooth",
		"fontFamily": "Fira Code",
		"fontSize": 16,
	});
}

window.onload = () => {
	createEditor();
}