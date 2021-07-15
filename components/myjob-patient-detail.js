import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Row, Col, Grid, CardItem, Icon} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';
const App = params => {
  const styles = StyleSheet.create({
    row: {
      height: 35,
      marginBottom: 10,
    },
    text: {
      fontSize: 13,
    },
    textBold: {fontWeight: 'bold', fontSize: 13},
  });
  const [Patient, setPatient] = useState({
    weight: 59,
    height: 161,
    disease: 'โรคไต, ความดัน',
    contiguousDisease: 'ฟอกไตทุกสัปดาห์',
    drugAllergy: 'ไม่แพ้ยา',
    foodAllergy: 'แพ้อาหารทะเล, หลีกเลี่ยงอาหารโพแทสเซียมสูง',
    warning: 'เดินเซง่าย, บ้านหมุนบ่อย',
    permit: 'สิทธิบัตรทอง (UC)',
  });
  return (
    <CardItem
      style={{
        marginLeft: 10,
        marginRight: 20,
        width: 320,
        display: 'flex',
      }}>
      <View style={{width: '100%', height: 450}}>
        <Grid>
          <Row style={styles.row}>
            <Col>
              <Text style={{fontWeight: 'bold', fontSize: 14}}>
                ข้อมูลสุขภาพ
              </Text>
            </Col>
          </Row>
          <Row style={styles.row}>
            <Col>
              <Text style={styles.text}>น้ำหนัก</Text>
            </Col>
            <Col>
              <Text style={(styles.text, styles.textBold)}>
                {Patient.weight}
              </Text>
            </Col>
            <Col>
              <Text style={styles.text}>Kg.</Text>
            </Col>
          </Row>
          <Row style={styles.row}>
            <Col>
              <Text style={styles.text}>ส่วนสูง</Text>
            </Col>
            <Col>
              <Text style={(styles.text, styles.textBold)}>
                {Patient.height}
              </Text>
            </Col>
            <Col>
              <Text style={styles.text}>Cm.</Text>
            </Col>
          </Row>
          <Row style={styles.row}>
            <Col>
              <Text style={styles.text}>โรคประจำตัว</Text>
            </Col>
            <Col>
              <Text style={(styles.text, styles.textBold)}>
                {Patient.disease}
              </Text>
            </Col>
          </Row>
          <Row style={{height: 20}}>
            <Col>
              <Text style={styles.text}>โรคที่ต้องรักษา</Text>
            </Col>
            <Col>
              <Text style={(styles.text, styles.textBold)}>
                {Patient.contiguousDisease}
              </Text>
            </Col>
          </Row>

          <Row style={styles.row}>
            <Col>
              <Text style={styles.text}>อย่างต่อเนื่อง</Text>
            </Col>
            <Col></Col>
          </Row>
          <Row style={styles.row}>
            <Col>
              <Text style={styles.text}>แพ้ยา</Text>
            </Col>
            <Col>
              <Text style={(styles.text, styles.textBold)}>
                {Patient.drugAllergy}
              </Text>
            </Col>
          </Row>
          <Row style={styles.row}>
            <Col>
              <Text style={styles.text}>สิทธิในการเข้ารับการรักษา</Text>
            </Col>
            <Col>
              <Text style={(styles.text, styles.textBold)}>
                {Patient.permit}
              </Text>
            </Col>
          </Row>
          <Row style={styles.row}>
            <Col>
              <Text style={styles.text}>แพ้อาหาร</Text>
            </Col>
            <Col>
              <Text style={(styles.text, styles.textBold)}>
                {Patient.foodAllergy}
              </Text>
            </Col>
          </Row>
          <Row style={styles.row}>
            <Col>
              <Text style={styles.text}>ข้อควรระวังในการดูแล</Text>
            </Col>
            <Col>
              <Text style={(styles.text, styles.textBold)}>
                {Patient.warning}
              </Text>
            </Col>
          </Row>
        </Grid>
        <TouchableOpacity
          style={{paddingTop: 0, alignItems: 'center'}}
          onPress={() => params.setjobStatus(0)}>
          <Icon name="chevron-up" style={{fontSize: 13, color: '#18A0FB'}} />
          <Text style={{fontSize: 11, color: '#18A0FB'}}>ซ่อนรายละเอียด</Text>
        </TouchableOpacity>
      </View>
    </CardItem>
  );
};

export default App;
