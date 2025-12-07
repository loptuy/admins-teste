// =============================================
//  FIREBASE.JS FINAL — FUNCIONA 100%
// =============================================

// ⛔  AVISO IMPORTANTE:
// Este arquivo só funciona se estiver no MESMO DIRETÓRIO
// do admin.html, produtos.html, ativos.html, carteira.html.
// Ex.: /admins-teste/firebase.js
// =============================================


// --- CONFIG DO SEU FIREBASE ---
const firebaseConfig = {
  apiKey: "AIzaSyAcVPgUHbL4N9U1-H68klmGKWQF-YGleyc",
  authDomain: "vastbitloud-2872a.firebaseapp.com",
  projectId: "vastbitloud-2872a",
  storageBucket: "vastbitloud-2872a.firebasestorage.app",
  messagingSenderId: "952931184412",
  appId: "1:952931184412:web:ee2a0e38826c30dd0cd4d9",
  measurementId: "G-KWVQ0CFHW2"
};


// --- VERIFICA SE OS SDKs EXISTEM ---
if (typeof firebase === "undefined") {
    console.error("❌ Firebase SDK não carregou. Verifique os scripts CDN no HTML.");
} else {
    console.log("🔥 Firebase SDK carregado com sucesso.");
}

// --- INICIALIZAÇÃO DO FIREBASE ---
firebase.initializeApp(firebaseConfig);

// --- SERVIÇOS ---
const auth = firebase.auth();
const db = firebase.firestore();


// --- FUNÇÃO GLOBAL PARA VERIFICAR ADMIN ---
async function isAdmin(uid) {
  try {
    const doc = await db.collection("admins").doc(uid).get();
    return doc.exists; 
  } catch (err) {
    console.error("Erro ao verificar admin:", err);
    return false;
  }
}
