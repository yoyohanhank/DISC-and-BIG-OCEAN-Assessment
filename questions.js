const discQuestions = [
  { id: 1, options: [
    { text: "Gampang bergaul, ramah, mudah berbicara", most: "I", least: "N" },
    { text: "Mempercayai orang, ramah, penuh hormat", most: "S", least: "N" },
    { text: "Penuh energi, suka petualangan, berani", most: "D", least: "N" },
    { text: "Tenang, terkendali, penuh pertimbangan", most: "C", least: "N" }
  ]},
  { id: 2, options: [
    { text: "Suka berdebat, keras kepala, memaksa", most: "D", least: "N" },
    { text: "Gembira, penuh tawa, suka bercerita", most: "I", least: "N" },
    { text: "Sopan, ramah, menghindari konflik", most: "S", least: "N" },
    { text: "Sistematis, teliti, patuh aturan", most: "C", least: "N" }
  ]},
  { id: 3, options: [
    { text: "Berani mengambil risiko, kompetitif", most: "D", least: "N" },
    { text: "Meyakinkan, ekspresif, lincah", most: "I", least: "N" },
    { text: "Tenang, stabil, suka rutinitas", most: "S", least: "N" },
    { text: "Logis, analitis, penuh data", most: "C", least: "N" }
  ]},
  { id: 4, options: [
    { text: "Suka memimpin, dominan, mandiri", most: "D", least: "N" },
    { text: "Suka memuji, antusias, populer", most: "I", least: "N" },
    { text: "Penyabar, pendengar baik, tulus", most: "S", least: "N" },
    { text: "Hati-hati, perfeksionis, disiplin", most: "C", least: "N" }
  ]},
  { id: 5, options: [
    { text: "Suka tantangan, tegas, cepat bertindak", most: "D", least: "N" },
    { text: "Menyenangkan, memotivasi, ceria", most: "I", least: "N" },
    { text: "Suka membantu, loyal, kooperatif", most: "S", least: "N" },
    { text: "Akurat, taat prosedur, objektif", most: "C", least: "N" }
  ]},
  { id: 6, options: [
    { text: "Kuat, gigih, tidak mudah menyerah", most: "D", least: "N" },
    { text: "Menarik perhatian, mempesona, supel", most: "I", least: "N" },
    { text: "Mudah menerima, toleran, damai", most: "S", least: "N" },
    { text: "Terstruktur, formal, jeli melihat cacat", most: "C", least: "N" }
  ]},
  { id: 7, options: [
    { text: "Penuh tuntutan, fokus hasil, ambisius", most: "D", least: "N" },
    { text: "Penuh semangat, komunikatif, humoris", most: "I", least: "N" },
    { text: "Rendah hati, sederhana, stabil", most: "S", least: "N" },
    { text: "Mengecek ulang, berpatokan fakta, kritis", most: "C", least: "N" }
  ]},
  { id: 8, options: [
    { text: "Berkeinginan kuat, mandiri, berkuasa", most: "D", least: "N" },
    { text: "Suka bersosialisasi, optimis, terbuka", most: "I", least: "N" },
    { text: "Mudah sepakat, tidak banyak menuntut", most: "S", least: "N" },
    { text: "Waspada, penuh persiapan, taktis", most: "C", least: "N" }
  ]},
  { id: 9, options: [
    { text: "Pelopor, suka mencoba hal ekstrem", most: "D", least: "N" },
    { text: "Pemberi pengaruh, persuasif, periang", most: "I", least: "N" },
    { text: "Penyayang, lembut, suka kedamaian", most: "S", least: "N" },
    { text: "Rapi, terorganisir, metodis", most: "C", least: "N" }
  ]},
  { id: 10, options: [
    { text: "Penuh keyakinan, agresif, kompetitif", most: "D", least: "N" },
    { text: "Lancar berbicara, ekspresif, atraktif", most: "I", least: "N" },
    { text: "Suka ketenangan, tidak menonjolkan diri", most: "S", least: "N" },
    { text: "Sesuai standar, patuh, detail", most: "C", least: "N" }
  ]},
  { id: 11, options: [
    { text: "Berani, mandiri, teguh pendirian", most: "D", least: "N" },
    { text: "Ramah tamah, pandai bergaul, interaktif", most: "I", least: "N" },
    { text: "Mudah kasihan, berempati, protektif", most: "S", least: "N" },
    { text: "Diplomatis, hati-hati berbicara, teliti", most: "C", least: "N" }
  ]},
  { id: 12, options: [
    { text: "Cepat mengambil keputusan, berani", most: "D", least: "N" },
    { text: "Menstimulasi, menginspirasi, vokal", most: "I", least: "N" },
    { text: "Penuh pengertian, pemaaf, tenang", most: "S", least: "N" },
    { text: "Suka menganalisis, skeptis sebelum tahu", most: "C", least: "N" }
  ]},
  { id: 13, options: [
    { text: "Sengit, berorientasi target, tangguh", most: "D", least: "N" },
    { text: "Suka berpartisipasi, ramah, humoris", most: "I", least: "N" },
    { text: "Suka kebersamaan, stabil, penurut", most: "S", least: "N" },
    { text: "Mengejar kesempurnaan, teratur", most: "C", least: "N" }
  ]},
  { id: 14, options: [
    { text: "Suka mengarahkan, bertekad keras", most: "D", least: "N" },
    { text: "Suka memotivasi, persuasif, ceria", most: "I", least: "N" },
    { text: "Baik hati, menghindari gesekan, sabar", most: "S", least: "N" },
    { text: "Bijaksana, menimbang risiko, detail", most: "C", least: "N" }
  ]},
  { id: 15, options: [
    { text: "Mengambil kendali, berani, dominan", most: "D", least: "N" },
    { text: "Menyenangkan orang lain, sosial, lincah", most: "I", least: "N" },
    { text: "Mudah dipimpin, loyal, tenang", most: "S", least: "N" },
    { text: "Berpikir mendalam, analitis, serius", most: "C", least: "N" }
  ]},
  { id: 16, options: [
    { text: "Konfrontatif, berani beda pendapat", most: "D", least: "N" },
    { text: "Suka menjual ide, antusias, hangat", most: "I", least: "N" },
    { text: "Mudah puas, santai, konsisten", most: "S", least: "N" },
    { text: "Sistematis, mengikuti alur, terjadwal", most: "C", least: "N" }
  ]},
  { id: 17, options: [
    { text: "Pembuat keputusan cepat, tegas", most: "D", least: "N" },
    { text: "Pusat perhatian, periang, supel", most: "I", least: "N" },
    { text: "Rela berkorban, pendengar setia", most: "S", least: "N" },
    { text: "Berpijak aturan, hati-hati, waspada", most: "C", least: "N" }
  ]},
  { id: 18, options: [
    { text: "Otoriter, suka mengatur, tangguh", most: "D", least: "N" },
    { text: "Suka meyakinkan orang, ekspresif", most: "I", least: "N" },
    { text: "Akomodatif, tidak suka ribut, sabar",
most: "S", least: "N" },
    { text: "Sangat teliti, terstruktur, disiplin", most: "C", least: "N" }
  ]},
  { id: 19, options: [
    { text: "Agresif mencari solusi, berani", most: "D", least: "N" },
    { text: "Optimis, membangkitkan suasana, ceria", most: "I", least: "N" },
    { text: "Mudah beradaptasi, ramah, tenang", most: "S", least: "N" },
    { text: "Suka mengoreksi, tajam menganalisis", most: "C", least: "N" }
  ]},
  { id: 20, options: [
    { text: "Kompetitif, fokus pada kemenangan", most: "D", least: "N" },
    { text: "Suka mengobrol, menarik, terbuka", most: "I", least: "N" },
    { text: "Pendamai, tenang, suka membantu", most: "S", least: "N" },
    { text: "Berpikir logis, teratur, presisi", most: "C", least: "N" }
  ]},
  { id: 21, options: [
    { text: "Tegas memimpin, berorientasi kuasa", most: "D", least: "N" },
    { text: "Suka berbagi cerita, penuh pesona", most: "I", least: "N" },
    { text: "Sabar menghadapi orang, setia", most: "S", least: "N" },
    { text: "Sesuai regulasi, rapi, terencana", most: "C", least: "N" }
  ]},
  { id: 22, options: [
    { text: "Pemberani, suka mengambil tantangan", most: "D", least: "N" },
    { text: "Antusias, komunikator ulung, ramah", most: "I", least: "N" },
    { text: "Suka keharmonisan, tenang, santun", most: "S", least: "N" },
    { text: "Berpikir kritis, berbasis data, teliti", most: "C", least: "N" }
  ]},
  { id: 23, options: [
    { text: "Mandiri, dominan, fokus hasil", most: "D", least: "N" },
    { text: "Suka keramaian, populer, ekspresif", most: "I", least: "N" },
    { text: "Penyabar, konsisten, berhati lembut", most: "S", least: "N" },
    { text: "Sistematis, taat standar, analitis", most: "C", least: "N" }
  ]},
  { id: 24, options: [
    { text: "Kuat mempertahankan argumen, berani", most: "D", least: "N" },
    { text: "Suka memotivasi orang, periang, supel", most: "I", least: "N" },
    { text: "Suka kedamaian, suportif, tenang", most: "S", least: "N" },
    { text: "Meneliti kebenaran, terstruktur, rapi", most: "C", least: "N" }
  ]}
];

// Isi dengan baris kunci MOST/LEAST standard secara matematis untuk pemetaan sisa opsi jika kosong
discQuestions.forEach(q => {
  q.options.forEach((opt, idx) => {
    if(opt.least === "N") {
      opt.least = opt.most; 
    }
  });
});

const oceanQuestions = [
  { id: 1, text: "Saya cenderung terbuka untuk hal-hal baru dan kreatif.", trait: "O" },
  { id: 2, text: "Saya selalu mengerjakan tugas dengan teliti dan tepat waktu.", trait: "C" },
  { id: 3, text: "Saya merasa nyaman dan berenergi saat berada di keramaian.", trait: "E" },
  { id: 4, text: "Saya mudah berempati dan peduli dengan perasaan orang lain.", trait: "A" },
  { id: 5, text: "Saya mudah merasa stres atau cemas saat berada di bawah tekanan.", trait: "N" }
];
