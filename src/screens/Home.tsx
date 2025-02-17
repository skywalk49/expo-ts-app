import { Button, Text } from '@react-navigation/elements'
import { StyleSheet, View } from 'react-native'

export default function Home() {
    return (
        <View>
            <Button screen="Detail">跳转到详情</Button>
        </View>
    )
}

const styles = StyleSheet.create({

})
