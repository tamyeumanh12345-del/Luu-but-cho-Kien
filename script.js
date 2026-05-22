import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDNGr1HMpZ6uajNpq-ZkrUAKHTiBHG9T2I",
  authDomain: "luu-but-52647.firebaseapp.com",
  projectId: "luu-but-52647",
  storageBucket: "luu-but-52647.firebasestorage.app",
  messagingSenderId: "569736243796",
  appId: "1:569736243796:web:0c37363f469fe6d0f39bc1",
  measurementId: "G-NTKD0DY13X"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
/* INTRO + MUSIC */

const music = document.getElementById("music");

music.volume = 0.15;

const intro =
document.getElementById("intro");

intro.addEventListener("click", () => {

  music.play();

  intro.style.opacity = "0";

  setTimeout(() => {

    intro.style.display = "none";

  }, 1500);

});

/* SEND MESSAGE */

window.sendMessage = async function(){

  const name =
  document.getElementById("name").value;

  const message =
  document.getElementById("message").value;

  const status =
  document.getElementById("status");

  if(name === "" || message === ""){

    status.innerHTML = "Please fill everything 💔";

    return;
  }

  try{

    await addDoc(collection(db, "messages"), {

      name:name,

      message:message,

      createdAt:new Date()

    });

    status.innerHTML = "Sent successfully 💖";

    document.getElementById("name").value = "";

    document.getElementById("message").value = "";

  }catch(error){

    status.innerHTML = "Something went wrong 💔";

  }

}
