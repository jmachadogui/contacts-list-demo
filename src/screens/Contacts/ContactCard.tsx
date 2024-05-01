import {memo} from "react";
import { Image, Text, View } from "react-native"

const ContactCard = ({contact}) => {

    const cardSize = 50;
    const borderRadiusVal = cardSize/2

    return (
        <View style={{
            flexDirection: 'row',
            paddingVertical: 5
        }}>


            <Image
                style={{
                    width: cardSize,
                    height: cardSize,
                    borderRadius: borderRadiusVal
                }}
                source={{uri: contact.photo}}
            />
            <View style={{
                flexDirection: 'column',
                justifyContent: 'center',
                marginLeft: 15
            }}>
                <Text style={{
                    fontSize: 18,
                    fontWeight: '500'
                }}>{contact.name}</Text>
                <Text style={{
                    color: '#808080',
                    fontSize: 12
                }}>{contact.number}</Text>
            </View>
        </View>
    )
}

export default memo(ContactCard);