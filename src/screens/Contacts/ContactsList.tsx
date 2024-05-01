import { FlatList, Image, Text, View } from "react-native"
import ContactCard from "./ContactCard"
import { useCallback, useState } from "react"

const ItemSeparator = () => (
    <View style={{
        width: '100%',
        height: 1,
        backgroundColor: '#eeeeee'
    }}></View>
)

const ContactsList = ({contacts}) => {
    const [header, setHeader] = useState(contacts[25].name[0]);

    const renderContactCard = useCallback(({item, index}) => <ContactCard contact={item} key={index}/>, [])

    const onItemsChanged = useCallback(({changed, viewableItems}) => {
        const lastViewableItem = viewableItems[viewableItems.length-1]

        if(lastViewableItem){
            const firstLetter = lastViewableItem.item.name[0]
            if(firstLetter && firstLetter !== header)
               setHeader(firstLetter)
        }
    },[header])

    return (
        <>
            <Text>{header}</Text>
            <FlatList 

                data={contacts}
                renderItem={renderContactCard}
                ItemSeparatorComponent={() => <ItemSeparator />}
                onViewableItemsChanged={onItemsChanged}
            />
        </>
    )
}

export default ContactsList