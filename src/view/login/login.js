import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('E-mail inválido')
    .required('Campo obrigatório')
    .test('email-match', 'E-mail incorreto', (value) => value === 'email@email.com'),
  password: Yup.string()
    .required('Campo obrigatório')
    .test('password-match', 'Senha incorreta', (value) => value === '123456'),
});

export default function Login() {
  const navigation = useNavigation();

  const handleLogin = (values) => console.log(values);

  // const handleLogin = (values) => {
  //   if (values.email === 'email@email.com' && values.password === '123456') {
  //     navigation.navigate('./home.js');
  //   } else {
  //     console.log('Credenciais incorretas. Tente novamente.');
  //   }
  // };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          alt="App Logo"
          resizeMode="contain"
          style={styles.headerImg}
          source={require('../img/fruits-apple.jpg')}
        />
        <Text style={styles.title}>Monitoramento de Gôndolas</Text>
      </View>
      <View style={styles.form}>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          {({ handleChange, handleSubmit, values, errors }) => (
            <>
              <View style={styles.input}>
                <TextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  clearButtonMode="while-editing"
                  keyboardType="email-address"
                  onChangeText={handleChange('email')}
                  placeholder="E-mail"
                  placeholderTextColor="#6b7280"
                  style={styles.inputControl}
                  value={values.email}
                />
                {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
              </View>
              <View style={styles.input}>
                <TextInput
                  autoCorrect={false}
                  clearButtonMode="while-editing"
                  onChangeText={handleChange('password')}
                  placeholder="Senha"
                  placeholderTextColor="#6b7280"
                  style={styles.inputControl}
                  secureTextEntry
                  value={values.password}
                />
                {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
              </View>
              <View style={styles.formAction}>
                <Button title="Login" onPress={handleSubmit} style={styles.button} color="#007838"/>
              </View>
              <Text style={styles.formLink}>Esqueci minha senha</Text>
            </>
          )}
        </Formik>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5cc163',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  headerImg: {
    width: 60,
    height: 60,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1D2A32',
  },
  form: {
    width: '90%',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    marginBottom: 12,
  },
  inputControl: {
    height: 40,
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    borderRadius: 8,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#C9D3DB',
  },
  formAction: {
    width: '100%',
    marginTop: 20,
  },
  formLink: {
    marginTop: 20,
    fontSize: 14,
    fontWeight: '600',
    color: '#007838',
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    marginTop: 5,
    fontWeight: '700',
  },
});
