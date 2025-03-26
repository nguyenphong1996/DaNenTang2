import { StyleSheet, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { Title, Card, Items, SubTitle, Button, Wrapper } from '../../component/Body'

const Bai2 = () => {
    return (
        <Wrapper style={styles.container}>
            <Title title="Lịch Trình" />
            <Card>
                <Items label="Địa điểm" value="Hồ Tràm - Vùng Tàu" />
                <Items label="Thời gian" value="09:00 AM - 12:00 AM, 12/12/2024" />
                <Items label="Phương tiện di chuyển" value="Xe bus" />
                <Items label="Thời gian" value="21:00 - 22:00" />
                <Text>Hình ảnh</Text>
                <Image
                    source={{ uri: 'https://media.vietnamplus.vn/images/7d14e66442e677f2c8d22138f65ca045a210ff1322919f728b13fe0b10e47acfe49929f02ed6b074bc52b4d1bc482c64/bai_bien_11.jpg' }}
                    style={styles.image}
                />
            </Card>

            <SubTitle subtitle="Khách Sạn" />
            <Card>
                <Items label="Tên khách sạn" value="Hồng Quỳnh" />
                <Items label="Giờ mở của" value="06:00 AM - 12:00 AM" />
                <Items label="Địa điểm" value="234 Quang Trung, Hồ Chí Minh" />
                <Button title="Đặt phòng" onPress={() => alert('Đặt phòng thành công')} />
            </Card>
        </Wrapper>
    )
}

export default Bai2

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 180,
        marginVertical: 10,
    }
})