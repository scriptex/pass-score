class PassScore extends HTMLElement {
	style = `<style>
    :host {
        color: black;
        max-width: 20rem;
        display: block;
        position: relative;
        margin: auto;
    }
    input {
        font-family: inherit;
        font-size: 1rem;
        line-height: 1.25;
        color: inherit;
        width: 100%;
        height: 100%;
        display: block;
        padding: 0.625rem 3rem 0.625rem 1rem;
        border: 1px solid;
        background: white;
        border-radius: 0;
        box-shadow: none;
        box-sizing: border-box;
    }
    button {
        font-size: 1rem;
        line-height: 1;
        color: inherit;
        text-align: center;
        width: 2rem;
        height: 2rem;
        position: absolute;
        top: 0.25rem;
        right: 0.5rem;
        padding: 0.375rem;
        border: 0;
        background: white;
        border-radius: 0;
        box-shadow: none;
        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;
    }
    p {
        font-size: 1rem;
        line-height: 1.25;
        color: inherit;
        padding: 1rem 0;
        margin: 0;
    }
    span {
        float: right;
    }</style>`;

	markup = `
    <input type="password" />
    <button>&#x1f441;</button>
    <p>Password score: <span>0</span></p>
    `;

	constructor() {
		super();

		this.enableShadowDOM();

		this.field = this.shadowRoot.querySelector('input');
		this.button = this.shadowRoot.querySelector('button');
		this.result = this.shadowRoot.querySelector('span');
		this.patterns = this.getPatterns();
	}

	getPatterns = () => {
		const patterns = this.getAttribute('patterns');

		if (patterns && patterns.length) {
			return patterns.split(',').map(pattern => new RegExp(pattern));
		}

		return [
			/\d/, // Digits
			/[A-Z]/, // Uppercase letters
			/[\W_,!?@*\(\)]/, // Special characters
			/^.{8}/ // At least 8 characters
		];
	};

	enableShadowDOM = () => {
		const isStyled = typeof this.getAttribute('styled') === 'string';

		this.attachShadow({ mode: 'open' });

		this.template = document.createElement('template');
		this.template.innerHTML = `${isStyled ? this.style : ''}${this.markup}`;

		this.shadowRoot.appendChild(this.template.content.cloneNode(true));
	};

	getScore = event => {
		this.result.innerText = this.patterns.reduce((accumulator, pattern) => {
			return accumulator + pattern.test(event.target.value);
		}, 0);
	};

	toggleFieldType = event => {
		event.preventDefault();

		if (this.field.type === 'password') {
			this.field.type = 'text';
		} else {
			this.field.type = 'password';
		}
	};

	connectedCallback() {
		this.field.addEventListener('input', this.getScore);
		this.button.addEventListener('click', this.toggleFieldType);
	}

	disconnectedCallback() {
		this.field.removeEventListener('input', this.getScore);
		this.button.removeEventListener('click', this.toggleFieldType);
	}
}

window.customElements.define('x-pass-score', PassScore);
