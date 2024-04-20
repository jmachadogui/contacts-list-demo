import { FlatList, Image, Text, View } from "react-native"
import ContactCard from "./ContactCard"

const ItemSeparator = () => (
    <View style={{
        width: '100%',
        height: 1,
        backgroundColor: '#eeeeee'
    }}></View>
)

const ContactsList = ({contacts}) => {
    return (
        <FlatList 
            data={contacts}
            renderItem={({item}) => <ContactCard contact={item}/>}
            ItemSeparatorComponent={() => <ItemSeparator />}
        />
    )
}

export default ContactsList