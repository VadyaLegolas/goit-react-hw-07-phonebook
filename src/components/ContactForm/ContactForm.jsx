import { useDispatch } from 'react-redux';
import { Button, FormContact, Input, Label } from './ContactForm.styled';
import { useState } from 'react';
import { addContact } from 'redux_files/contacts/operations';


export const ContactForm = ({ onSubmit }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const handleChange = ({ target: { name, value } }) => {
    if (name === 'name') {
      setName(value);
    }
    if (name === 'phone') {
      setPhone(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addContact({name, phone}));
    setName('');
    setPhone('');
  };

  return (
    <FormContact autoComplete="off" onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          required
          onChange={handleChange}
        />
      </Label>

      <br />
      <Label>
        Number
        <Input
          type="tel"
          name="phone"
          value={phone}
          required
          onChange={handleChange}
        />
      </Label>

      <Button type="submit">Add contact</Button>
    </FormContact>
  );
};
