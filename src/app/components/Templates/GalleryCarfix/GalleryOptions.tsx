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
      { before: "/img/gallery/before-after/mustangbefore.jpg", after: "/img/gallery/before-after/mustangafter.jpg", title: "Ford" },
      { before: "/img/gallery/before-after/before2.jpg", after: "/img/gallery/before-after/after2.jpg", title: "BMW" },
      { before: "/img/gallery/before-after/before3.jpg", after: "/img/gallery/before-after/after3.jpg", title: "Subaru" },
      { before: "/img/gallery/before-after/before4.jpg", after: "/img/gallery/before-after/after4.jpg", title: "Honda" },
      { before: "/img/gallery/before-after/before5.jpg", after: "/img/gallery/before-after/after5.jpg", title: "Volkswagen" },
      { before: "/img/gallery/before-after/before6.jpg", after: "/img/gallery/before-after/after6.jpg", title: "Tesla" },
      { before: "/img/gallery/before-after/before7.jpg", after: "/img/gallery/before-after/after7.jpg", title: "Toyota" },
      { before: "/img/gallery/before-after/before8.jpg", after: "/img/gallery/before-after/after8.jpg", title: "Fiat" },
      { before: "/img/gallery/before-after/before9.jpg", after: "/img/gallery/before-after/after9.jpg", title: "Fiat" },
      { before: "/img/gallery/before-after/before10.jpg", after: "/img/gallery/before-after/after10.jpg", title: "Ford" },
      { before: "/img/gallery/before-after/before11.jpg", after: "/img/gallery/before-after/after11.jpg", title: "Ford" },
      { before: "/img/gallery/before-after/before12.jpg", after: "/img/gallery/before-after/after12.jpg", title: "Nissan" },
    ],
  },
  {
    name: "Наші учні",
    type: "process",
    items: [
      { photo: "/img/gallery/students/Maks.jpg", description: "Максим після завершення курсу" },
      { photo: "/img/gallery/students/Andrii.jpg", description: "Артем з отриманим сертифікатом" },
      { photo: "/img/gallery/students/Petro.jpg", description: "Петро після проходження навчання" },
      { photo: "/img/gallery/students/Serhii.jpg", description: "Сергій з дипломом випускника" },
      { photo: "/img/gallery/students/Serhii2.jpg", description: "Сергій під час вручення сертифіката" },
      { photo: "/img/gallery/students/NovosadSerhii.jpg", description: "Сергій після успішного навчання" },
    ],
  },
  {
    name: "Робочий процес",
    type: "process",
    items: [
      { photo: "/img/gallery/process/work1.jpg", description: "Опрацювання вм’ятин спеціальним молотком" },
      { photo: "/img/gallery/process/work2.jpg", description: "Виправлення пошкоджень крючковим інструментом" },
      { photo: "/img/gallery/process/work3.jpg", description: "Точне опрацювання металу" },
      { photo: "/img/gallery/process/work4.jpg", description: "Локальне усунення вм’ятин" },
      { photo: "/img/gallery/process/work5.jpg", description: "Робота з клейовою технологією" },
      { photo: "/img/gallery/process/work6.jpg", description: "Детальна обробка поверхні" },
      { photo: "/img/gallery/process/work7.jpg", description: "Процес фіксації за допомогою клею" },
      { photo: "/img/gallery/process/work8.jpg", description: "Формування ідеальної поверхні" },
      { photo: "/img/gallery/process/work9.jpg", description: "Виправлення дрібних вм’ятин" },
      { photo: "/img/gallery/process/work10.jpg", description: "Акуратне вирівнювання металу" },
      { photo: "/img/gallery/process/work11.jpg", description: "Технологія клейового ремонту" },
      { photo: "/img/gallery/process/work12.jpg", description: "Оцінка результату після роботи" },
    ],
  },
  {
    name: "Процес навчання",
    type: "process",
    items: [
      { photo: "/img/gallery/studying/study1.jpg", description: "Перший етап — ознайомлення з PDR-інструментами" },
      { photo: "/img/gallery/studying/study2.jpg", description: "Аналіз і визначення характеру вм’ятин" },
      { photo: "/img/gallery/studying/study3.jpg", description: "Відпрацювання клейової технології" },
      { photo: "/img/gallery/studying/study4.jpg", description: "Тренування точних ударів молотком" },
      { photo: "/img/gallery/studying/study5.jpg", description: "Практика роботи крючковим інструментом" },
      { photo: "/img/gallery/studying/study6.jpg", description: "Робоча атмосфера під час навчання" },
      { video: "/img/gallery/studying/videostudy1.MOV", description: "Відео: оцінка пошкодженої деталі" },
      { video: "/img/gallery/studying/videostudy2.mp4", description: "Відео: застосування клейової технології" },
      { video: "/img/gallery/studying/videostudy3.mp4", description: "Відео: відпрацювання роботи молотком" },
      { video: "/img/gallery/studying/videostudy4.MOV", description: "Відео: індивідуальна робота з наставником" },
      { video: "/img/gallery/studying/videostudy5.MOV", description: "Відео: точне виправлення металу" },
      { video: "/img/gallery/studying/videostudy6.MOV", description: "Відео: тренування з клейовою системою" },
    ],
  },
];
