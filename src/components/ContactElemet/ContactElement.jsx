import { useDispatch } from 'react-redux';
import { Button, Div, ListItem } from './ContactElement.styled';
import { deleteContact } from '../../redux/contacts/contactsSlice';


export const ContactElement = ({ id, name, number}) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id))
  }
  return (
    <ListItem>
      <Div>
        {name}: {number}
        <Button onClick={handleDelete}>Delete</Button>
      </Div>
    </ListItem>
  );
};
