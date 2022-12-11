import React, {  lazy } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchAll } from 'redux/contacts/requestAPI';
// import { selectIsLoading, selectError } from 'redux/contacts/contactsSlise';
import { Route, Routes } from 'react-router-dom';
import { HeaderAll } from './Header/Header';

const PageNotFound = lazy(() => import('../pages/PageNotFound/PageNotFound'));
const HomePage = lazy(() => import('../pages/home'));
const SignUp = lazy(() => import('../pages/SignUp'));
const SignIn = lazy(() => import('../pages/SignIn'));
const PhoneBook = lazy(() => import('../pages/Phonebook'));

const App = () => {

  return (
    <Routes>
      <Route path="/" exact element={<HeaderAll />}>
        <Route index element={<HomePage />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="phonebook" element={<PhoneBook />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};
export default App;
