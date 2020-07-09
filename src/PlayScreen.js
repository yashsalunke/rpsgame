import React,{useState, useEffect} from 'react'
import { View, Text, StyleSheet, Button, Image} from 'react-native'


const rock = require('./signs/rock.png')
const paper = require('./signs/paper.png')
const scissors = require('./signs/scissors.png')

const bgColors = ['#1abc9c', '#2ecc71','#3498db']

const randomImg = ()=>{
    const emojis = [rock,paper,scissors]
    const random = Math.floor(Math.random()*3)
    console.log(random)
    return emojis[random]
}

const PlayScreen=()=> {

    const [counter, setCounter] = useState(3)
    useEffect(() => {
        // console.log(counter);
        if (counter == 0) {
            return
            
        }

        const timer = setTimeout(() => {
            setCounter(prv => prv -1)
        }, 500);


        return () => {
          clearTimeout(timer)
        }
    }, [counter]);


    return (
        <View style={StyleSheet.compose( {backgroundColor : bgColors[counter - 1]}, style.container )}>
            
            { (counter < 1) ? (

                <>
                <Image style={style.sign} source={randomImg()} />
                <View style={style.button}>
                        <Button onPress={() => setCounter(3)} title="Play Again" />
                </View>
                
                </>

            ) : <Text style={style.counter}>{counter}</Text>
        }
            
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
    counter:{
        fontSize: 150,
        color:'#ffffff',
    },
    sign:{
        width:220,
        height:220, 

    },
    button:{
        position:"absolute",
        bottom:40,
    },
}

)

export default PlayScreen;
