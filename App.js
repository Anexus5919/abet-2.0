import { SafeAreaView, Text, Button, Image, Pressable } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <SafeAreaView style={{ width:'100%', height:'100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hello World!!</Text>
      <Image
        source={{ uri: 'https://media.licdn.com/dms/image/v2/C4E0BAQF3QkyXbn7Yyg/company-logo_200_200/company-logo_200_200/0/1630642789117/sakec_logo?e=2147483647&v=beta&t=QHrB2s5p4cuAlKLJT6GiEDjCgWfDeseCE9rkQFP7QNs' }}
        style={{ width: 100, height: 100 }}
        resizeMode='contain'
      />
      <Button title="Click ME!!" onPress={() => alert('Button Clicked!')} />
      <Pressable>
        
      </Pressable>
    </SafeAreaView>
  )
}

export default App