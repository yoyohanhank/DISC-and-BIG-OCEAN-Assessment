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
  // Openness (O) - 10 Soal
  { id: 1, text: "Saya memiliki imajinasi yang kaya dan aktif.", trait: "O" },
  { id: 2, text: "Saya sangat menghargai karya seni dan keindahan alam.", trait: "O" },
  { id: 3, text: "Saya cenderung mendalami perasaan dan emosi saya sendiri.", trait: "O" },
  { id: 4, text: "Saya suka mencoba aktivitas baru atau pergi ke tempat asing.", trait: "O" },
  { id: 5, text: "Saya sangat tertarik dengan ide-ide teoretis atau filosofis.", trait: "O" },
  { id: 6, text: "Saya memiliki kosakata yang luas dan senang mempelajari kata baru.", trait: "O" },
  { id: 7, text: "Saya bisa memahami konsep-konsep abstrak dengan cepat.", trait: "O" },
  { id: 8, text: "Saya menyukai tugas yang membutuhkan kreativitas dan inovasi.", trait: "O" },
  { id: 9, text: "Saya terbuka pada nilai-nilai dan gaya hidup yang tidak konvensional.", trait: "O" },
  { id: 10, text: "Saya sering memikirkan cara-cara baru dalam menyelesaikan masalah rutin.", trait: "O" },

  // Conscientiousness (C) - 10 Soal
  { id: 11, text: "Saya selalu mempersiapkan segala sesuatu dengan matang.", trait: "C" },
  { id: 12, text: "Saya sangat memperhatikan detail-detail kecil dalam pekerjaan.", trait: "C" },
  { id: 13, text: "Saya menyukai jadwal dan struktur kerja yang teratur.", trait: "C" },
  { id: 14, text: "Saya selalu menyelesaikan tugas yang menjadi tanggung jawab saya.", trait: "C" },
  { id: 15, text: "Saya sangat disiplin dan jarang menunda-nunda pekerjaan.", trait: "C" },
  { id: 16, text: "Saya selalu menepati janji yang sudah saya buat.", trait: "C" },
  { id: 17, text: "Saya menuntut standar kualitas yang tinggi pada hasil kerja saya.", trait: "C" },
  { id: 18, text: "Saya berpikir matang-matang sebelum mengambil tindakan penting.", trait: "C" },
  { id: 19, text: "Saya meletakkan barang-barang kembali ke tempat semula dengan rapi.", trait: "C" },
  { id: 20, text: "Saya fokus bekerja secara konsisten demi mencapai target jangka panjang.", trait: "C" },

  // Extraversion (E) - 10 Soal
  { id: 21, text: "Saya merasa nyaman dan berenergi saat berada di tengah keramaian.", trait: "E" },
  { id: 22, text: "Saya mudah memulai obrolan dengan orang yang baru dikenal.", trait: "E" },
  { id: 23, text: "Saya senang menjadi pusat perhatian dalam sebuah kelompok.", trait: "E" },
  { id: 24, text: "Saya cenderung banyak bicara saat menghadiri acara sosial.", trait: "E" },
  { id: 25, text: "Saya menyukai gaya hidup yang aktif, dinamis, dan padat kegiatan.", trait: "E" },
  { id: 26, text: "Saya tipe orang yang ceria, penuh gairah, dan bersemangat.", trait: "E" },
  { id: 27, text: "Saya mudah berteman dengan siapa saja.", trait: "E" },
  { id: 28, text: "Saya lebih suka bekerja dalam tim daripada sendirian.", trait: "E" },
  { id: 29, text: "Saya mengekspresikan emosi saya secara terbuka kepada orang lain.", trait: "E" },
  { id: 30, text: "Saya menikmati atmosfer pesta atau perkumpulan berskala besar.", trait: "E" },

  // Agreeableness (A) - 10 Soal
  { id: 31, text: "Saya mudah berempati dan tulus peduli pada perasaan orang lain.", trait: "A" },
  { id: 32, text: "Saya senang membantu orang lain tanpa mengharapkan pamrih.", trait: "A" },
  { id: 33, text: "Saya cenderung mempercayai kejujuran dan niat baik orang lain.", trait: "A" },
  { id: 34, text: "Saya memilih untuk mengalah demi menghindari konflik atau perdebatan.", trait: "A" },
  { id: 35, text: "Saya memperlakukan semua orang dengan penuh hormat dan kesopanan.", trait: "A" },
  { id: 36, text: "Saya mudah memaafkan kesalahan yang dilakukan orang lain.", trait: "A" },
  { id: 37, text: "Saya pandai bekerja sama dan menyelaraskan diri dalam kelompok.", trait: "A" },
  { id: 38, text: "Saya peka terhadap penderitaan atau kesusahan orang di sekitar saya.", trait: "A" },
  { id: 39, text: "Saya tipe orang yang jujur, tulus, dan apa adanya.", trait: "A" },
  { id: 40, text: "Saya percaya bahwa kolaborasi lebih penting daripada kompetisi.", trait: "A" },

  // Neuroticism (N) - 10 Soal
  { id: 41, text: "Saya mudah merasa stres atau cemas saat berada di bawah tekanan.", trait: "N" },
  { id: 42, text: "Suasana hati (mood) saya mudah berubah-ubah tanpa alasan jelas.", trait: "N" },
  { id: 43, text: "Saya sering mengkhawatirkan hal-hal buruk yang belum tentu terjadi.", trait: "N" },
  { id: 44, text: "Saya mudah merasa tersinggung atau terluka oleh kritikan.", trait: "N" },
  { id: 45, text: "Saya sering merasa kewalahan saat menghadapi kendala tak terduga.", trait: "N" },
  { id: 46, text: "Saya kesulitan menenangkan diri setelah mengalami kejadian menyebalkan.", trait: "N" },
  { id: 47, text: "Saya sering merasa tidak percaya diri dengan kemampuan saya sendiri.", trait: "N" },
  { id: 48, text: "Saya cenderung bereaksi secara emosional ketika situasi menjadi panik.", trait: "N" },
  { id: 49, text: "Saya sering merasa kesepian atau murung meskipun di tempat ramai.", trait: "N" },
  { id: 50, text: "Saya mudah merasa tertekan apabila ekspektasi tidak terpenuhi.", trait: "N" }
];
</html>
