import * as React from 'react';
import {Paragraph,Card,Button} from 'react-native-paper';
import axios from 'axios'
import SVGImg from './assets/nawy.svg'
import {Alert,Image, Modal,ScrollView,RefreshControl, StyleSheet, Text, View} from 'react-native';


export default function App() {
  const serverURL="http://192.168.100.3:8080/"

  const [properties, setProperties] = React.useState([]);
  const [propertyDetails, setProperty] = React.useState({'owner':{},'images':[],'delivery_date':' '});
  const [refreshing, setRefreshing] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getProperties()
    setTimeout(() => {setRefreshing(false);}, 1000);
  }, []);

  const getProperties = () => {
      axios.get(serverURL+"properties").then((response) => {
        console.log('--------------Response (getProperties)-------------\n',response.data);
        setProperties(response.data);
    }).catch(error => console.log(error));
  };

  const getpropertyDetails = (property: object) => {
    setProperty(property)
    setTimeout(() => {setModalVisible(true);}, 100);
};

  const deleteProperty = (id: string) => {
    axios.delete(serverURL+"property/"+id).then((response) => {
      console.log('--------------Response (deleteProperty)-------------\n',response.data);
      getProperties()
}).catch(error => console.log(error));
};

React.useEffect(() => {
  getProperties()
},[]);


  return (
    <ScrollView style={[styles.container]} contentContainerStyle={styles.content} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}  >
      <SVGImg style={[styles.logo]} width={150}  />

      {properties.map((property) => {
            return (
              <Card style={styles.card} key={property._id}>
                <Card.Cover source={{uri:property.images[0]}} />
                <Card.Title title={property.title} />
                <Card.Content>
                    <Paragraph >

                      <Image style={[styles.icon]} source={require('../nawypropfind/assets/house.png')} /><Text> {property.size} m2         </Text>
                      <Image style={[styles.icon]} source={require('../nawypropfind/assets/bedroom.png')} /><Text> {property.bedrooms}             </Text>
                      <Image style={[styles.icon]} source={require('../nawypropfind/assets/bathroom.png')} /><Text> {property.bathrooms}</Text>

                    </Paragraph>
                    <Text></Text>
                    <Paragraph>
                      <Text style={[styles.label]}>Project:</Text> {property.project} - 
                      <Text style={[styles.label]}> Developer:</Text> {property.developer}
                    </Paragraph>
                </Card.Content>
          
                <Card.Actions>
                  <Button style={{borderWidth:0}} labelStyle={{color:'#0070f3'}} onPress={() => getpropertyDetails(property)} >Details</Button>
                  <Button style={styles.button}  onPress={() => deleteProperty(property._id)}  >Delete</Button>
                </Card.Actions>
              </Card>
            );
          })}

      <Text style={[styles.footer]}>
        Powered by Nawy!
      </Text>

      <Modal animationType="slide"  transparent={true} visible={modalVisible}>
              <View style={styles.modalView}>
                <Button labelStyle={{color:'#0070f3'}} onPress={() => setModalVisible(!modalVisible)}> Close</Button>
                <Text></Text>
                <Card style={{width:'100%'}}>
                <Card.Cover source={{uri:propertyDetails.images[0]}} />
                </Card>
                <Text></Text>
                <Paragraph>{propertyDetails.bedrooms} <Text style={[styles.label]}>Bedrooms</Text></Paragraph>   
                <Paragraph>{propertyDetails.bathrooms} <Text style={[styles.label]}>Bathrooms</Text></Paragraph>
                
                <Paragraph><Text style={[styles.label]}>Size:</Text> {propertyDetails.size} m2</Paragraph>
                <Paragraph><Text style={[styles.label]}>Type:</Text> {propertyDetails.type}</Paragraph>
                <Paragraph><Text style={[styles.label]}>Delivery Date:</Text> {propertyDetails.delivery_date.substring(0,10)}</Paragraph>
                <Paragraph><Text style={[styles.label]}>Project:</Text> {propertyDetails.project} </Paragraph>
                <Paragraph><Text style={[styles.label]}>Developer:</Text> {propertyDetails.developer}</Paragraph>
                <Paragraph><Text style={[styles.label]}>City:</Text> {propertyDetails.city}</Paragraph>
                <Paragraph><Text style={[styles.label]}>Details:</Text> {propertyDetails.details}</Paragraph>


                <Text style={[styles.label]}>----------- Owner -----------</Text>
                <Paragraph><Text style={[styles.label]}>Name:</Text> {propertyDetails.owner.name}</Paragraph>
                <Paragraph><Text style={[styles.label]}>Number:</Text> {propertyDetails.owner.phone_number}</Paragraph>
                
              </View>
          
      </Modal>
      
   
    </ScrollView >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },

  logo: {
    marginLeft:'32%',
    marginBottom: 20,
    marginTop:10,
  },

  footer: {
    width:'100%',
    textAlign: 'center',
    fontSize: 15,

    position:"relative",
    bottom:0,
  },

  content: {
    padding: 4,
  },

  card: {
    marginVertical: 15,
    marginHorizontal: 20,
    padding: 3,
    backgroundColor:'white',

  },

  button: {
    borderRadius: 15,
    backgroundColor:'#0070f3',
    color: '#fff'
  },

  label: {
    fontWeight: '600'
  },

  icon: {
    width: 20,
    height: 20,
    resizeMode: 'stretch',
    display: 'flex',
  },

  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '90%',
    height: '95%',
    marginTop:75
  },

});
