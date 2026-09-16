const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs, deleteDoc, doc, setDoc } = require('firebase/firestore');

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

// All 8 programmes with exact matching names
const admission2026Data = {
  "Notice/Vacancy": [
    {
      title: "Vacancy Position – Engineering, MBA & MCA (as on 11 September 2026)",
      category: "Vacancy Position",
      pdf: "/admission/Engg_MBA_MCA_Vacancy_Position_as_on_11092026.pdf",
      date: "11 September 2026",
      isNew: true,
      description: "State CET Cell updated provisional vacancy position as on 11/09/2026 for First Year B.Tech Engineering, MBA, and MCA programmes for A.Y. 2026-27. Candidates are advised to check the vacancy position before applying for Institute Level / Against CAP admissions."
    },
    {
      title: "Display of ACAP & Institute Level (IL) Merit Lists (Version 1) – A.Y. 2026-27",
      category: "Merit List Notice",
      pdf: "/admission/Schedule_for_IL_ACAP_Admission_2026-27.pdf",
      date: "09 September 2026",
      isNew: true,
      description: "Provisional Merit Lists (Version 1) for First Year B.Tech Engineering, MBA, and MCA are published. Please select the respective programme tab to view and download the official merit lists. Candidates are required to report to the institute from 10/09/2026."
    },
    {
      title: "IL Admission Fee Structure 2026-27",
      category: "Fee Structure",
      pdf: "/admission/Fee_Structure_for_IL_2026-27.pdf",
      date: "08 September 2026",
      isNew: true,
      description: "Approved Applicable Fees for Institute Level (IL) Admission for B.Tech First Year, Direct Second Year (DSE), FY MBA, and FY MCA for Academic Year 2026-27."
    },
    {
      title: "FRA Notice for IL Fees",
      category: "Regulatory Notice",
      pdf: "/admission/FRA_Notice_for_IL_Fees.pdf",
      date: "31 July 2025",
      isNew: true,
      description: "Official Notification from Fees Regulating Authority (FRA), Maharashtra regarding maximum fees / upper limits for Institutional / Management Quota seats."
    },
    {
      title: "Schedule for Institute Level / Against CAP (ACAP) Admission 2026-27",
      category: "Admission Schedule",
      pdf: "/admission/Schedule_for_IL_ACAP_Admission_2026-27.pdf",
      date: "07 September 2026",
      isNew: true,
      description: "Official Schedule for B. Tech, DSE, M.Tech, MBA, MCA, and Working Professional Courses for Institute Level & Against CAP vacancy admissions."
    },
    {
      title: "Advertisement for Institute Level / Against CAP Admission 2026-27",
      category: "Admission Advertisement",
      pdf: "/admission/Advertisement_of_Admission_2026-27.pdf",
      date: "07 September 2026",
      isNew: true,
      description: "Official Newspaper Advertisement for Institute Level Seats and Vacant Seats after CAP rounds (Against CAP Seats) for A.Y. 2026-27."
    }
  ],
  Engineering: [
    {
      title: "Provisional Merit List (Version 1) – Institute Level (IL) First Year B.Tech Engineering",
      category: "Merit List (IL)",
      pdf: "/admission/IL_FE_Merit_List_Version_1.pdf",
      date: "09 September 2026",
      isNew: true,
      description: "Official Provisional Merit List (Version 1) for Institute Level (IL) seats for First Year Under Graduate Technical Courses in Engineering & Technology (Computer, AI&DS, IT, E&TC, Mechanical) for A.Y. 2026-27. Reporting & confirmation date: 10/09/2026."
    },
    {
      title: "Provisional Merit List (Version 1) – Against CAP (ACAP) First Year B.Tech Engineering",
      category: "Merit List (ACAP)",
      pdf: "/admission/ACAP_FE_Merit_List_Version_1.pdf",
      date: "09 September 2026",
      isNew: true,
      description: "Official Provisional Merit List (Version 1) for Against CAP (ACAP) vacant seats for First Year Under Graduate Technical Courses in Engineering & Technology (Computer, AI&DS, IT, E&TC, Mechanical) for A.Y. 2026-27. Reporting & confirmation date: 10/09/2026."
    },
    {
      title: "Provisional Merit List (Version 1) – Against CAP (ACAP) Direct Second Year (DSE) Engineering",
      category: "Merit List (ACAP)",
      pdf: "/admission/DSE_ACAP_Merit_List_Version_1.pdf",
      date: "09 September 2026",
      isNew: true,
      description: "Official Provisional Merit List (Version 1) for Against CAP (ACAP) vacant seats for Direct Second Year (DSE) Engineering & Technology (Computer, AI&DS, IT, E&TC, Mechanical) for A.Y. 2026-27."
    },
    {
      title: "Vacancy Position – First Year B.Tech Engineering",
      category: "Vacancy Position",
      pdf: "/admission/BTech_FE_Vacancy_Position_08092026.pdf",
      date: "09 September 2026",
      isNew: true,
      description: "State CET Cell provisional vacancy position after CAP Round III/IV for First Year Under Graduate Technical Courses in Engineering & Technology (Computer, AI&DS, IT, E&TC, Mechanical) for A.Y. 2026-27."
    },
    {
      title: "Vacancy Position – Engineering DSE (Direct Second Year)",
      category: "Vacancy Position",
      pdf: "/admission/DSE_Vacancy_Position_08092026.pdf",
      date: "09 September 2026",
      isNew: true,
      description: "State CET Cell updated provisional vacancy position after CAP Round IV for Direct Second Year (DSE) Engineering & Technology (Computer, AI&DS, IT, E&TC, Mechanical) for A.Y. 2026-27."
    },
    {
      title: "B.Tech & DSE Institute Level / Against CAP Admission Schedule 2026-27",
      category: "Admission Schedule",
      pdf: "/admission/Schedule_for_IL_ACAP_Admission_2026-27.pdf",
      date: "07 September 2026",
      isNew: true,
      description: "Schedule for B.Tech (AI&DS, Computer, E&TC, IT, Mechanical) & Direct Second Year (DSE) vacancies. Application Dates: 07/09/2026 to 08/09/2026 (B.Tech) & 09/09/2026 to 10/09/2026 (DSE)."
    },
    {
      title: "Engineering Institute Level / Against CAP Admission Advertisement",
      category: "Admission Advertisement",
      pdf: "/admission/Advertisement_of_Admission_2026-27.pdf",
      date: "07 September 2026",
      isNew: true,
      description: "Official published advertisement for B.Tech, DSE, and M.Tech Institute Level & Against CAP seats."
    }
  ],
  "M.Tech": [
    {
      title: "Provisional Merit List (Version 1) – Institute Level (IL) M.Tech",
      category: "Merit List (IL)",
      pdf: "/admission/ME_IL_Merit_List_Version_1.pdf",
      date: "09 September 2026",
      isNew: true,
      description: "Official Provisional Merit List (Version 1) for Institute Level (IL) seats for First Year Master of Technology (M.Tech) for A.Y. 2026-27. Reporting & confirmation date: 10/09/2026."
    },
    {
      title: "Provisional Merit List (Version 1) – Against CAP (ACAP) M.Tech",
      category: "Merit List (ACAP)",
      pdf: "/admission/M.Tech_ACAP_Merit_List_Version_1.pdf",
      date: "09 September 2026",
      isNew: true,
      description: "Official Provisional Merit List (Version 1) for Against CAP (ACAP) vacant seats for First Year Master of Technology (M.Tech) for A.Y. 2026-27. Reporting & confirmation date: 10/09/2026."
    }
  ],
  MBA: [
    {
      title: "Provisional Merit List (Version 1) – Institute Level (IL) MBA",
      category: "Merit List (IL)",
      pdf: "/admission/IL_MBA_Merit_List_Version_1.pdf",
      date: "09 September 2026",
      isNew: true,
      description: "Official Provisional Merit List (Version 1) for Institute Level (IL) seats for First Year Master of Business Administration (MBA - Choice Code: 0617910110) for Academic Year 2026-27. Reporting & confirmation date: 10/09/2026."
    },
    {
      title: "Provisional Merit List (Version 1) – Against CAP (ACAP) MBA",
      category: "Merit List (ACAP)",
      pdf: "/admission/ACAP_MBA_Merit_List_Version_1.pdf",
      date: "09 September 2026",
      isNew: true,
      description: "Official Provisional Merit List (Version 1) for Against CAP (ACAP) vacant seats for First Year Master of Business Administration (MBA - Choice Code: 0617910110) for Academic Year 2026-27. Reporting & confirmation date: 10/09/2026."
    },
    {
      title: "Vacancy Position – MBA (Master of Business Administration)",
      category: "Vacancy Position",
      pdf: "/admission/MBA_Vacancy_Position_08092026.pdf",
      date: "09 September 2026",
      isNew: true,
      description: "State CET Cell provisional vacancy position after CAP Round IV for First Year Master of Business Administration (MBA - Choice Code: 0617910110) for A.Y. 2026-27."
    },
    {
      title: "MBA Institute Level / Against CAP Admission Schedule 2026-27",
      category: "Admission Schedule",
      pdf: "/admission/Schedule_for_IL_ACAP_Admission_2026-27.pdf",
      date: "07 September 2026",
      isNew: true,
      description: "Schedule for MBA Institute Level & Vacant Seats after CAP rounds (Choice Code: 0617910110). Application Dates: 07/09/2026 to 08/09/2026. Merit list: 09/09/2026."
    },
    {
      title: "MBA Admission Advertisement 2026-27",
      category: "Admission Advertisement",
      pdf: "/admission/Advertisement_of_Admission_2026-27.pdf",
      date: "07 September 2026",
      isNew: true,
      description: "Official published advertisement for MBA Institute Level and Against CAP admissions."
    }
  ],
  MCA: [
    {
      title: "Provisional Merit List (Version 1) – Institute Level (IL) MCA",
      category: "Merit List (IL)",
      pdf: "/admission/IL_MCA_Merit_List_Version_1.pdf",
      date: "09 September 2026",
      isNew: true,
      description: "Official Provisional Merit List (Version 1) for Institute Level (IL) seats for First Year Master of Computer Applications (MCA - Choice Code: 0617924110) for Academic Year 2026-27. Reporting & confirmation date: 10/09/2026."
    },
    {
      title: "Provisional Merit List (Version 1) – Against CAP (ACAP) MCA",
      category: "Merit List (ACAP)",
      pdf: "/admission/ACAP_MCA_Merit_List_Version_1.pdf",
      date: "09 September 2026",
      isNew: true,
      description: "Official Provisional Merit List (Version 1) for Against CAP (ACAP) vacant seats for First Year Master of Computer Applications (MCA - Choice Code: 0617924110) for Academic Year 2026-27. Reporting & confirmation date: 10/09/2026."
    },
    {
      title: "Vacancy Position – MCA (Master of Computer Applications)",
      category: "Vacancy Position",
      pdf: "/admission/MCA_Vacancy_Position_06092026.pdf",
      date: "06 September 2026",
      isNew: true,
      description: "State CET Cell provisional vacancy position after CAP Round IV for First Year Master of Computer Applications (MCA - Choice Code: 0617924110) for A.Y. 2026-27."
    },
    {
      title: "MCA Institute Level / Against CAP Admission Schedule 2026-27",
      category: "Admission Schedule",
      pdf: "/admission/Schedule_for_IL_ACAP_Admission_2026-27.pdf",
      date: "07 September 2026",
      isNew: true,
      description: "Schedule for MCA Institute Level & Vacant Seats after CAP rounds (Choice Code: 0617924110). Application Dates: 06/09/2026 to 08/09/2026. Merit list: 09/09/2026."
    },
    {
      title: "MCA Admission Advertisement 2026-27",
      category: "Admission Advertisement",
      pdf: "/admission/Advertisement_of_Admission_2026-27.pdf",
      date: "07 September 2026",
      isNew: true,
      description: "Official published advertisement for MCA Institute Level and Against CAP admissions."
    }
  ],
  "MBA & MCA Direct Second Year (Lateral Entry)": [
    {
      title: "MBA & MCA Direct Second Year (Lateral Entry) IL/ACAP Round Schedule",
      category: "Admission Schedule & Notice",
      pdf: "/admission/mba_mca_lateral_entry.pdf",
      date: "August 2026",
      isNew: true,
      description: "Schedule for Institute Level (IL) and Against CAP (ACAP) vacancies for Direct Second Year (Lateral Entry) MBA & MCA."
    }
  ],
  "MBA Working Professional": [
    {
      title: "MBA Working Professional (Vacant seats after CAP) Schedule 2026-27",
      category: "Admission Schedule",
      pdf: "/admission/Schedule_for_IL_ACAP_Admission_2026-27.pdf",
      date: "07 September 2026",
      isNew: true,
      description: "Schedule for MBA Working Professional Course (Choice Code: 0617910180). Application Dates: 07/09/2026 to 08/09/2026. Reporting: 10/09/2026 to 13/09/2026."
    }
  ],
  "DSE Mechanical Engineering Working Professional": [
    {
      title: "Provisional Merit List (Version 1) – Against CAP (ACAP) DSE Mechanical Engineering (Working Professional)",
      category: "Merit List (ACAP)",
      pdf: "/admission/DSWWP_ACAP_Merit_List_Version_1.pdf",
      date: "09 September 2026",
      isNew: true,
      description: "Official Provisional Merit List (Version 1) for Against CAP (ACAP) vacant seats for DSE Mechanical Engineering Working Professional Course (Choice Code: 0617961280) for A.Y. 2026-27. Reporting date: 13/09/2026."
    },
    {
      title: "DSE Mechanical Engg Working Professional Course Schedule 2026-27",
      category: "Admission Schedule",
      pdf: "/admission/Schedule_for_IL_ACAP_Admission_2026-27.pdf",
      date: "07 September 2026",
      isNew: true,
      description: "Schedule for DSE Mechanical Engineering Working Professional Course (Choice Code: 0617961280). Application Dates: 07/09/2026 to 08/09/2026. Reporting: 10/09/2026 to 15/09/2026."
    }
  ]
};

async function reSeed() {
  console.log('1. Clearing old admission_2026 documents...');
  const existingDocs = await getDocs(collection(db, 'admission_2026'));
  for (const docSnap of existingDocs.docs) {
    await deleteDoc(doc(db, 'admission_2026', docSnap.id));
  }
  console.log(`Cleared ${existingDocs.size} old documents.`);

  console.log('2. Inserting accurate admission data for all 8 categories...');
  for (const [programKey, items] of Object.entries(admission2026Data)) {
    for (let index = 0; index < items.length; index++) {
      const item = items[index];
      const docId = `${programKey.replace(/[^a-zA-Z0-9]/g, '_')}_${index + 1}_${Date.now()}`;
      await setDoc(doc(db, 'admission_2026', docId), {
        program: programKey,
        title: item.title,
        category: item.category,
        pdf: item.pdf,
        date: item.date,
        isNew: !!item.isNew,
        description: item.description,
        order: index + 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });
      console.log(`✓ [${programKey}] -> ${item.title.substring(0, 35)}...`);
    }
  }

  console.log('\nSUCCESS! All 8 programme categories seeded completely.');
  process.exit(0);
}

reSeed().catch(err => {
  console.error('Error reseeding:', err);
  process.exit(1);
});
