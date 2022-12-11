import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAll } from 'redux/contacts/requestAPI';
import { selectIsLoading, selectError } from 'redux/contacts/contactsSelectors';
import { Loader } from '../components/Loader/Loader';
import { Filter } from '../components/Phonebook/Filter/Filter';
import ContactForm from '../components/Phonebook/ContactForm/ContactForm';
import ContactList from '../components/Phonebook/ContactList/ContactList';
import { Section, Containet, H1, DivList } from '../components/App.stiled';

const PhoneBook = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchAll());
    }, [dispatch]);
    return (
        <Section>
            <Containet>
                <div>
                    <H1>Phonebook</H1>
                    <ContactForm />
                </div>

                <DivList>
                    <h2>Contacts</h2>
                    <Filter />
                    {isLoading && !error && <Loader />}
                    <ContactList />
                </DivList>
            </Containet>
        </Section>
    )
}
export default PhoneBook;