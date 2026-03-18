import { connectDataConnectEmulator } from "firebase/data-connect";
import { initializeApp } from "firebase/app";

// TODO: Replace the following with your app's Firebase configuration
const firebaseConfig = {};

const app = initializeApp(firebaseConfig);

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, "localhost", 4400);
