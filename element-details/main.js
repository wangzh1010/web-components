customElements.define('element-details',
    class extends HTMLElement {
        constructor(){
            super();
            let shadow = this.attachShadow({mode:'open'});
            let template = document.getElementById('element-details-template');
            shadow.appendChild(template.content.cloneNode(true));
        }
    })
