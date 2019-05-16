customElements.define('my-todos',
    class extends HTMLElement {
        constructor() {
            super()
            let shadow = this.attachShadow({ mode: 'open' });
            let template = document.getElementById('my-todos');
            shadow.appendChild(template.content.cloneNode(true))
        }
        connectedCallback() {
            let btn = this.shadowRoot.querySelector('button');
            let input = this.shadowRoot.querySelector('input');
            let wrapper = this.shadowRoot.querySelector('.wrapper');
            let ul = this.querySelector('ul');
            if (!ul) {
                ul = document.createElement('ul');
                wrapper.appendChild(ul);
            }
            btn.addEventListener('click', () => {
                let elem = document.createElement('li');
                elem.textContent = input.value;
                ul.appendChild(elem);
                input.value = '';
            })
        }
    })
