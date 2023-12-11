let addressNumber = 7;
let addressStreet = "Sholomo Ben Yosef";
let country = "Israel";
let globalAddress = addressNumber+addressStreet+country
console.log(globalAddress ) 

let birthYear = 1991
let futureYear = 2025
let age = futureYear - birthYear
console.log( "i will be" + " " + age + " in" + " " + futureYear)

import { Application } from '@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/xXkbHHrU2XqeJAwC/scene.splinecode');
