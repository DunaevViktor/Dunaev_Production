var articles = [
    {
        id: "1",
        title: "Исполнителей приговорили к пожизненному.",
        summary: "Исполнителей двойного убийства в Минске приговорили к пожизненному, заказчицу — к 12 годам",
        createdAt: new Date(2017, 3, 6, 14, 51),
        author: "Соболевский",
        tags: ["криминал", "суд", "Минск"],
        content: "Напомним, по версии следствия, причиной трагедии в Минске стала ревность:" +
        " 27-летняя воспитательница детсада Алина Шульганова хотела вернуть бывшего парня." +
        " Она попросила соседа по дому Александра Жильникова (ранее судимого) и его " +
        "приятеля Вячеслава Сухарко «отправить» соперницу в больницу на пару недель — избить."+
        "Но исполнители перестарались и убили обоих в одной из квартир по улице Алибегова."+
        "На теле убитых эксперты насчитали десятки ножевых ранений. Погибшей было 24 года, парню — 32."
    },
    {
        id: "2",
        title: "На торгах 6 марта рубль окреп.",
        summary: "На торгах 6 марта рубль окреп только к доллару.",
        createdAt: new Date(2017, 2, 3, 23, 14),
        author: "Петровский",
        tags: ["торги", "экономика", "Беларусь"],
        content: "На Белорусской валютно-фондовой бирже 6 марта прошли очередные торги валютами." +
        "Курс рубля снизился к евро и российскому рублю.Доллар снизился на BYN0,011 — до 1,9031 рубля."+
        "Евро вырос на BYN0,0072 — до 2,0203 рубля.Российский рубль укрепился"+
        "на BYN0,0146 — до 3,2651 за 100 российских рублей.В курсообразовании Нацбанк"+
        "использует механизм сглаживания дневных колебаний курса рубля к корзине валют,"+
        "в которой удельный вес российского рубля составляет 50%, доллара США — 30%, евро — 20%."
    },
    {
        id: "3",
        title: "Минское «Динамо» обыграло ярославский «Локомотив»",
        summary: "Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2.",
        createdAt: new Date(2017, 2, 27, 20, 1),
        author: "Иван Иванов",
        tags: ["КХЛ", "хоккей", "спорт"],
        content: "Гости создали больше опасных моментов и в два раза перебросали минчан," +
        " но «зубры» на этот раз очень эффективно использовали свои моменты."
    },
    {
        id: "4",
        title: "Министр Заяц гарантирует Данкверту",
        summary: "Министр Заяц гарантирует Данкверту, что тот вернется в Россию после визита в Беларусь.",
        createdAt: new Date(2016, 11, 1, 14, 12),
        author: "Похомчик",
        tags: ["сельское", "хозяйство", "Беларусь"],
        content: "Беларусь на совместной с Минсельхозом России коллегии планирует обсудить" +
        " поставки своей продукции. Глава Минсельхозпрода Беларуси Леонид Заяц также пригласил" +
        " на коллегию своего российского коллегу Александра Ткачева и руководителя Россельхознадзора" +
        " Сергея Данкверта. Об этом Леонид Заяц рассказал в интервью РИА «Новости»."
    },
    {
        id: "5",
        title: "Минтранс не будет вносить изменения",
        summary: "Минтранс не будет вносить изменения в механизм сбора дорожного налога",
        createdAt: new Date(2017, 2, 27, 11, 9),
        author: "Тихонович",
        tags: ["минсктранс", "Беларусь"],
        content: "Минтранс не будет вносить изменения в механизм сбора дорожного налога," +
        " при этом ведомство уделит внимание ремонту местных дорог. Об этом на пресс-конференции " +
        "сказал министр транспорта и коммуникаций Беларуси Анатолий Сивак."
    },
    {
        id: "6",
        title: "МАРТ подготовил революционный проект",
        summary: "МАРТ подготовил революционный проект указа для предприятий ритейла, общепита и бытовых услуг",
        createdAt: new Date(2017, 2, 13, 15, 27),
        author: "Сидорович",
        tags: ["указ", "Беларусь", "экономика"],
        content: "Министерство антимонопольного регулирования и торговли подготовило проект" +
        " указа президента, предполагающий мораторий на проверки до конца 2020 года и широкие" +
        " налоговые льготы для субъектов ритейла, общепита и бытовых услуг. Об этом сообщается в" +
        " пресс-релизе Бизнес союза предпринимателей и нанимателей имени профессора М. С. Кунявского."
    },
    {
        id: "7",
        title: "В Бресте идут суды",
        summary: "В Бресте идут суды над участниками Марша нетунеядцев",
        createdAt: new Date(2017, 3, 5, 13, 37),
        author: "Калиновский",
        tags: ["Брест", "суд", "марш"],
        content: "Суд Ленинского района Бреста 6 марта рассматривает административные дела" +
        " в отношении представителей анархистского движения, которые принимали участие" +
        " в «Марше нетунеядцев» в Бресте в прошлые выходные."
    },
    {
        id: "8",
        title: "Умерла одна из пострадавших",
        summary: "Умерла одна из пострадавших при взрыве на Скидельском сахарном комбинате",
        createdAt: new Date(2017, 3, 5, 20, 36),
        author: "Врач",
        tags: ["взрыв", "Гродно"],
        content: "44-летняя женщина скончалась в ночь с пятницы на субботу." +
        " Пострадавшая проходила лечение в Гродненской БСМП."
    },
    {
        id: "9",
        title: "Стройка остановлена, лагерь свернут",
        summary: "Стройка остановлена, лагерь свернут: противостояние в Куропатах закончено",
        createdAt: new Date(2017, 3, 6, 16, 11),
        author: "Сталин",
        tags: ["Минск", "стройка", "протест"],
        content: "На пятнадцатый день противостояния в Куропатах активисты, протестовавшие против" +
        " строительства бизнес-центра, решили убрать лагерь, передает корреспондент TUT.BY." +
        " Стройка сейчас полностью остановлена, забор планируют разобрать в ближайшее время."
    },
    {
        id: "10",
        title: "Южнокорейские военные сообщили",
        summary: "Южнокорейские военные сообщили о запуске ракеты КНДР",
        createdAt: new Date(2017, 3, 6, 4, 52),
        author: "КимЧенЫн",
        tags: ["КНДР", "Корея", "политика"],
        content: "КНДР осуществила запуск ракеты неизвестного типа. Об этом сообщает в понедельник," +
        " 6 марта, агентство «Ёнхап» со ссылкой на заявление комитета начальников штабов Южной Кореи."
    },
    {
        id: "11",
        title: "Исполнителей приговорили к пожизненному.",
        summary: "Исполнителей двойного убийства в Минске приговорили к пожизненному, заказчицу — к 12 годам",
        createdAt: new Date(2017, 3, 7, 14, 51),
        author: "Соболевская",
        tags: ["криминал", "суд", "Минск"],
        content: "Напомним, по версии следствия, причиной трагедии в Минске стала ревность:" +
        " 27-летняя воспитательница детсада Алина Шульганова хотела вернуть бывшего парня." +
        " Она попросила соседа по дому Александра Жильникова (ранее судимого) и его " +
        "приятеля Вячеслава Сухарко «отправить» соперницу в больницу на пару недель — избить."+
        "Но исполнители перестарались и убили обоих в одной из квартир по улице Алибегова."+
        "На теле убитых эксперты насчитали десятки ножевых ранений. Погибшей было 24 года, парню — 32."
    },
    {
        id: "12",
        title: "На торгах 6 марта рубль окреп.",
        summary: "На торгах 6 марта рубль окреп только к доллару.",
        createdAt: new Date(2017, 4, 3, 23, 14),
        author: "Марков",
        tags: ["торги", "экономика", "Беларусь"],
        content: "На Белорусской валютно-фондовой бирже 6 марта прошли очередные торги валютами." +
        "Курс рубля снизился к евро и российскому рублю.Доллар снизился на BYN0,011 — до 1,9031 рубля."+
        "Евро вырос на BYN0,0072 — до 2,0203 рубля.Российский рубль укрепился"+
        "на BYN0,0146 — до 3,2651 за 100 российских рублей.В курсообразовании Нацбанк"+
        "использует механизм сглаживания дневных колебаний курса рубля к корзине валют,"+
        "в которой удельный вес российского рубля составляет 50%, доллара США — 30%, евро — 20%."
    },
    {
        id: "13",
        title: "Минское «Динамо» обыграло ярославский «Локомотив»",
        summary: "Минское «Динамо» обыграло ярославский «Локомотив» в четвертом матче первого раунда плей-офф КХЛ — 4:2.",
        createdAt: new Date(2017, 2, 27, 20, 51),
        author: "Иванов",
        tags: ["КХЛ", "хоккей", "спорт"],
        content: "Гости создали больше опасных моментов и в два раза перебросали минчан," +
        " но «зубры» на этот раз очень эффективно использовали свои моменты."
    },
    {
        id: "14",
        title: "Министр Заяц гарантирует Данкверту",
        summary: "Министр Заяц гарантирует Данкверту, что тот вернется в Россию после визита в Беларусь.",
        createdAt: new Date(2016, 11, 1, 4, 12),
        author: "Данец",
        tags: ["сельское", "хозяйство", "Беларусь"],
        content: "Беларусь на совместной с Минсельхозом России коллегии планирует обсудить" +
        " поставки своей продукции. Глава Минсельхозпрода Беларуси Леонид Заяц также пригласил" +
        " на коллегию своего российского коллегу Александра Ткачева и руководителя Россельхознадзора" +
        " Сергея Данкверта. Об этом Леонид Заяц рассказал в интервью РИА «Новости»."
    },
    {
        id: "15",
        title: "Минтранс не будет вносить изменения",
        summary: "Минтранс не будет вносить изменения в механизм сбора дорожного налога",
        createdAt: new Date(2017, 2, 17, 11, 54),
        author: "Пятницкая",
        tags: ["минсктранс", "Беларусь"],
        content: "Минтранс не будет вносить изменения в механизм сбора дорожного налога," +
        " при этом ведомство уделит внимание ремонту местных дорог. Об этом на пресс-конференции " +
        "сказал министр транспорта и коммуникаций Беларуси Анатолий Сивак."
    },
    {
        id: "16",
        title: "МАРТ подготовил революционный проект",
        summary: "МАРТ подготовил революционный проект указа для предприятий ритейла, общепита и бытовых услуг",
        createdAt: new Date(2017, 2, 10, 15, 27),
        author: "Петрович",
        tags: ["указ", "Беларусь", "экономика"],
        content: "Министерство антимонопольного регулирования и торговли подготовило проект" +
        " указа президента, предполагающий мораторий на проверки до конца 2020 года и широкие" +
        " налоговые льготы для субъектов ритейла, общепита и бытовых услуг. Об этом сообщается в" +
        " пресс-релизе Бизнес союза предпринимателей и нанимателей имени профессора М. С. Кунявского."
    },
    {
        id: "17",
        title: "В Бресте идут суды",
        summary: "В Бресте идут суды над участниками Марша нетунеядцев",
        createdAt: new Date(2017, 2, 5, 13, 37),
        author: "Костюшко",
        tags: ["Брест", "суды", "марш"],
        content: "Суд Ленинского района Бреста 6 марта рассматривает административные дела" +
        " в отношении представителей анархистского движения, которые принимали участие" +
        " в «Марше нетунеядцев» в Бресте в прошлые выходные."
    },
    {
        id: "18",
        title: "Умерла одна из пострадавших",
        summary: "Умерла одна из пострадавших при взрыве на Скидельском сахарном комбинате",
        createdAt: new Date(2016, 11, 5, 20, 36),
        author: "Медсестра",
        tags: ["взрыв", "Гродно"],
        content: "44-летняя женщина скончалась в ночь с пятницы на субботу." +
        " Пострадавшая проходила лечение в Гродненской БСМП."
    },
    {
        id: "19",
        title: "Стройка остановлена, лагерь свернут",
        summary: "Стройка остановлена, лагерь свернут: противостояние в Куропатах закончено",
        createdAt: new Date(2017, 1, 6, 16, 11),
        author: "Сталинка",
        tags: ["Минск", "стройка", "протест"],
        content: "На пятнадцатый день противостояния в Куропатах активисты, протестовавшие против" +
        " строительства бизнес-центра, решили убрать лагерь, передает корреспондент TUT.BY." +
        " Стройка сейчас полностью остановлена, забор планируют разобрать в ближайшее время."
    },
    {
        id: "20",
        title: "Южнокорейские военные сообщили",
        summary: "Южнокорейские военные сообщили о запуске ракеты КНДР",
        createdAt: new Date(2017, 3, 4, 4, 52),
        author: "Брат КимЧенЫн-а",
        tags: ["КНДР", "Корея", "политика"],
        content: "КНДР осуществила запуск ракеты неизвестного типа. Об этом сообщает в понедельник," +
        " 6 марта, агентство «Ёнхап» со ссылкой на заявление комитета начальников штабов Южной Кореи."
    }

];

