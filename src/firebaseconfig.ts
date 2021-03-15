export let firebaseConfig = {
    apiKey:"AIzaSyAUHiuqZS72tVFG_qDeIs2TUnVbE_A6aTY",
    authDomain: "greaterdemand-dev.firebaseapp.com",
    databaseURL: "https://greaterdemand-dev.firebaseio.com",
    projectId: "greaterdemand-dev",
    storageBucket: "greaterdemand-dev.appspot.com",
    messagingSenderId: "262629809948",
    appId: "1:262629809948:web:88cb05c5fc53921b9224d9"
  };

if(window.location.hostname === 'localhost'){
    firebaseConfig = {
        databaseURL:'http://localhost:9000?ns=greaterdemand-dev',
        apiKey: '',
        authDomain: '',
        projectId: '',
        storageBucket: '',
        appId: '',
        messagingSenderId: ''
    }
}