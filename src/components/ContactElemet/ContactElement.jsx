import { useDispatch } from 'react-redux';
import { Button, Div, ListItem } from './ContactElement.styled';
import { deleteContact } from 'redux_files/contacts/operations';


export const ContactElement = ({ id, name, phone}) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id))
  }
  return (
    <ListItem>
      <Div>
        {name}: <b>{phone}</b>
        <Button onClick={handleDelete}>Delete</Button>
      </Div>
    </ListItem>
  );
};