var tags = ["криминал","суд", "Минск","торги","экономика","КХЛ", "хоккей", "спорт",
    "сельское", "хозяйство", "Беларусь",
    "минсктранс","указ", "Беларусь","Брест","марш","взрыв", "Гродно",
    "стройка", "протест","КНДР", "Корея", "политика"];

function getArticles(skip, top, filterConfig){
    var result = articles;
    var from = skip || 0;
    var number = top || 10;
    if (filterConfig != undefined) {
        if (filterConfig.author != undefined) {
            result = result.filter(function (element) {
                return element.author == filterConfig.author;
            })
        }
        if (filterConfig.dateFrom != undefined) {
            result = result.filter(function (element) {
                return element.createdAt.getTime() >= filterConfig.dateFrom.getTime();
            })
        }
        if (filterConfig.dateTo != undefined) {
            result = result.filter(function (element) {
                return element.createdAt.getTime() <= filterConfig.dateTo.getTime();
            })
        }
        if (filterConfig.tags != undefined && filterConfig.tags.length != 0) {
            result = result.filter(function (element) {
                return filterConfig.tags.every(function (tag) {
                    return element.tags.indexOf(tag) >= 0;
                })
            })
        }
    }
    return result.slice(from, from + number);
}

function getArticle(findId) {
    return articles.filter(function (element) {
        return element.id == findId;
    })[0];
}

