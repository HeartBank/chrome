class EditableNameTag extends Polymer.Element {
  static get is() { return "editable-name-tag"; }

  // configure the owner property
  static get properties() {
    return {
      owner: {
        type: String,
        value: 'Daniel'
      }
    };
  }

}
customElements.define(EditableNameTag.is, EditableNameTag);
