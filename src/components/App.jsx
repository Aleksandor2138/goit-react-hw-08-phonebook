import React, { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAll } from 'redux/contacts/requestAPI';
import { selectIsLoading, selectError } from 'redux/contacts/contactsSlise';
import { Route, Routes } from 'react-router-dom';
import { HeaderAll } from './Header/Header';

const PageNotFound = lazy(() => import('../pages/PageNotFound/PageNotFound'));
const HomePage = lazy(() => import('../pages/home'));
const SignUp = lazy(() => import('../pages/SignUp'));
const SignIn = lazy(() => import('../pages/SignIn'));
const PhoneBook = lazy(() => import('../pages/Phonebook'));

const App = () => {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  // useEffect(() => {
  //   dispatch(fetchAll());
  // }, [dispatch]);

  return (
    <Routes>
      <Route path="/" exact element={<HeaderAll />}>
        <Route index element={<HomePage />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="phonebook" element={<PhoneBook />} />
        {/* <Route path="movies/:id" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route> */}
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
    // <Section>
    //   <Containet>
    //     <div>
    //       <H1>Phonebook</H1>
    //       <ContactForm />
    //     </div>

    //     <DivList>
    //       <h2>Contacts</h2>
    //       <Filter />
    //       {isLoading && !error && <Loader />}
    //       <ContactList />
    //     </DivList>
    //   </Containet>
    // </Section>
  );
};
export default App;
