// src/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Configuración web de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDz84UMxLbHpMfl6aiiEraezX72n_DU97o",
  authDomain: "preparacion-para-mando-tmb.firebaseapp.com",
  projectId: "preparacion-para-mando-tmb",
  storageBucket: "preparacion-para-mando-tmb.appspot.com",
  messagingSenderId: "476623349798",
  appId: "1:476623349798:web:802ba45e57bd13f90d5ee7"
};

// Inicializa Firebase (versión simplificada para evitar problemas)
const firebaseApp = initializeApp(firebaseConfig);

// Inicializamos Auth
const auth = getAuth(firebaseApp);

// Exportamos los servicios
export { auth };
export default firebaseApp;