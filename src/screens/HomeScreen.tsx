import { Text, View, Pressable } from 'react-native'
import { FlatList } from 'react-native'
import { homeStyles } from '../styles/styles'
import { URL } from '../api/url'
import { ApiInfo, HomeScreenProps } from '../types/index'
import { useState, useEffect, useMemo } from 'react'


function HomeScreen({ route } : HomeScreenProps) {
    const { email } = route.params
    
    const [ info, setInfo ] = useState<ApiInfo[]>([]);

      const loadInfo = async () => {
        setInfo([])
        
        setTimeout(async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setInfo(data);
        }, 300);
    };

     useEffect(() => {
        loadInfo()
    }, [])

    return (
    <View style={homeStyles.firstView}>
    <Text>Hello {email}. Please review a sample API call.</Text>

    <Pressable style={homeStyles.renderListButton} onPress={loadInfo}>
        <Text style={homeStyles.renderListText}>Refresh List</Text>
    </Pressable>
    
    <FlatList 
        style={homeStyles.flatListView}
        data={info}
        keyExtractor={(item) => item.id.toString()} 
        renderItem={({item})=> {
            return (
            <View style={homeStyles.flatList}>
                <Text style={homeStyles.itemStyle}>Item {item.id}</Text>
                <Text>Title: {item.title}</Text>
                <Text>UserId: {item.userId}</Text>
                <Text>Completed?: {item.completed.toString()}</Text>
                
            </View>
            )
            
        }}/>

    </View>
    )
}


export default HomeScreen