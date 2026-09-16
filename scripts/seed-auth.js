const crypto = require('crypto');
const { initializeApp } = require('firebase/app');
const { getFirestore, doc, setDoc } = require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyCxxJYJwEUDm4O5ZWRC2rLG3F0Q7f-icWA",
  authDomain: "gryphon-sync.firebaseapp.com",
  projectId: "gryphon-sync",
  storageBucket: "gryphon-sync.firebasestorage.app",
  messagingSenderId: "711708349362",
  appId: "1:711708349362:web:e69239dbaafc2971490aab",
  measurementId: "G-M8D2ECH5ZX"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const PASSCODE = '676767';
const SALT = 'icem_admission_secure_salt_' + crypto.randomBytes(8).toString('hex');

function hashPasscode(pass, salt) {
  return crypto.createHash('sha256').update(pass + salt).digest('hex');
}

async function seed() {
  console.log('Seeding admin auth credentials to Firestore...');
  const passcodeHash = hashPasscode(PASSCODE, SALT);
  
  await setDoc(doc(db, '_admin_config', 'admission_auth'), {
    salt: SALT,
    passcodeHash: passcodeHash,
    updatedAt: new Date().toISOString()
  });

  console.log('Auth document seeded successfully in _admin_config/admission_auth');
  console.log('Salt:', SALT);
  console.log('Hash:', passcodeHash);
  process.exit(0);
}

seed().catch((err) => {
  console.error('Error seeding auth document:', err);
  process.exit(1);
});
