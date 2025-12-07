<script src="https://www.gstatic.com/firebasejs/9.24.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.24.0/firebase-auth-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.24.0/firebase-firestore-compat.js"></script>

<script>
const firebaseConfig = {
  apiKey: "AIzaSyAcVPgUHbL4N9U1-H68klmGKWQF-YGleyc",
  authDomain: "vastbitloud-2872a.firebaseapp.com",
  projectId: "vastbitloud-2872a",
  storageBucket: "vastbitloud-2872a.firebasestorage.app",
  messagingSenderId: "952931184412",
  appId: "1:952931184412:web:ee2a0e38826c30dd0cd4d9",
  measurementId: "G-KWVQ0CFHW2"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

async function ensureUserRecord(user) {
  if(!user) return;
  const ref = db.collection('usuarios').doc(user.uid);
  const snap = await ref.get();
  if(!snap.exists) {
    await ref.set({
      uid: user.uid,
      email: user.email || '',
      displayName: user.displayName || '',
      saldo: 0,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
  }
}

async function isAdmin(uid){
  if(!uid) return false;
  const snap = await db.collection('admins').doc(uid).get();
  return snap.exists;
}

auth.onAuthStateChanged(async user => {
  // placeholder for pages to use
});
</script>
