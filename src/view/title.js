import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function Title() {
  return (
    <View style={styles.title}>
      <Text>Monitoramento de Gôndolas</Text>
    </View>
  );
}
const styles = StyleSheet.create({
    title: {
      backgroundColor: '#5cc163',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 40,
      fontWeight: '700',
      marginBottom: 6,
    },
});
