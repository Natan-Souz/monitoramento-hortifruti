import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function Login() {
  return (
    <View style={styles.container}>
      <Text>Monitoramento de Gôndolas</Text>
      <View>
        <Text>E-mail</Text>
        <TextInput style={stylesTextInput.container} placeholder="E-mail"/>
        <Text>Senha</Text>
        <TextInput style={stylesTextInput.container} placeholder="Senha"/>
        <Button title="Acessar"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5cc163',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const stylesTextInput = StyleSheet.create({
    container: {
      
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center', 
      height: 40,
      width: 200,
      borderColor: 'gray',
      borderWidth: 1,
    },
});