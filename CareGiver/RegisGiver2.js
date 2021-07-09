import React, {useState} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {
  Container,
  Item,
  Title,
  Form,
  Input,
  Button,
  Center,
  Left,
  Right,
  Body,
  Header,
  Icon,
  Badge,
  Row,
  Col,
  Grid,
  Content,
  CheckBox,
} from 'native-base';

const RegisGiver2 = ({navigation}) => {
  const [groupValues, setGroupValues] = useState([]);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    topBar: {
      display: 'flex',
      backgroundColor: '#00a1ff',
      paddingBottom: 125,
    },
    titleText: {
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white',
      alignSelf: 'center',
    },
    textTop: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#00a1ff',
      margin: 25,
    },
    bgPage: {
      backgroundColor: '#E5E5E5',
    },
    textContent: {
      color: '#c1c1c1',
      fontWeight: 'bold',
      marginLeft: 10,
      marginTop: 15,
    },
    Button: {
      backgroundColor: '#00a1ff',
      width: '100%',
      borderRadius: 50,
      marginTop: 10,
    },
    Button1: {
      backgroundColor: '#18A0FB',
      width: '100%',
      borderRadius: 50,
      marginTop: 20,
    },
    Button2: {
      backgroundColor: '#fff',
      borderColor: '#00a1ff',
      color: '#00a1ff',
      borderWidth: 1,
      width: '100%',
      borderRadius: 50,
      marginTop: 10,
    },
    textButton2: {
      color: '#00a1ff',
      fontWeight: 'bold',
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
      marginTop: 220,
      shadowColor: '#656565',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.8,
      shadowRadius: 2,
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    ShadowColor: {
      shadowColor: 'rgba(101, 101, 101, 0.15)',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.8,
      shadowRadius: 2,
    },
    label: {
      margin: 8,
    },
    CheckBoxStyle: {
      marginRight: 30,
      borderRadius: 5,
    },
  });

  return (
    <Container>
      <View style={styles.topBar}>
        <View>
          <Header noShadow style={{backgroundColor: '#18a0fb'}}>
            <Left style={{flex: 1}}>
              <Icon
                name="close"
                style={{color: '#fff'}}
                onPress={() => navigation.navigate('Welcome')}
              />
            </Left>
            <Body style={{flex: 1}}>
              <Title style={styles.titleText}>Profile</Title>
            </Body>
            <Right></Right>
          </Header>

          <View style={styles.imgView}>
            <Image
              style={styles.img}
              source={require('../assets/images/sammy-williams.jpg')}
            />
            <Badge
              style={{
                backgroundColor: 'white',
                alignSelf: 'center',
                left: 50,
                top: -40,
                scaleX: 0.9,
                scaleY: 0.9,
                borderRadius: 20,
                width: 40,
                height: 40,
                shadowColor: '#000',
                shadowOffset: {width: 1, height: 1},
                shadowOpacity: 0.5,
                shadowRadius: 10,
                elevation: 5,
              }}>
              <Icon
                name="camera"
                style={{color: '#C4C4C4'}}
                onPress={() => navigation.navigate('')}
              />
            </Badge>
          </View>
        </View>
      </View>
      <View>
        <View style={styles.fixToText}>
          <Text style={styles.textTop}>Step 2</Text>
          <Text style={styles.textTop}>ทักษะการทำงาน</Text>
        </View>
        <Form style={{paddingLeft: 15, paddingRight: 15}}>
          <Text style={{marginTop: 10, marginLeft: 10}}>
            กรุณาเลือก ประสบการณ์ทำงานของคุณ?
          </Text>
          <Text style={styles.textContent}>
            ถ่ายรูปบัตรพยาบาลวิชาชีพ/ผู้ช่วยพยาบาล
            หรือบุคคลที่ได้รับการฝึกอบรมในหลักสูตรดูแลผู้สูงอายุ
          </Text>
          <Button block style={styles.Button2}>
            <Text style={{color: '#00a1ff', fontWeight: 'bold'}}>
              อัพโหลดวุฒิบัตร หรือประกาศนียบัตร
            </Text>
          </Button>
          <Text style={styles.textContent}>
            ไม่เคยผ่านการฝึกอบรมในหลักสูตรการดูแลผู้สูงอายุแต่มีประสบการณ์ทำงานไม่ต่ำกว่า
            2 ปี
          </Text>

          <View style={{flexDirection: 'row', marginTop: 15}}>
            <CheckBox style={styles.CheckBoxStyle} value="Exp" />
            <Text style={styles.textButton2}>มีประสบการณ์ทำงานในสายงานนี้</Text>
          </View>
          <Text style={styles.textContent}>
            ไม่เคยผ่านการฝึกอบรมในหลักสูตรดูแลผู้สูงอายุ
          </Text>
          <View style={{flexDirection: 'row', marginTop: 15}}>
            <CheckBox style={styles.CheckBoxStyle} value="NoExp" />
            <Text style={styles.textButton2}>ไม่มีประสบการณ์มาก่อน</Text>
          </View>
          {/* <Checkbox value="one">Hello world</Checkbox>
          <Checkbox value="two">Hello world</Checkbox> */}

          {/* <Checkbox.Group onChange={setGroupValues} value={groupValues}>
            <Checkbox value="Yes">มีประสบการณ์ทำงานในสายงานนี้</Checkbox>
            <Text>ไม่เคยผ่านการฝึกอบรมในหลักสูตรดูแลผู้สูงอายุ</Text>
            <Checkbox value="No">ไม่มีประสบการณ์มาก่อน</Checkbox>
          </Checkbox.Group> */}
          {/* <Content>
            <Form>
              <Grid>
                <Row>
                  <Col>
                    <Text style={{color: '#18A0FB', fontWeight: 'bold'}}>
                      มีประสบการณ์ทำงานในสายงานนี้
                    </Text>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Text style={styles.textContent}>
                      ไม่เคยผ่านการฝึกอบรมในหลักสูตรการดูแลผู้สูงอายุ
                    </Text>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Text style={{color: '#18A0FB', fontWeight: 'bold'}}>
                      ไม่มีประสบการณ์มาก่อน
                    </Text>
                  </Col>
                </Row>
              </Grid>
            </Form>
          </Content> */}
          <Button
            block
            style={styles.Button1}
            onPress={() => navigation.navigate('MessageScreen')}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              ยืนยันตัวตน
            </Text>
          </Button>
        </Form>
      </View>
    </Container>
  );
};

export default RegisGiver2;
