import { ContactElement } from 'components/ContactElemet/ContactElement';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getVisibleContacts } from '../../redux/contacts/contactSelectors';

export const ContactList = () => {
  const visibleContacts = useSelector(getVisibleContacts);

  return (
    <List>
      {visibleContacts.length > 0 ? (
        visibleContacts.map(({ id, name, number }) => (
          <ContactElement key={id} id={id} name={name} number={number} />
        ))
      ) : (
        <p>No contacts found.</p>
      )}
    </List>
  );
};
