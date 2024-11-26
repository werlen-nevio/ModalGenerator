$(".generate-modal").each(function() {
    const Params = JSON.parse($(this).attr("modalParams"));

    const HTMLContent = getHTMLContent(Params);

    $(this).append(HTMLContent);
});

function getHTMLContent(params) {
    const HTML = `
        <div class="modal fade" id="${params.id}" aria-labelledby="${params.id}Label" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="${params.id}Label">${params.title}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        This is the content of the modal.
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
        `

    return HTML;
}