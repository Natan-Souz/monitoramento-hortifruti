import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, setForm, SafeAreaView, Image} from 'react-native';

import Title from '../title';

export default function Login() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  return (
    <View style={{ justifyContent: 'center'}}>
      <View style={styles.container}>
          <View style={styles.header}>
            <Image
              alt="App Logo"
              resizeMode="contain"
              style={styles.headerImg}
              source={require('../img/fruits-apple.jpg')} />
            <View style={styles.title}>
              <Text>Monitoramento de Gôndolas</Text>
            </View>     
          </View>
          <View style={styles.form}>
              <View style={styles.input}>
                <Text style={styles.inputLabel}>E-mail</Text>
                <TextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  clearButtonMode="while-editing"
                  keyboardType="email-address"
                  onChangeText={email => setForm({ ...form, email })}
                  placeholder="joao@email.com"
                  placeholderTextColor="#6b7280"
                  style={styles.inputControl}
                  value={form.email} />
              </View>
              <View style={styles.input}>
                <Text style={styles.inputLabel}>Senha</Text>
                <TextInput
                  autoCorrect={false}
                  clearButtonMode="while-editing"
                  onChangeText={password => setForm({ ...form, password })}
                  placeholder="********"
                  placeholderTextColor="#6b7280"
                  style={styles.inputControl}
                  secureTextEntry={true}
                  value={form.password} />
              </View>
              <View style={styles.formAction}>
                  <View style={styles.btn}>
                    <Text style={styles.btnText}>Login</Text>
                  </View>
              </View>
              <Text style={styles.formLink}>Esqueci minha senha</Text>
          </View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    width: 400,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 40,
  },
  headerImg: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 36,
    borderRadius: 20,
  },

  form: {
    marginBottom: 24,
    paddingHorizontal: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },

  formAction: {
    marginTop: 4,
    marginBottom: 16,
  },

  formLink: {
    fontSize: 16,
    fontWeight: '600',
    color: '#007838',
    textAlign: 'center',
  },
  formFooter: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
    textAlign: 'center',
    letterSpacing: 0.15,
  },
  /** Input */
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
  inputControl: {
    height: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    borderWidth: 1,
    borderColor: '#C9D3DB',
    borderStyle: 'solid',
  },
  /** Button */
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#007838',
    borderColor: '#007838',
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
  title: {
    fontSize: 31,
    fontWeight: '700',
    color: '#1D2A32',
    marginBottom: 6,
  },
});
