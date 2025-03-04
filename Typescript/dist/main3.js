"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SomeLibrary_1 = require("SomeLibrary");
// Defining the configuration object
const config = {
    apiUrl: "url",
    retryCount: 3
};
(0, SomeLibrary_1.initializeApp)(config);
console.log("Application initialized with config:", config);
