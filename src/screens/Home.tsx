import React, { useState } from 'react'
import { Button, View, Modal, Text } from 'react-native'
import { PreviewImage } from '@/components'

const images = [
    'https://img0.baidu.com/it/u=285032715,784861620&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=800',
    'https://img2.baidu.com/it/u=293922237,887271995&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=1083',
]

export default function Home() {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <View>
            <Button title="Open Gallery Preview" onPress={() => setIsVisible(true)} />
            <PreviewImage visible={isVisible} data={images} initialIndex={1} onClose={() => setIsVisible(false)} />
        </View>
    )
}