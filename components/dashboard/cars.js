import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  Create,
  SimpleForm,
  TextInput,
  AutocompleteInput,
  ImageField,
  ImageInput,
  useNotify,
  useRefresh,
  useRedirect,
  BooleanField,
  NullableBooleanInput,
  required,
  FormWithRedirect,
  DateInput,
  SelectArrayInput,
  SaveButton,
  DeleteButton,
  SaveContextProvider,
  Edit,
} from 'react-admin'
import { Typography, Box, Toolbar } from '@material-ui/core'

export const CarsList = props => {
  return (
    <List {...props}>
      <Datagrid rowClick='edit'>
        <TextField source='brand' />
        <TextField source='model' />
        <TextField source='series' />
        <TextField source='generation' />
        <TextField source='year' />
        <TextField source='type_car' />
        <TextField source='color' />
        <TextField source='engineering' />
        <TextField source='fuel_type' />
        <TextField source='transmission' />
        <TextField source='miles' />
        <TextField source='price_before' />
        <TextField source='price_current' />
        <BooleanField source='available' />
        <ImageField source={'pictures.0.src'} label='Pictures' />
      </Datagrid>
    </List>
  )
}

export const CarEdit = props => {
  const notify = useNotify()
  const refresh = useRefresh()
  const redirect = useRedirect()

  const onSuccess = () => {
    notify(`Car edited successfully`)
    redirect('/cars')
    refresh()
  }
  return (
    <Edit {...props} onSuccess={onSuccess}>
      <CarForm />
    </Edit>
  )
}

export const CarCreate = props => {
  const notify = useNotify()
  const refresh = useRefresh()
  const redirect = useRedirect()

  const onSuccess = () => {
    notify('Car saved successfully')
    redirect('/cars')
    refresh()
  }

  return (
    <Create {...props} onSuccess={onSuccess}>
      <CarForm />
    </Create>
  )
}

