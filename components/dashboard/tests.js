import React from 'react';
import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  Filter,
  SimpleShowLayout,
  SimpleForm,
  ReferenceField,
  ReferenceInput,
  TextField,
  TextInput,
  ShowButton,
  EditButton,
  DeleteButton,
  RichTextField,
  SelectInput,
  FileField,
  FileInput,
} from 'react-admin';

export const PostTest = props => (
  <List {...props}>
    <Datagrid>
      <TextField source='name' />
      <TextField source='city' />
    </Datagrid>
  </List>
);
