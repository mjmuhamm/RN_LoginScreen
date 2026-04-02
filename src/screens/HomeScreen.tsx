import { Text, View, Pressable } from 'react-native'
import { FlatList } from 'react-native'
import { homeStyles } from '../styles/styles'
import { URL } from '../api/url'
import { ApiInfo, HomeScreenProps } from '../types/index'
import { useState, useEffect, useMemo, useContext } from 'react'
// import { WeatherContext } from '../store/context/WeatherContext'
import { TodoContext } from '../store/context/TodoContext'


//Optimization Hooks 
function HomeScreen({ route } : any) {
    const email = route?.params?.email ?? '';

    const [ showCompleted, setShowCompleted ] = useState(false)
    const [ text, setText ] = useState("Show Completed Info")
    
    // const { weather, setWeather } = useContext(WeatherContext)

    const { info , setInfo } = useContext(TodoContext);
    
    // const [ info, setInfo ] = useState<ApiInfo[]>([]);

      const loadInfo = async () => {
        setInfo([])
        
        setTimeout(async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setInfo(data);
        }, 300);
    };

    const completedInfo = useMemo(() => {
        return info.filter((item: ApiInfo) => item.completed);
    }, [info]);

     useEffect(() => {
        loadInfo()
    }, [])

    return (
    <View style={homeStyles.firstView}>
    <Text>Hello {email}. Please review a sample API call.</Text>

    <View style={homeStyles.buttonView}>
    <Pressable style={homeStyles.renderListButton} onPress={loadInfo}>
        <Text style={homeStyles.renderListText}>Refresh List</Text>
    </Pressable>

    <Pressable style={homeStyles.renderListButton2} onPress={() => {
        setShowCompleted(!showCompleted); 
        if (text == "Show Completed Info") { setText("Show All Info") } else { setText("Show Completed Info"); }}}>
        <Text style={homeStyles.renderListText}>{text}</Text>
    </Pressable>
    </View>

    <FlatList 
        style={homeStyles.flatListView}
        data={showCompleted ? completedInfo : info}
        keyExtractor={((item: ApiInfo) => item.id.toString())} 
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