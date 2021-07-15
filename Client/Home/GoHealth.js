import React from 'react';
import FooterBar_Client from '../../components/Footer';
import {View, StyleSheet, Image, TextInput} from 'react-native';
import {
  Container,
  Content,
  Text,
  Button,
  Left,
  Body,
  Right,
  Icon,
  Header,
  Footer,
  FooterTab,
  Badge,
  Form,
  Grid,
  Row,
  Col,
} from 'native-base';
const GoHealth = ({navigation}) => {
  const styles = StyleSheet.create({
    inputBox: {
      width: '95%',
      height: 50,
      backgroundColor: '#FFFFFF',
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderColor: '#E8E8E8',
      borderWidth: 0.6,
      borderRadius: 8,
      fontSize: 16,
      marginBottom: 16,
    },
    imgView: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
    },
    img: {
      height: 150,
      width: 150,
      borderRadius: 80,
      borderWidth: 4,
      borderColor: '#fff',
      alignSelf: 'center',
      backgroundColor: '#D1D5DB',
    },
    ContainerStyle: {
      //   paddingLeft: 10,
      //   paddingRight: 10,
    },
    IconBar: {
      color: '#C3C3C3',
    },
    FooterBar: {
      height: 85,
      backgroundColor: 'rgba(249, 249, 249, 0.94)',
    },
  });
  return (
    <Container style={styles.ContainerStyle}>
      <Header noShadow style={{backgroundColor: 'white', marginLeft: 0}}>
        <Left style={{marginLeft: 13}}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>GO HEALTH</Text>
        </Left>
        <Right style={{marginRight: 23}}>
          <Icon
            name="notifications"
            style={{color: '#BDBDBD', transform: [{rotate: '20deg'}]}}
            onPress={() => navigation.navigate('')}
          />
          <Badge
            style={{
              position: 'absolute',
              top: -9,
              right: -10,
              scaleX: 0.6,
              scaleY: 0.6,
              borderColor: 'white',
            }}>
            <Text style={{fontSize: 20}}>3</Text>
          </Badge>
        </Right>
      </Header>
      <Image
        source={require('../../components/Img/GoGoHealth-Header.jpg')}
        style={{
          width: '100%',
          height: 154,
          marginBottom: 30,
        }}></Image>
      <Content>
        <Form style={{marginLeft: 20, marginRight: 20}}>
          <Text
            style={{
              fontWeight: 'bold',
              color: '#18A0FB',
              fontSize: 18,
              alignSelf: 'center',
              marginBottom: 20,
            }}>
            Go Health - บริการพาไปพบแพทย์
          </Text>
          <Text style={{marginBottom: 20, fontSize: 12}}>
            {' '}
            บริการพาผู้สูงอายุไปพบแพทย์ โดยมีผู้ดูแลส่วนตัว(Caregiver)
            ที่ผ่านการ คัดกรอง การอบรม
            และทดสอบการดูแลจากผู้เชี่ยวชาญเพื่อให้คุณมั่นใจได้ว่า
            คุณจะได้ผู้ดูแลที่มีความรู้ในการดูแลผู้ป่วยสูงอายุ อย่างมีมาตรฐาน
            ปลอดภัย ผ่านการรับรอง และเชื่อถือได้
          </Text>
          <Text style={{marginBottom: 20, fontWeight: 'bold', fontSize: 12}}>
            รายละเอียดการให้บริการ
          </Text>
          <Text style={{fontSize: 12, marginBottom: 10}}>
            1.ผู้ดูแลจะเดินทางไปรับตามที่อยู่ที่แจ้ง หรือ เจอกันที่โรงพยาบาล
          </Text>
          <Text style={{fontSize: 12, marginBottom: 10}}>
            {' '}
            2. ต่อติดยื่นบัตร และเช็คสิทธิ์คนไข้เมื่อถึงโรงพยาบาล
          </Text>
          <Text style={{fontSize: 12, marginBottom: 10}}>
            {' '}
            3. ให้ความช่วยเหลือ อำนวยความสะดวกต่าง ๆ คอยอยู่เป็นเพื่อน คอยดูแล
            ในการดำเนินขั้นตอนการรักษา และระหว่างรอรับบริการจากทางโรงพยาบาล
          </Text>
          <Text style={{fontSize: 12, marginBottom: 10}}>
            {' '}
            4. เข้าพบแพทย์พร้อมคนไข้เพื่อช่วย รับฟังข้อมูลจากการตรวจจากแพทย์
            รวมไปถึงสอบถามแนวทางในการปฏิบัติตัวที่เหมาะสม เพื่อนำข้อมูลที่ได้รับ
            ส่งต่อให้ญาติ หรือผู้เกี่ยวข้องให้ได้ทราบและนำไปปฏิบัติต่อไป
          </Text>
          <Text style={{fontSize: 12, marginBottom: 10}}>
            {' '}
            5. ผู้ดูแลจะพาเดินทางกลับไปส่งที่ตามที่อยู่ที่แจ้ง หรือ
            นัดรับกันที่โรงพยาบาล
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              marginBottom: 20,
              marginTop: 20,
              fontSize: 12,
            }}>
            ค่าบริการ
          </Text>
          <Text style={{marginBottom: 10, fontSize: 12}}>
            อัตราค่าบริการ Go Health ราคา 1,500 บาท
          </Text>
          <Text style={{color: '#FF3A44', fontWeight: 'bold', fontSize: 12}}>
            หมายเหตุ
          </Text>
          <Text style={{color: '#FF3A44', fontSize: 12}}>
            ค่าบริการไม่รวมค่าใช้จ่ายในการเดินทาง(แท็กซี่)
            ทั้งไปและกลับโรงพยาบาล
          </Text>
          <Grid>
            <Row
              style={{
                marginBottom: 30,
                marginTop: 20,
                alignSelf: 'center',
                marginLeft: 25,
              }}>
              <Col>
                <Button
                  style={{
                    width: 140,
                    height: 50,
                    borderRadius: 100,
                    backgroundColor: '#fff',
                    borderColor: '#18A0FB',
                    borderWidth: 1,
                    justifyContent: 'center',
                  }}
                  onPress={() => navigation.navigate('HomeClient')}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      color: '#18A0FB',
                    }}>
                    กลับ
                  </Text>
                </Button>
              </Col>
              <Col>
                <Button
                  style={{
                    width: 140,
                    height: 50,
                    borderRadius: 100,
                    backgroundColor: '#18A0FB',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      color: '#fff',
                    }}
                    onPress={() => navigation.navigate('RegisUserData1')}>
                    จองเลย!
                  </Text>
                </Button>
              </Col>
            </Row>
          </Grid>
        </Form>
      </Content>
      {/* Footer */}
      <FooterBar_Client></FooterBar_Client>
    </Container>
  );
};
export default GoHealth;
