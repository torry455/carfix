export type BeforeAfterItem = {
  before: string;
  after: string;
  title: string;
};

export type ProcessItem = {
  photo?: string;
  video?: string;
  description: string;
};

export type Category = {
  name: string;
  type: "before-after" | "process";
  items: (BeforeAfterItem | ProcessItem)[];
};

export const galleryCategories: Category[] = [
  {
    name: "До/Після",
    type: "before-after",
    items: [
      { before: "https://res.cloudinary.com/dnti6czq4/image/upload/v1757590263/mustangbefore_k70alu.jpg", after: "https://res.cloudinary.com/dnti6czq4/image/upload/v1758612808/after1_oanhoz.jpg", title: "Ford" },
      { before: "https://res.cloudinary.com/dnti6czq4/image/upload/v1757590259/before2_lkxkaw.jpg", after: "https://res.cloudinary.com/dnti6czq4/image/upload/v1758612014/after2_anbkgu.jpg", title: "BMW" },
      { before: "https://res.cloudinary.com/dnti6czq4/image/upload/v1757590259/before3_vsqvyz.jpg", after: "https://res.cloudinary.com/dnti6czq4/image/upload/v1757590257/after3_zqfhmo.jpg", title: "Subaru" },
      { before: "https://res.cloudinary.com/dnti6czq4/image/upload/v1757590259/before4_ldqv3z.jpg", after: "https://res.cloudinary.com/dnti6czq4/image/upload/v1757590258/after4_osg5fn.jpg", title: "Honda" },
      { before: "https://res.cloudinary.com/dnti6czq4/image/upload/v1757590259/before5_izo2qc.jpg", after: "https://res.cloudinary.com/dnti6czq4/image/upload/v1757590258/after5_fdlamh.jpg", title: "Volkswagen" },
      { before: "https://res.cloudinary.com/dnti6czq4/image/upload/v1757590259/before6_q4mt7d.jpg", after: "https://res.cloudinary.com/dnti6czq4/image/upload/v1757590258/after6_iccajf.jpg", title: "Tesla" },
      { before: "https://res.cloudinary.com/dnti6czq4/image/upload/v1757590259/before7_xx0moz.jpg", after: "https://res.cloudinary.com/dnti6czq4/image/upload/v1757590256/after7_vi8pk0.jpg", title: "Toyota" },
      { before: "https://res.cloudinary.com/dnti6czq4/image/upload/v1757590259/before8_vbnloa.jpg", after: "https://res.cloudinary.com/dnti6czq4/image/upload/v1757590256/after8_hndkgh.jpg", title: "Fiat" },
      { before: "https://res.cloudinary.com/dnti6czq4/image/upload/v1757590259/before9_jupngr.jpg", after: "https://res.cloudinary.com/dnti6czq4/image/upload/v1757590257/after9_fqtjmb.jpg", title: "Fiat" },
      { before: "https://res.cloudinary.com/dnti6czq4/image/upload/v1757590257/before10_u3ffu7.jpg", after: "https://res.cloudinary.com/dnti6czq4/image/upload/v1757590256/after10_ytjcmm.jpg", title: "Ford" },
      { before: "https://res.cloudinary.com/dnti6czq4/image/upload/v1757590258/before11_h3bomd.jpg", after: "https://res.cloudinary.com/dnti6czq4/image/upload/v1757590257/after11_et0cm8.jpg", title: "Ford" },
      { before: "https://res.cloudinary.com/dnti6czq4/image/upload/v1757590258/before12_vexvcx.jpg", after: "https://res.cloudinary.com/dnti6czq4/image/upload/v1757590256/after12_jxrgjs.jpg", title: "Toyota" },
    ],
  },
  {
    name: "Наші учні",
    type: "process",
    items: [
      { photo: "https://res.cloudinary.com/dnti6czq4/image/upload/v1757590278/Maks_pjapuc.jpg", description: "Максим після завершення курсу" },
      { photo: "https://res.cloudinary.com/dnti6czq4/image/upload/v1757590277/Andrii_yv7nbv.jpg", description: "Артем з отриманим сертифікатом" },
      { photo: "https://res.cloudinary.com/dnti6czq4/image/upload/v1757590278/Petro_hpxf3n.jpg", description: "Петро після проходження навчання" },
      { photo: "https://res.cloudinary.com/dnti6czq4/image/upload/v1758613877/Serhii_mtdk1l.jpg", description: "Сергій з дипломом випускника" },
      { photo: "https://res.cloudinary.com/dnti6czq4/image/upload/v1757590278/Serhii2_sv8kmx.jpg", description: "Сергій під час вручення сертифіката" },
      { photo: "https://res.cloudinary.com/dnti6czq4/image/upload/v1757590278/NovosadSerhii_nxuq2z.jpg", description: "Сергій після успішного навчання" },
    ],
  },
  {
    name: "Робочий процес",
    type: "process",
    items: [
      { photo: "https://res.cloudinary.com/dnti6czq4/image/upload/v1757590276/work1_pmfyqw.jpg", description: "Опрацювання вм’ятин спеціальним молотком" },
      { photo: "https://res.cloudinary.com/dnti6czq4/image/upload/v1757590276/work2_hru7pa.jpg", description: "Виправлення пошкоджень крючковим інструментом" },
      { photo: "https://res.cloudinary.com/dnti6czq4/image/upload/v1757590276/work3_ouufqq.jpg", description: "Точне опрацювання металу" },
      { photo: "https://res.cloudinary.com/dnti6czq4/image/upload/v1757590277/work4_eyjnem.jpg", description: "Локальне усунення вм’ятин" },
      { photo: "https://res.cloudinary.com/dnti6czq4/image/upload/v1757590277/work5_pem27m.jpg", description: "Робота з клейовою технологією" },
      { photo: "https://res.cloudinary.com/dnti6czq4/image/upload/v1757590277/work6_gzfkbx.jpg", description: "Детальна обробка поверхні" },
      { photo: "https://res.cloudinary.com/dnti6czq4/image/upload/v1757590277/work7_adwjvc.jpg", description: "Процес фіксації за допомогою клею" },
      { photo: "https://res.cloudinary.com/dnti6czq4/image/upload/v1757590277/work8_ll3kcq.jpg", description: "Формування ідеальної поверхні" },
      { photo: "https://res.cloudinary.com/dnti6czq4/image/upload/v1757590277/work9_ffnkk1.jpg", description: "Виправлення дрібних вм’ятин" },
      { photo: "https://res.cloudinary.com/dnti6czq4/image/upload/v1757590275/work10_jzogko.jpg", description: "Акуратне вирівнювання металу" },
      { photo: "https://res.cloudinary.com/dnti6czq4/image/upload/v1757590276/work11_qjztrz.jpg", description: "Технологія клейового ремонту" },
      { photo: "https://res.cloudinary.com/dnti6czq4/image/upload/v1757590276/work12_baqpym.jpg", description: "Оцінка результату після роботи" },
    ],
  },
  {
    name: "Процес навчання",
    type: "process",
    items: [
      { photo: "https://res.cloudinary.com/dnti6czq4/image/upload/v1757590279/study1_fl3opb.jpg", description: "Перший етап — ознайомлення з PDR-інструментами" },
      { photo: "https://res.cloudinary.com/dnti6czq4/image/upload/v1757590279/study2_e281ma.jpg", description: "Аналіз і визначення характеру вм’ятин" },
      { photo: "https://res.cloudinary.com/dnti6czq4/image/upload/v1757590279/study3_jq5tws.jpg", description: "Відпрацювання клейової технології" },
      { photo: "https://res.cloudinary.com/dnti6czq4/image/upload/v1757590279/study4_qm8uv7.jpg", description: "Тренування точних ударів молотком" },
      { photo: "https://res.cloudinary.com/dnti6czq4/image/upload/v1757590279/study5_g4bkpy.jpg", description: "Практика роботи крючковим інструментом" },
      { photo: "https://res.cloudinary.com/dnti6czq4/image/upload/v1757590279/study6_lcme5l.jpg", description: "Робоча атмосфера під час навчання" },
      { video: "https://res.cloudinary.com/dnti6czq4/video/upload/v1757590279/videostudy1_rxj3dw.MOV", description: "Відео: оцінка пошкодженої деталі" },
      { video: "https://res.cloudinary.com/dnti6czq4/video/upload/v1757590279/videostudy2_ecgfnc.MOV", description: "Відео: застосування клейової технології" },
      { video: "https://res.cloudinary.com/dnti6czq4/video/upload/v1757590279/videostudy3_a3em2t.MOV", description: "Відео: відпрацювання роботи молотком" },
      { video: "https://res.cloudinary.com/dnti6czq4/video/upload/v1757590279/videostudy4_mdarx4.MOV", description: "Відео: індивідуальна робота з наставником" },
      { video: "https://res.cloudinary.com/dnti6czq4/video/upload/v1757590279/videostudy5_o8dqzz.MOV", description: "Відео: точне виправлення металу" },
      { video: "https://res.cloudinary.com/dnti6czq4/video/upload/v1757590279/videostudy6_ntvww0.MOV", description: "Відео: тренування з клейовою системою" },
    ],
  },
];
