import { initializeApp, AppConfig } from "SomeLibrary";

// Defining the configuration object
const config: AppConfig = {
    apiUrl: "url",
    retryCount: 3
};

initializeApp(config);
console.log("Application initialized with config:", config);
