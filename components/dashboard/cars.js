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

export const SoapsList = props => {
  return (
    <List {...props}>
      <Datagrid rowClick='edit'>
        <TextField source='id' />
        <TextField source='name' />
        <TextField source='type' />
        <TextField source='color' />
        <TextField source='quantity' />
        <TextField source='price_current' />
        <TextField source='price_before' />
        <TextField source='available' />
        <ImageField source={'pictures.0.src'} label='Pictures' />
      </Datagrid>
    </List>
  )
}

export const SoapEdit = props => {
  const notify = useNotify()
  const refresh = useRefresh()
  const redirect = useRedirect()

  const onSuccess = () => {
    notify(`Soap edited successfully`)
    redirect('/soaps')
    refresh()
  }
  return (
    <Edit {...props} onSuccess={onSuccess}>
      <SoapForm />
    </Edit>
  )
}

export const SoapCreate = props => {
  const notify = useNotify()
  const refresh = useRefresh()
  const redirect = useRedirect()

  const onSuccess = () => {
    notify('Soap saved successfully')
    redirect('/soaps')
    refresh()
  }

  return (
    <Create {...props} onSuccess={onSuccess}>
      <SoapForm />
    </Create>
  )
}

const SoapForm = props => (
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
                  <TextInput source='id' fullWidth validate={[required()]} />
                </Box>

                <Box flex={1} ml='0.5em'>
                  <TextInput source='name' fullWidth validate={[required()]} />
                </Box>
              </Box>
              <Box display='flex'>
                <Box flex={1} mr='0.5em'>
                  <AutocompleteInput
                    source='type'
                    validate={[required()]}
                    fullWidth
                    choices={[
                      { id: 'hard soap', name: 'Hard soap' },
                      { id: 'soft soaps', name: 'Soft soaps' },
                      { id: 'moisturizing soaps', name: 'Moisturizing soaps' },
                      { id: 'common soaps', name: 'Common soaps' },
                      {
                        id: 'dermatological soaps',
                        name: 'Dermatological soaps',
                      },
                      { id: 'natural soaps', name: 'Natural soaps' },
                      { id: 'mild soaps', name: 'Mild soaps' },
                      { id: 'therapeutic soaps', name: 'Therapeutic soaps' },
                      { id: 'liquid soaps', name: 'Liquid soaps' },
                      { id: 'glycerin soaps', name: 'Glycerin soaps' },
                      { id: 'milk soap', name: 'Milk soap' },
                      { id: 'oat soap', name: 'Oat soap' },
                      { id: 'nacre shell soap', name: 'Nacre shell soap' },
                      { id: 'honey soap', name: 'Honey soap' },
                      { id: 'bar soaps', name: 'Bar soaps' },
                      { id: 'medicated soaps', name: 'Medicated soaps' },
                      { id: 'blue soap', name: 'Blue soap' },
                      { id: 'children soaps', name: 'Children soaps' },
                      { id: 'neutral soaps', name: 'Neutral soaps' },
                      { id: 'scented soaps', name: 'Scented soaps' },
                      { id: 'marseille soap', name: 'Marseille soap' },
                      { id: 'astringent soaps', name: 'Astringent soaps' },
                      { id: 'shaving soap', name: 'Shaving soap' },
                      { id: 'exfoliating soaps', name: 'Exfoliating soaps' },
                    ]}
                  />
                </Box>

                <Box flex={1} ml='0.5em'>
                  <AutocompleteInput
                    source='color'
                    validate={[required()]}
                    fullWidth
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
                      { id: 'diverse', name: 'Diverse' },
                    ]}
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
                    source='price_current'
                    type='number'
                    fullWidth
                    validate={[required()]}
                  />
                </Box>
                <Box flex={1} ml='0.5em'>
                  <TextInput
                    source='price_before'
                    type='number'
                    fullWidth
                    validate={[required()]}
                  />
                </Box>

                <Box flex={1} ml='0.5em'>
                  <TextInput
                    source='quantity'
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
              <Box flex={1} mr='0.5em'></Box>
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
