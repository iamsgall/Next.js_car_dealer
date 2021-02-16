import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  Edit,
  Create,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
  Filter,
  DeleteButton,
  SimpleList,
  DateInput,
  BooleanInput,
  AutocompleteInput,
  ImageField,
  ImageInput,
  useNotify,
  useRefresh,
  useRedirect,
  BooleanField,
  NullableBooleanInput,
  required,
} from 'react-admin';

export const CarsList = props => {
  const regExp = /\d/;
  return (
    <List {...props}>
      <Datagrid rowClick='edit'>
        <TextField source='brand' />
        <TextField source='model' />
        <TextField source='generation' />
        <TextField source='series' />
        <TextField source='type_car' />
        <TextField source='color' />
        <TextField source='transmission' />
        <TextField source='fuel_type' />
        <TextField source='engineering' />
        <TextField source='miles' />
        <TextField source='price' />
        <BooleanField source='available' />
        <ImageField source={'pictures.0.src'} label='Pictures' />
      </Datagrid>
    </List>
  );
};

// export const CarEdit = props => {
//   <Edit {...props}>
//     <SimpleForm>
//     </SimpleForm>
//   </Edit>;
// };

export const CarCreate = props => {
  const notify = useNotify();
  const refresh = useRefresh();
  const redirect = useRedirect();

  const onSuccess = () => {
    notify('Car saved successfully');
    redirect('/cars');
    refresh();
  };

  return (
    <Create {...props} onSuccess={onSuccess}>
      <SimpleForm submitOnEnter='false'>
        <TextInput source='brand' validate={[required()]} />
        <TextInput source='model' validate={[required()]} />
        <TextInput source='generation' validate={[required()]} />
        <TextInput source='series' validate={[required()]} />
        <AutocompleteInput
          source='type_car'
          choices={[
            {id: 'sedan', name: 'Sedan'},
            {id: 'Coupe', name: 'Coupe'},
            {id: 'sport car', name: 'Sport Car'},
            {id: 'station wagon', name: 'Station Wagon'},
            {id: 'hatchback', name: 'Hatchback'},
            {id: 'convertible', name: 'Convertible'},
            {id: 'suv', name: 'SUV'},
            {id: 'minivan', name: 'Minivan'},
            {id: 'pickup truck', name: 'Pickup Truck'},
          ]}
          validate={[required()]}
        />

        <AutocompleteInput
          source='color'
          choices={[
            {id: 'black', name: 'Black'},
            {id: 'red', name: 'Red'},
            {id: 'green', name: 'Green'},
            {id: 'yellow', name: 'Yellow'},
            {id: 'blue', name: 'Blue'},
            {id: 'magenta', name: 'Magenta'},
            {id: 'cyan', name: 'Cyan'},
            {id: 'white', name: 'White'},
            {id: 'gray', name: 'Gray'},
          ]}
          validate={[required()]}
        />
        <AutocompleteInput
          source='transmission'
          choices={[
            {id: 'manual transmission', name: 'Manual transmission'},
            {id: 'automatic transmission', name: 'Automatic transmission'},
            {
              id: 'continuously variable transmission (CVT)',
              name: 'Continuously variable transmission (CVT)',
            },
            {
              id: 'semi automatic and dual clutch transmissions',
              name: 'Semi-automatic and dual-clutch transmissions',
            },
          ]}
          validate={[required()]}
        />
        <AutocompleteInput
          source='fuel_type'
          choices={[
            {id: 'gasoline 98', name: 'Gasoline 98'},
            {id: 'gasoline 95', name: 'Gasoline 95'},
            {id: 'bioethanol', name: 'Bioethanol'},
            {id: 'normal diesel', name: 'Normal Diesel'},
            {id: 'plus diesel', name: 'Plus Diesel'},
            {id: 'diesel 1D 2D 4D', name: 'Diesel 1D, 2D, 4D'},
            {id: 'natural_gas', name: 'Natural Gas'},
          ]}
          validate={[required()]}
        />
        <AutocompleteInput
          source='engineering'
          choices={[
            {id: '3', name: '3'},
            {id: '4', name: '4'},
            {id: '5', name: '5'},
            {id: '6', name: '6'},
            {id: '8', name: '8'},
          ]}
          validate={[required()]}
        />

        <TextInput source='miles' type='number' validate={[required()]} />
        <TextInput source='price' type='number' validate={[required()]} />

        <ImageInput
          source='pictures'
          label='Related pictures'
          accept='image/*'
          multiple='true'
          validate={[required()]}
        >
          <ImageField source='src' title='title' />
        </ImageInput>

        <NullableBooleanInput
          label='Available'
          source='available'
          validate={[required()]}
        />
      </SimpleForm>
    </Create>
  );
};