const CarForm = props => (
  <FormWithRedirect
    {...props}
    render={formProps => (
      // here starts the custom form layout
      <form>
        <Box p='1em'>
          <Box display='flex'>
            <Box flex={2} mr='1em'>
              <Typography variant='h6' gutterBottom>
                About
              </Typography>

              <Box display='flex'>
                <Box flex={1} mr='0.5em'>
                  <AutocompleteInput
                    source='brand'
                    choices={[
                      { id: 'acura', name: 'Acura' },
                      { id: 'alfa romeo', name: 'Alfa Romeo' },
                      { id: 'audi', name: 'Audi' },
                      { id: 'bmw', name: 'BMW' },
                      { id: 'buick', name: 'Buick' },
                      { id: 'cadillac', name: 'Cadillac' },
                      { id: 'chevrolet', name: 'Chevrolet' },
                      { id: 'chrysler', name: 'Chrysler' },
                      { id: 'dodge', name: 'Dodge' },
                      { id: 'fiat', name: 'Fiat' },
                      { id: 'ford', name: 'Ford' },
                      { id: 'genesis', name: 'Genesis' },
                      { id: 'gmc', name: 'GMC' },
                      { id: 'honda', name: 'Honda' },
                      { id: 'hyundai', name: 'Hyundai' },
                      { id: 'infiniti', name: 'Infiniti' },
                      { id: 'jaguar', name: 'Jaguar' },
                      { id: 'jeep', name: 'Jeep' },
                      { id: 'kia', name: 'Kia' },
                      { id: 'land rover', name: 'Land Rover' },
                      { id: 'lexus', name: 'Lexus' },
                      { id: 'lincoln', name: 'Lincoln' },
                      { id: 'lotus', name: 'Lotus' },
                      { id: 'maserati', name: 'Maserati' },
                      { id: 'mazda', name: 'Mazda' },
                      { id: 'mercedes benz', name: 'Mercedes-Benz' },
                      { id: 'mini', name: 'MINI' },
                      { id: 'mitsubishi', name: 'Mitsubishi' },
                      { id: 'nissan', name: 'Nissan' },
                      { id: 'porsche', name: 'Porsche' },
                      { id: 'ram', name: 'Ram' },
                      { id: 'subaru', name: 'Subaru' },
                      { id: 'toyota', name: 'Toyota' },
                      { id: 'volkswagen', name: 'Volkswagen' },
                      { id: 'volvo', name: 'Volvo' },
                    ]}
                    fullWidth
                    validate={[required()]}
                  />
                </Box>

                <Box flex={1} ml='0.5em'>
                  <TextInput source='model' fullWidth validate={[required()]} />
                </Box>
              </Box>
              <Box display='flex'>
                <Box flex={1} mr='0.5em'>
                  <TextInput
                    source='series'
                    fullWidth
                    validate={[required()]}
                  />
                </Box>

                <Box flex={1} ml='0.5em'>
                  <TextInput
                    source='generation'
                    fullWidth
                    validate={[required()]}
                  />
                </Box>
              </Box>
              <Box display='flex'>
                <Box flex={1} mr='0.5em'>
                  <TextInput
                    source='year'
                    type='number'
                    fullWidth
                    validate={[required()]}
                  />
                </Box>
                <Box flex={2} ml='0.5em'>
                  <AutocompleteInput
                    source='type_car'
                    choices={[
                      { id: 'convertibles', name: 'Convertibles' },
                      { id: 'coupes', name: 'Coupes' },
                      { id: 'SUVs', name: 'SUVs' },
                      { id: 'Sedans', name: 'Sedans' },
                      { id: 'trucks', name: 'Trucks' },
                      { id: 'vans', name: 'Vans' },
                      { id: 'wagons', name: 'Wagons' },
                      { id: 'hatchbacks', name: 'Hatchbacks' },
                      { id: 'hybrids', name: 'Hybrids' },
                      { id: 'electrics', name: 'Electrics' },
                    ]}
                    fullWidth
                    validate={[required()]}
                  />
                </Box>
              </Box>

              <Box mt='1em' />

              <Typography variant='h6' gutterBottom>
                Other Info
              </Typography>
              <Box display='flex'>
                <Box flex={1} mr='0.5em'>
                  <TextInput
                    source='miles'
                    type='number'
                    fullWidth
                    validate={[required()]}
                  />
                </Box>
                <Box flex={1} mr='0.5em'>
                  <TextInput
                    source='price_before'
                    type='number'
                    fullWidth
                    validate={[required()]}
                  />
                </Box>

                <Box flex={1} ml='0.5em'>
                  <TextInput
                    source='price_current'
                    type='number'
                    fullWidth
                    validate={[required()]}
                  />
                </Box>
                <Box flex={1} ml='0.5em'>
                  <NullableBooleanInput
                    label='Available'
                    source='available'
                    fullWidth
                    validate={[required()]}
                  />
                </Box>
              </Box>

              <ImageInput
                source='pictures'
                label='Related pictures'
                accept='image/*'
                multiple={true}
                validate={[required()]}
                children
              >
                <ImageField source='src' title='title' />
              </ImageInput>
            </Box>

            <Box flex={1} ml='1em'>
              <Typography variant='h6' gutterBottom>
                Characteristics
              </Typography>
              <Box display='flex'>
                <Box flex={1} mr='0.5em'>
                  <AutocompleteInput
                    source='color'
                    validate={[required()]}
                    choices={[
                      { id: 'black', name: 'Black' },
                      { id: 'red', name: 'Red' },
                      { id: 'green', name: 'Green' },
                      { id: 'yellow', name: 'Yellow' },
                      { id: 'blue', name: 'Blue' },
                      { id: 'magenta', name: 'Magenta' },
                      { id: 'cyan', name: 'Cyan' },
                      { id: 'white', name: 'White' },
                      { id: 'gray', name: 'Gray' },
                    ]}
                  />
                </Box>

                <Box flex={1} mr='0.5em'>
                  <AutocompleteInput
                    source='engineering'
                    validate={[required()]}
                    choices={[
                      { id: '3', name: '3' },
                      { id: '4', name: '4' },
                      { id: '5', name: '5' },
                      { id: '6', name: '6' },
                      { id: '8', name: '8' },
                    ]}
                  />
                </Box>
              </Box>
              <Box display='flex'>
                <Box flex={1} mr='0.5em'>
                  <AutocompleteInput
                    source='fuel_type'
                    validate={[required()]}
                    choices={[
                      { id: 'gasoline 98', name: 'Gasoline 98' },
                      { id: 'gasoline 95', name: 'Gasoline 95' },
                      { id: 'bioethanol', name: 'Bioethanol' },
                      { id: 'normal diesel', name: 'Normal Diesel' },
                      { id: 'plus diesel', name: 'Plus Diesel' },
                      { id: 'diesel 1D 2D 4D', name: 'Diesel 1D, 2D, 4D' },
                      { id: 'natural_gas', name: 'Natural Gas' },
                    ]}
                  />
                </Box>

                <Box flex={1} mr='0.5em'>
                  <AutocompleteInput
                    source='transmission'
                    validate={[required()]}
                    choices={[
                      {
                        id: 'manual transmission',
                        name: 'Manual transmission',
                      },
                      {
                        id: 'automatic transmission',
                        name: 'Automatic transmission',
                      },
                      {
                        id: 'continuously variable transmission (CVT)',
                        name: 'Continuously variable transmission (CVT)',
                      },
                      {
                        id: 'semi automatic and dual clutch transmissions',
                        name: 'Semi-automatic and dual-clutch transmissions',
                      },
                    ]}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Toolbar>
          <Box display='flex' justifyContent='space-between' width='100%'>
            <SaveButton
              saving={formProps.saving}
              handleSubmitWithRedirect={formProps.handleSubmitWithRedirect}
            />
            <DeleteButton record={formProps.record} />
          </Box>
        </Toolbar>
      </form>
    )}
  />
)
