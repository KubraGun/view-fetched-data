import { Text, SafeAreaView, View, Button, FlatList, ActivityIndicator} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import UserCard from './components/UserCard/UserCard';
 
//component açıldığı anda çalışan fonksiyon: useEffect

// {condition ? (true) : (false)}
function App() {
  const [loading, setLoading] = useState(false);

  const [userList, setUserList] = useState([]);

  async function fetchData(){
    setLoading(true); // bu satırı kaldırıp, useState'te değerini true yaparsak da aynı görev yapılmış olur.
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    //console.log(response);
    setLoading(false);
    setUserList(response.data);

    /*
    // Bu işlemi then-catch ile yapacak olursak:
    axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
                        setLoading(false);
                        setUserList(response.data);
    });

    */
  }

  const renderUser = ({item}) => <UserCard 
                                    name={item.name} 
                                    email={item.name} 
                                    username={item.username}/>


  useEffect(()=> {
    fetchData(); // Mount olduğu anda çalışır

  }, [])

  return (
    <SafeAreaView>
      <View>
        {loading ? (<ActivityIndicator size='large' color='grey'/>) 
                 : (<FlatList 
                        data={userList}
                        renderItem={renderUser}
                    />)}
        <Button 
              title='Fetch Data'
              onPres={fetchData}     
        />
       
      </View>

    </SafeAreaView>
  );
}

export default App;