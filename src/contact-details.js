import m from 'mithril';

const createContactDetails = (contact) => {
  if (!contact) return '';

  return {
    view() {
      return m('div#contact-details', `You have clicked on ${contact.name}.`);
    },
  };
};

export default createContactDetails;
