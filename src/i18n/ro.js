export default {
  error: {
    forgotPassword: {
      too_many_requests:
        'Ai depășit limita de introducere a parolei. Avem rugămintea să așteptați până la următoarea încercare.',
      'lock.fallback': 'Ne pare rău, a apărut o eroare în procesul de recuperare a parolei.'
    },
    login: {
      blocked_user: 'Utilizatorul este blocat.',
      invalid_user_password: 'Date de conectare greșite.',
      'lock.fallback': 'Ne pare rău, a apărut o eroare în procesul de conectare.',
      'lock.invalid_code': 'Cod greșit.',
      'lock.invalid_email_password': 'Email sau parolă greșite.',
      'lock.invalid_username_password': 'Nume utilizator sau parolă greșite.',
      'lock.network':
        'Nu am putut să ne conectăm la server. Avem rugămintea să verificați conexiunea și să încercați din nou.',
      'lock.popup_closed': 'Fereastră popup a fost închisă. Încercați din nou.',
      'lock.unauthorized': 'Nu ați primit permisiunea să vă conectați. Încercați din nou.',
      'lock.mfa_registration_required':
        'Dispozitivul dvs. nu permite conectarea. Avem rugămintea să verificați setările.',
      'lock.mfa_invalid_code': ' Cod greșit. Încercați din nou.',
      password_change_required:
        'Trebuie să schimbați parola de acces. Parola a expirat sau este prima oară când vă conectați.',
      password_leaked:
        'Am identificat o posibilă problemă de securitate cu acest utilizator. Am blocat contul pentru a vă proteja. Urmează să primiți un email cu instrucțiunile de deblocare a contului Dvs.',
      too_many_attempts:
        'Contul Dvs a fost blocat după mai multe încercări nereușite de conectare.',
      session_missing:
        'Nu am putut finaliza procesul de autentificare. Avem rugămintea să încercați după ce închideți toate ferestrele deschise.',
      'hrd.not_matching_email': 'Vă rugăm să folosiți adresa de email corporate pentru conectare.'
    },
    passwordless: {
      'bad.email': 'Adresa de email este invalidă',
      'bad.phone_number': 'Numărul de telefon este invalid',
      'lock.fallback': 'Ne pare rău, ceva nu a funcționat'
    },
    signUp: {
      invalid_password: 'Parolă invalidă.',
      'lock.fallback': 'Ne pare rău, a apărut o eroare în procesul de înregistrare.',
      password_dictionary_error: 'Parola este prea comună.',
      password_no_user_info_error: 'Parola este similară cu utilizatorul.',
      password_strength_error: 'Parola este prea ușoară.',
      user_exists: 'Utilizator existent.',
      username_exists: 'Nume utilizator existent.'
    }
  },
  success: {
    logIn: 'Vă mulțumim pentru înregistrare.',
    forgotPassword: 'V-am transmis un email pentru resetarea parolei.',
    magicLink: 'V-am trimis un email pentru a vă înregistra<br />la %s.',
    signUp: 'Vă mulțumim pentru înregistrare.'
  },
  blankErrorHint: 'Câmpul nu poate fi gol',
  codeInputPlaceholder: 'codul dvs',
  databaseEnterpriseLoginInstructions: '',
  databaseEnterpriseAlternativeLoginInstructions: 'sau',
  databaseSignUpInstructions: '',
  databaseAlternativeSignUpInstructions: 'sau',
  emailInputPlaceholder: 'yours@example.com',
  enterpriseLoginIntructions: 'Înregistrați-vă cu datele corporate.',
  enterpriseActiveLoginInstructions: ' Înregistrați-vă cu datele corporate la %s.',
  failedLabel: 'Eșuat!',
  forgotPasswordTitle: 'Resetați parola',
  forgotPasswordAction: 'Nu vă amintiți parola?',
  forgotPasswordInstructions:
    'Avem rugămintea să introduceți adresa de email. Urmează să primiți un email pentru resetarea parolei.',
  forgotPasswordSubmitLabel: 'Email transmis',
  invalidErrorHint: 'Invalid',
  lastLoginInstructions: 'Ultima oară când v-ați conectat',
  loginAtLabel: ' Autentificați-vă cu %s',
  loginLabel: 'Autentificat',
  loginSubmitLabel: 'Autentificat',
  loginWithLabel: ' Autentificați-vă cu %s',
  notYourAccountAction: 'Nu este contul Dvs?',
  passwordInputPlaceholder: 'parola Dvs',
  passwordStrength: {
    containsAtLeast: 'Includeți cel puțin %d din urmatoarele %d caractere:',
    identicalChars: 'Nu mai mult de %d caractere identice (e.x., "%s" nu sunt permise)',
    nonEmpty: 'Este necesară o parolă pentru logare',
    numbers: 'Numere (de la 0-9)',
    lengthAtLeast: 'Cel puțin %d caractere lungime',
    lowerCase: 'Litere mici (a-z)',
    shouldContain: 'Trebuie să conțină:',
    specialCharacters: 'Caractere speciale (e.g. !@#$%^&*)',
    upperCase: 'Litere cu majuscule (A-Z)'
  },
  passwordlessEmailAlternativeInstructions:
    'Dacă nu, introduceți adresa de email pentru conectare<br/>sau creați un cont.',
  passwordlessEmailCodeInstructions: 'Un email cu codul a fost trimis la %s.',
  passwordlessEmailInstructions:
    'Introduceți adresa de email pentru conectare<br/>sau creați un cont',
  passwordlessSMSAlternativeInstructions:
    ' Dacă nu, introduceți un numar de telefon pentru conectare <br/>sau creați un cont',
  passwordlessSMSCodeInstructions: 'Un SMS cu codul de acces a fost trimis la<br/>la %s.',
  passwordlessSMSInstructions:
    'Introduceți numărul de telefon pentru conectare<br/>sau creați un cont',
  phoneNumberInputPlaceholder: 'numărul tău de telefon',
  resendCodeAction: 'Nu ați primit codul de acces? ',
  resendLabel: 'Retrimiteți',
  resendingLabel: 'Se retrimite...',
  retryLabel: 'Reîncercați',
  sentLabel: 'Transmis!',
  showPassword: 'Arată parola',
  signupTitle: 'Inregistrează-te',
  signUpLabel: ' Inregistrează-te ',
  signUpSubmitLabel: ' Inregistrează-te ',
  signUpTerms: '',
  signUpWithLabel: ' Inregistrează-te cu %s',
  socialLoginInstructions: '',
  socialSignUpInstructions: '',
  ssoEnabled: ' Inregistrare activată',
  submitLabel: 'Trimite',
  unrecoverableError:
    'Ceva nu a mers.<br />Avem rugămintea să contacați serviciul de suport tehnic.',
  usernameFormatErrorHint:
    'Folosește %d-%d litere, cifre și următoarele caractere speciale: "_", ".", "+", "-"',
  usernameInputPlaceholder: 'numele tău de utilizator',
  usernameOrEmailInputPlaceholder: 'utilizator/email',
  title: 'Auth0',
  welcome: 'Bine ai venit %s!',
  windowsAuthInstructions: 'Ești conectat de pe serverul tău corporate;',
  windowsAuthLabel: 'Autentificare Windows ',
  mfaInputPlaceholder: 'Cod',
  mfaLoginTitle: 'Verificare în doi pași',
  mfaLoginInstructions:
    'Vă rugăm să introduceți codul de autentificare generat de aplicația mobilă.',
  mfaSubmitLabel: 'Conectare',
  mfaCodeErrorHint: 'Utilizează %d cifre'
};