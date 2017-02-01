import m from 'mithril';
import createContactList from './contact-list';
import createContactDetails from './contact-details';

const state = {
  contacts: [
    {
      name: 'George Foreman',
      phone: '555-867-5309',
    },
    {
      name: 'Curtis Jackson',
      phone: '123-456-7890',
    },
    {
      name: 'Crazy Bill',
      phone: '987-647-2534',
    },
  ],
  currentContact: null,
};

const updateContact = (index) => {
  state.currentContact = index;
};

const App = {
  view() {
    return m('div#app-container', [
      m(createContactList(state.contacts, updateContact)),
      m(createContactDetails(state.contacts[state.currentContact])),
    ]);
  },
};

export default App;
