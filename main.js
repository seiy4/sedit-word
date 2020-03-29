class EditWord extends HTMLElement {
  constructor () {
    super()

    const shadowRoot = this.attachShadow({ mode: 'open' })
    const form = document.createElement('form')
    const input = document.createElement('input')
    const span = document.createElement('span')

    const style = document.createElement('style')
    style.textContent = 'span { background-color: #777; padding: 0 2px; color: blue; }'

    shadowRoot.appendChild(style)
    shadowRoot.appendChild(form)
    shadowRoot.appendChild(span)

    span.textContent = this.textContent
    input.value = this.textContent

    form.appendChild(input)
    form.style.display = 'none'
    span.style.display = 'inline-block'
    input.style.width = span.clientWidth + 'px'

    this.setAttribute('tabindex', '0')
    input.setAttribute('required', 'required')
    this.style.display = 'inline-block'

    this.addEventListener('click', () => {
      span.style.display = 'none'
      form.style.display = 'inline-block'
      input.focus()
      input.setSelectionRange(0, input.value.length)
    })

    form.addEventListener('submit', e => {
      updateDisplay()
      e.preventDefault()
    })

    input.addEventListener('blur', updateDisplay)

    function updateDisplay () {
      span.style.display = 'inline-block'
      form.style.display = 'none'
      span.textContent = input.value
      input.style.width = span.clientWidth + 'px'
    }
  }
}
customElements.define('sedit-word', EditWord)
