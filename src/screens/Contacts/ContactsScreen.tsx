import { FlatList, Text, View } from "react-native"
import mockedContacts from "../../mock/contacts"
import ContactsList from "./ContactsList"
import { useMemo } from "react"

const ContactsScreen = () => {

    const orderedContacts = useMemo(() => {
        
        return mockedContacts.sort((a, b) => {
            const nameA = a.name.toUpperCase()
            const nameB = b.name.toUpperCase()

            if(nameA> nameB)
                return 1
            if(nameA < nameB)
                return -1
            return 0
        })

    }, [])

    return ( 
        <View style={{flex: 1, padding: 12}}>
            <Text>Lista de contatos</Text>
            <ContactsList contacts={orderedContacts}/>
        </View>
    )
}

export default ContactsScreen