function validateArticle(article) {
    if (article.title != undefined && (article.title.length > 100 || article.title.length == 0)) {
        return false;
    } else if (article.tags != undefined && (article.tags.length == 0 || article.tags.length > 5)) {
        return false;
    } else if (article.summary != undefined && (article.summary.length == 0 || article.summary.length > 200)) {
        return false;
    } else if (article.tags != undefined && !article.tags.every(function (tag) {
            if (tags.indexOf(tag) >= 0) {
                return true;
            } else {
                return false;
            }
        })){
        return false;
    } else {
        return true;
    }
}

function addArticle(article) {
    var prevSize = articles.length;
    if(!validateArticle(article)) {
        return false;
    } else if(prevSize == articles.push(article)) {
        return false;
    } else {
        return true;
    }
}

function removeArticle(removeId) {
    var removeIndex = articles.indexOf(getArticle(removeId));
    if (removeIndex != -1) {
        articles.splice(removeIndex, 1);
        return true;
    } else {
        return false;
    }
}

function editArticle(editId, article) {
    var editIndex = articles.indexOf(getArticle(editId));
    if(!validateArticle(article) || editIndex < 0) {
        return false;
    }
    if (article.title != undefined) {
        articles[editIndex].title = article.title;
    }
    if (article.summary != undefined) {
        articles[editIndex].summary = article.summary;
    }
    if (article.tags != undefined) {
        articles[editIndex].tags = article.tags;
    }
    if (article.content != undefined) {
        articles[editIndex].content = article.content;
    }
    return true;
}

