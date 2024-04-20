import { FlatList, Image, Text, View } from "react-native"
import ContactCard from "./ContactCard"
import { useCallback } from "react"

const ItemSeparator = () => (
    <View style={{
        width: '100%',
        height: 1,
        backgroundColor: '#eeeeee'
    }}></View>
)

const ContactsList = ({contacts}) => {
    const renderContactCard = useCallback(({item, index}) => <ContactCard contact={item} key={index}/>, [])

    return (
        <FlatList 
            data={contacts}
            renderItem={renderContactCard}
            ItemSeparatorComponent={() => <ItemSeparator />}
        />
    )
}

export default ContactsList