import { Modal, StyleSheet } from 'react-native'
import Gallery from 'react-native-awesome-gallery'

interface IProps {
    visible: boolean,
    data: string[],
    onClose: Function,
    [propName: string]: any
}

export default function PreviewImage(props: IProps) {
    const { visible, data, onClose } = props

    return (
        <Modal animationType="fade" visible={visible}>
            <Gallery {...props} data={data} onSwipeToClose={() => onClose()} />
        </Modal>
    )
}