import React, {useState} from 'react';
import FooterBar_Client from '../components/Footer';
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  Picker,
  TouchableHighlight,
} from 'react-native';
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
  Select,
  CheckIcon,
} from 'native-base';
const RegisUserData1 = ({navigation}) => {
  const [Disease, setDisease] = useState(''); //โรคประจำตัว
  const [RightToMedicalCare, setRightToMedicalCare] = useState(''); //สิทธิการรักษาพยาบาล
  const [ColorPress, setColorPress] = useState(''); // Button Color Press
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
    inputBoxฺBig: {
      width: '98%',
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
    inputStyle: {
      width: '100%',
      height: 50,
      backgroundColor: '#FFFFFF',
      justifyContent: 'center',
      borderColor: '#E8E8E8',
      borderWidth: 0.6,
      borderRadius: 8,
      fontSize: 16,
      marginBottom: 16,
    },
    inputStyle1: {
      width: 310,
      height: 50,
      backgroundColor: '#FFFFFF',
      justifyContent: 'center',
      borderColor: '#E8E8E8',
      borderWidth: 0.6,
      borderRadius: 8,
      fontSize: 16,
      marginBottom: 16,
    },
    IconStyle: {
      color: '#18A0FB',
      textAlign: 'center',
    },
    ButtonStyle1: {
      width: 50,
      height: 50,
      backgroundColor: '#fff',
      borderRadius: 8,
      alignSelf: 'flex-end',
      position: 'absolute',
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
    IconBar: {
      color: '#C3C3C3',
    },
    FooterBar: {
      height: 85,
      backgroundColor: 'rgba(249, 249, 249, 0.94)',
    },
    Button: {
      width: 85,
      height: 50,
      backgroundColor: '#FFFFFF',
      borderColor: '#E8E8E8',
      borderWidth: 1,
      borderRadius: 8,
      justifyContent: 'center',
    },
    ButtonStyle: {
      width: 50,
      height: 50,
      backgroundColor: '#fff',
      borderRadius: 8,
    },
    TextButton: {
      color: '#BDBDBD',
    },
    ButtonPress: {
      width: 85,
      height: 50,
      backgroundColor: '#18A0FB',
      borderRadius: 8,
      justifyContent: 'center',
    },
    TextButtonPress: {
      color: '#BDBDBD',
    },
  });

  return (
    <Container style={styles.ContainerStyle}>
      <Header noShadow style={{backgroundColor: 'white', marginLeft: 0}}>
        <Left style={{marginLeft: 13}}>
          <Text style={{fontWeight: 'bold'}}>GO HEALTH</Text>
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
      <Content>
        <Form style={{marginLeft: 20, marginRight: 20}}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: '#18A0FB',
              alignSelf: 'center',
              marginBottom: 20,
            }}>
            จองบริการพาไปพบแพทย์
          </Text>
          <Text style={{fontSize: 16, alignSelf: 'center', marginBottom: 20}}>
            Step 1
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: '#18A0FB',
              alignSelf: 'center',
              marginBottom: 20,
            }}>
            ข้อมูลผู้ต้องการรับบริการ
          </Text>
          <View style={styles.imgView}>
            <Image style={styles.img} source="" />
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
                onPress={() => navigation.navigate('Welcome')}
              />
            </Badge>
          </View>
          <Text
            style={{
              fontSize: 12,
              alignSelf: 'flex-start',
              marginBottom: 20,
              fontWeight: 'bold',
            }}>
            กรุณาตรวจเช็คข้อมูลของผู้ที่ต้องการให้เราดูแลให้ถูกต้อง
          </Text>
          <Grid>
            <Row>
              <Col>
                <TextInput
                  style={styles.inputBoxฺBig}
                  placeholder="ชื่อ-นามสกุล"
                  placeholderTextColor="#BDBDBD"
                  // onChangeText={text => setAge(text)}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <TextInput
                  style={styles.inputBox}
                  placeholder="เพศ"
                  placeholderTextColor="#BDBDBD"
                  // onChangeText={text => setAge(text)}
                />
              </Col>
              <Col>
                <TextInput
                  style={styles.inputBox}
                  placeholder="ปี"
                  placeholderTextColor="#BDBDBD"
                  // onChangeText={text => setAge(text)}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <TextInput
                  style={styles.inputBox}
                  placeholder="กิโลกรัม"
                  placeholderTextColor="#BDBDBD"
                  // onChangeText={text => setAge(text)}
                />
              </Col>
              <Col>
                <TextInput
                  style={styles.inputBox}
                  placeholder="เซนติเมตร"
                  placeholderTextColor="#BDBDBD"
                  // onChangeText={text => setAge(text)}
                />
              </Col>
            </Row>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 'bold',
                alignSelf: 'flex-start',
                marginBottom: 10,
              }}>
              โรคประจำตัว
            </Text>
          </Grid>

          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={styles.inputStyle1}>
              <View style={{flexDirection: 'row'}}>
                <Picker
                  selectedValue={Disease}
                  style={{height: 50, width: '100%'}}
                  onValueChange={(itemValue, itemIndex) =>
                    setDisease(itemValue)
                  }>
                  <Picker.Item label="โรคไต" value="Kidney" />
                  <Picker.Item label="โรคความดัน" value="Hypertension" />
                </Picker>
                <View>
                  <Button style={styles.ButtonStyle1}>
                    <Icon name="chevron-down-sharp" style={styles.IconStyle} />
                  </Button>
                </View>
              </View>
            </View>

            <View style={{alignContent: 'flex-end'}}>
              <Button style={styles.ButtonStyle}>
                <Icon
                  name="add"
                  style={{color: '#18A0FB', textAlign: 'center'}}
                  onPress={() => navigation.navigate('')}
                />
              </Button>
            </View>
          </View>

          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              alignSelf: 'flex-start',
              marginBottom: 10,
            }}>
            โรค/อาการที่ต้องรักษาอย่างต่อเนื่อง
          </Text>

          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 2}}>
              <TextInput
                style={styles.inputBox}
                placeholder=""
                placeholderTextColor="#BDBDBD"
                // onChangeText={text => setAge(text)}
              />
            </View>
            <View>
              <Button
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: '#fff',
                  borderRadius: 8,
                }}>
                <Icon
                  name="add"
                  style={{color: '#18A0FB', textAlign: 'center'}}
                  onPress={() => navigation.navigate('')}
                />
              </Button>
            </View>
          </View>

          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              alignSelf: 'flex-start',
              marginBottom: 10,
            }}>
            สิทธิในการเข้ารับการรักษา
          </Text>

          {/* <View
            style={{
              borderWidth: 1,
              borderColor: '#E8E8E8',
              borderRadius: 8,
            }}>
            
          </View> */}
          <View style={styles.inputStyle}>
            <View style={{flexDirection: 'row'}}>
              <Picker
                selectedValue={RightToMedicalCare}
                style={{height: 50, width: '100%'}}
                onValueChange={(itemValue, itemIndex) =>
                  setRightToMedicalCare(itemValue)
                }>
                <Picker.Item label="บัตรทอง" value="GoldCard" />
                <Picker.Item label="ประกันสังคม" value="SocialSecurity" />
              </Picker>
              <View>
                <Button style={styles.ButtonStyle1}>
                  <Icon name="chevron-down-sharp" style={styles.IconStyle} />
                </Button>
              </View>
            </View>
          </View>

          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              alignSelf: 'flex-start',
              marginBottom: 10,
            }}>
            การแพ้ยา
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignSelf: 'center',
              justifyContent: 'center',
            }}>
            <View style={{flex: 2}}>
              <TextInput
                style={{
                  width: 240,
                  height: 50,
                  backgroundColor: '#FFFFFF',
                  textAlign: 'left',
                  borderColor: '#E8E8E8',
                  borderWidth: 0.6,
                  borderRadius: 8,
                  fontSize: 16,
                }}
                placeholder="โปรดระบุยาที่แพ้"
                placeholderTextColor="#BDBDBD"
                // onChangeText={text => setAge(text)}
              />
            </View>
            <View>
              {/* style={setColorPress ? styles.Button : styles.ButtonPress} */}
              <TouchableHighlight activeOpacity={0.6} underlayColor="#DDDDDD">
                <Button
                  style={{
                    width: 85,
                    height: 50,
                    backgroundColor: '#FFFFFF',
                    borderColor: '#E8E8E8',
                    borderWidth: 1,
                    borderRadius: 8,
                    justifyContent: 'center',
                  }}
                  onPress={() => setColorPress(styles.ButtonPress)}>
                  <Text
                    style={{
                      fontSize: 14,
                      color: '#BDBDBD',
                      alignSelf: 'center',
                    }}>
                    ไม่มี
                  </Text>
                </Button>
              </TouchableHighlight>
            </View>
          </View>

          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              alignSelf: 'flex-start',
              marginBottom: 10,
            }}>
            การแพ้อาหาร
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              justifyContent: 'center',
            }}>
            <View style={{flex: 2}}>
              <TextInput
                style={{
                  width: 240,
                  height: 50,
                  backgroundColor: '#FFFFFF',
                  textAlign: 'left',
                  borderColor: '#E8E8E8',
                  borderWidth: 0.6,
                  borderRadius: 8,
                  fontSize: 16,
                }}
                placeholder=""
                placeholderTextColor="#BDBDBD"
                // onChangeText={text => setAge(text)}
              />
            </View>

            <Button
              style={{
                width: 85,
                height: 50,
                backgroundColor: '#FFFFFF',
                borderColor: '#E8E8E8',
                borderWidth: 1,
                borderRadius: 8,
                justifyContent: 'center',
              }}>
              <Text
                style={{fontSize: 14, color: '#BDBDBD', alignSelf: 'center'}}>
                ไม่มี
              </Text>
            </Button>
          </View>

          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              alignSelf: 'flex-start',
              marginBottom: 10,
            }}>
            ข้อควรระวังในการดูแล
          </Text>

          <TextInput
            style={styles.inputBoxฺBig}
            placeholder=""
            placeholderTextColor="#BDBDBD"
            // onChangeText={text => setAge(text)}
          />
          <Grid>
            <Row style={{marginBottom: 20}}>
              <Col>
                <Button
                  style={{
                    width: 140,
                    height: 50,
                    backgroundColor: '#fff',
                    borderColor: '#18a0fb',
                    borderWidth: 1,
                    borderRadius: 100,
                    justifyContent: 'center',
                    alignSelf: 'center',
                    marginBottom: 40,
                  }}
                  onPress={() => navigation.navigate('HomeClient')}>
                  <Text style={{color: '#18a0fb', fontWeight: 'bold'}}>
                    กลับ
                  </Text>
                </Button>
              </Col>
              <Col>
                <Button
                  style={{
                    width: 140,
                    height: 50,
                    backgroundColor: '#18a0fb',
                    borderRadius: 100,
                    justifyContent: 'center',
                    alignSelf: 'center',
                    marginBottom: 40,
                  }}
                  onPress={() => navigation.navigate('RegisUserData2')}>
                  <Text style={{fontWeight: 'bold'}}>ถัดไป</Text>
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
export default RegisUserData1;
