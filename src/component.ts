class PassScore extends HTMLElement {
	private field: HTMLInputElement | null = null;
	private button: HTMLButtonElement | null = null;
	private result: HTMLElement | null = null;
	private template: HTMLTemplateElement | null = null;
	private patterns: RegExp[] = [];

	private markup = `
<div part="container">
	<input type="password" part="field" />
	<button type="button" part="button">&#x1f441;</button>
</div>
<p part="score">Password score: <span>0</span></p>`;

	constructor() {
		super();

		this.enableShadowDOM();

		this.field = this.shadowRoot?.querySelector('input') || null;
		this.result = this.shadowRoot?.querySelector('span') || null;
		this.button = this.shadowRoot?.querySelector('button') || null;
		this.patterns = this.getPatterns();
	}

	private getPatterns = (): RegExp[] => {
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

	private enableShadowDOM = (): void => {
		this.attachShadow({ mode: 'open' });

		this.template = document.createElement('template');
		this.template.innerHTML = this.markup;

		this.shadowRoot?.appendChild(this.template.content.cloneNode(true));
	};

	private getScore = (event: Event): void => {
		if (!this.result || !event.target) {
			return;
		}

		this.result.innerText = this.patterns
			.reduce(
				(result: number, pattern: RegExp) =>
					result + (pattern.test((event.target as HTMLInputElement)?.value) ? 1 : 0),
				0
			)
			.toString();
	};

	private toggleFieldType = (event: Event): void => {
		event.preventDefault();

		if (!this.field) {
			return;
		}

		if (this.field.type === 'password') {
			this.field.type = 'text';
		} else {
			this.field.type = 'password';
		}
	};

	connectedCallback() {
		this.field?.addEventListener('input', this.getScore);
		this.button?.addEventListener('click', this.toggleFieldType);
	}

	disconnectedCallback() {
		this.field?.removeEventListener('input', this.getScore);
		this.button?.removeEventListener('click', this.toggleFieldType);
	}
}

window.customElements.define('x-pass-score', PassScore);
