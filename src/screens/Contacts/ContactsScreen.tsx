import { FlatList, Text, View } from "react-native"
import mockedContacts from "../../mock/contacts"
import ContactsList from "./ContactsList"
import { useMemo } from "react"

const ContactsScreen = () => {

    return ( 
        <View style={{flex: 1, padding: 12}}>
            <Text>Lista de contatos</Text>
            <ContactsList contacts={mockedContacts}/>
        </View>
    )
}

export default ContactsScreen