var testST1 = {
    id: "25",
    title: "testST1",
    summary: "testST1more",
    createdAt: new Date(),
    author: "none",
    tags: ["пустой", "тег"],
    content: "вместо новости"
};
var testST2 = {
    summary: "трям-пам",
    tags: ["лол", "кек"]
};
var testST3 = {
    id: "22",
    title: "Главная новость дня",
    summary: "в общем ДА",
    createdAt: new Date(),
    author: "Петр",
    tags: ["Беларусь", "политика", "Минск"],
    content: "новостей не будет, иди домой"
};
var testFil1 = {
    author: "Сталин"
};
var testFil2 = {
    dateFrom: new Date(2017, 2, 20),
    dateTo: new Date(2017, 3, 20)
};
var testFil3 = {
    tags: ["Минск"]
};
var testFil4 = {
    author: "Петровский",
    dateFrom: new Date(2017, 1),
    dateTo: new Date(2017, 4),
    tags: ["Беларусь"]
};
var testFil5 = {
    author: "Некто"
};

console.log("getArticle(valid): ");
console.log(getArticle("5"));
console.log("getArticle(invalid): ");
console.log(getArticle("1337"));

console.log("validateArticle(valid): " + validateArticle(getArticle("2")));
console.log("validateArticle(invalid): " + validateArticle(testST3));

console.log("addArticle(invalid): " + addArticle(testST3));
console.log("addArticle(valid): " + addArticle(testST1));

console.log("articles length after addArticle(): " + articles.length);
console.log("getArticle(addedArticle): ");
console.log(getArticle("21"));

console.log("editArticle(valid): " + editArticle("21", testST2));
console.log("editArticle(invalid): " + editArticle("250", testST2));
console.log("editArticle(invalid): " + editArticle("21", testST3));

console.log("getArticle(editedArticle): ");
console.log(getArticle("21"));

console.log("removeArticle(valid): " + removeArticle("21"));
console.log("removeArticle(invalid): " + removeArticle("30"));

console.log("articles length after removeArticle(): " + articles.length);
console.log("getArticles(0, 10)(valid): ");

getArticles(0, 10).forEach(function (element) {
    console.log(element);
});

console.log("getArticles(10, 11)(valid): ");
getArticles(10, 11).forEach(function (element) {
    console.log(element);
});

console.log("getArticles(0, 10, testFil1)(valid): ");
getArticles(0, 10, testFil1).forEach(function (element) {
    console.log(element);
});

console.log("getArticles(0, 10, testFil2)(valid): ");
getArticles(0, 10, testFil2).forEach(function (element) {
    console.log(element);
});

console.log("getArticles(0, 10, testFil3)(valid): ");
getArticles(0, 10, testFil3).forEach(function (element) {
    console.log(element);
});

console.log("getArticles(0, 10, testFil4)(valid): ");
getArticles(0, 10, testFil4).forEach(function (element) {
    console.log(element);
});

console.log("getArticles(0, 10, testFil5)(invalid): ");
getArticles(0, 10, testFil5).forEach(function (element) {
    console.log(element);
});


