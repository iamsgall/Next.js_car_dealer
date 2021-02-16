import React, {useState} from 'react';
import {Admin, Resource, ListGuesser, EditGuesser} from 'react-admin';
import {firebaseConfig} from '../../config/fire-config';
import HomeDashboard from './HomeDashboard';
import {FirebaseDataProvider} from 'react-admin-firebase';
import CarIcon from '@material-ui/icons/DirectionsCar';

import {CarsList, CarEdit, CarCreate} from './cars';

export default function dashboard() {
  const options = {};
  const dataProvider = FirebaseDataProvider(firebaseConfig, options);

  return (
    <Admin dashboard={HomeDashboard} dataProvider={dataProvider}>
      <Resource
        name='cars'
        list={CarsList}
        icon={CarIcon}
        create={CarCreate}
        edit={EditGuesser}
      />
    </Admin>
  );
}
