import { useDispatch, useSelector } from 'react-redux';
import { Input, Label } from './Filter.styled';
import { filterContacts } from '../../redux/filter/filterSlice';
import { getFilterValue } from '../../redux/filter/filterSelectors';


export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilterValue)
  const changeFilter = e => {
    dispatch(filterContacts(e.currentTarget.value));
  };

  return (
    <Label>
      Find contact by name:
      <Input type="text" value={filterValue} onChange={changeFilter} />
    </Label>
  );
};
