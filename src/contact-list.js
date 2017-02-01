import m from 'mithril';
import createContactEntry from './contact-entry';

const getEntries = (cs, onContactClick) =>
  cs.map((c, i) => m(createContactEntry(c, i, onContactClick)));

const createContactList = (contacts, onContactClick) => ({
  view() {
    return m('div#contact-list', getEntries(contacts, onContactClick));
  },
});

export default createContactList;
