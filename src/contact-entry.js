import m from 'mithril';

const createContactEntry = (contact, i, onContactClick) => ({
  view() {
    return m('div.contact-entry', [
      m('h1', { onclick: () => onContactClick(i) }, contact.name),
      m('p', contact.phone),
    ]);
  },
});

export default createContactEntry;
