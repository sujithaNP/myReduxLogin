import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import authSlice,{ InitialState } from '../redux/slice/auth.slice'
import authSlice from '../redux/slice/auth.slice'
import { InitialState } from '../redux/slice/auth.slice'


const HomePage = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const user = useSelector((state: any) => state?.auth?.user)
    console.log('login :>> ', user);
    console.log('name :>> ', name);

    const dispatch = useDispatch()
    const handleSubmit = () => {
        setName('')
        setPassword('')
        dispatch(authSlice.actions.search({ name: name }))
    }
    return (
        <View style={{ paddingTop: 100, paddingLeft: 16 }}>

            <TextInput placeholder='Enter Username' style={styles.input} value={name} onChangeText={setName} />
            <TouchableOpacity style={styles.box} onPress={() => {
                handleSubmit()
            }}>
                <Text style={styles.title}>Submit</Text>

            </TouchableOpacity>
            <Text style={styles.text}>Name: {user?.name}</Text>
            <Text style={styles.text}>Age: {user?.age}</Text>
            {/* <Text style={styles.text}>Count: {user?.count}</Text> */}

        </View>
    )
}

export default HomePage

const styles = StyleSheet.create({
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        width: '85%',
        margin: 20,
        padding: 10

    },
    box: {
        backgroundColor: '#07a',
        padding: 20,
        marginHorizontal: 18,
        marginVertical: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 10,
        width: '87%',




    },
    title: {
        fontSize: 18,
        color: 'white'

    },
    text: {
        fontSize: 18,
        fontWeight: '700',
        textAlign: 'center',
        padding: 6

    }
})