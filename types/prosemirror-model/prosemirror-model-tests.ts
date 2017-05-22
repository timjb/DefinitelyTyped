import * as model from 'prosemirror-model';

let fragment = new model.Fragment();

const domOutputSpecs: model.DOMOutputSpec[] = [
  'p',
  document.createElement("p"),
  ['p'],
  ['p', { class: "lemma" }],
  ['p', 'span'],
  ['p', { class: "lemma" }, 'span'],
  ['p', { class: "lemma" }, ['span', 0]],
  ['p', { class: "lemma" }, ['span', 0], document.createElement('img')]
]