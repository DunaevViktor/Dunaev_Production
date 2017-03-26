let user = "HunterBLR" || null;

let articlesService = (function () {
    let articles = [
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

    let tags = ["криминал","суд", "Минск","торги","экономика","КХЛ", "хоккей", "спорт",
        "сельское", "хозяйство", "Беларусь",
        "минсктранс","указ", "Беларусь","Брест","марш","взрыв", "Гродно",
        "стройка", "протест","КНДР", "Корея", "политика"];

    //получить массив статей с сортировкой по дате создания и пагинацией
    function getArticles(skip, top, filterConfig) {
        let result = articles;
        let from = skip || 0;
        let number = top || 20;
        if (filterConfig) {
            if (filterConfig.author) {
                result = result.filter(function (element) {
                    return element.author == filterConfig.author;
                })
            }
            if (filterConfig.dateFrom) {
                result = result.filter(function (element) {
                    return element.createdAt.getTime() >= filterConfig.dateFrom.getTime();
                })
            }
            if (filterConfig.dateTo) {
                result = result.filter(function (element) {
                    return element.createdAt.getTime() <= filterConfig.dateTo.getTime();
                })
            }
            if (filterConfig.tags && filterConfig.tags.length != 0) {
                result = result.filter(function (element) {
                    return filterConfig.tags.every(function (tag) {
                        return element.tags.indexOf(tag) >= 0;
                    })
                })
            }
        }
        result.sort(function (a, b) {
            return b.createdAt.getTime() - a.createdAt.getTime();
        });
        return result.slice(from, from + number);
    }
    //получить статью из массива articles с определенным id
    function getArticle(findId) {
        return articles.find(function (element) {
            return element.id == findId;
        });
    }
    //проверить объект article на валидность
    function validateArticle(article) {
        if (article.id &&
            (typeof(article.id) != "string" || article.id.length == 0) && articles.filter(function (element) {
                return element.id == article.id;
            }).length != 0) {
            return false;
        } else if (article.title &&
            (typeof(article.title) != "string" || article.title.length > 100 || article.title.length == 0)) {
            return false;
        } else if (article.tags &&
            (!(article.tags instanceof Array) || article.tags.length == 0 || article.tags.length > 5)) {
            return false;
        } else if (article.summary &&
            (typeof(article.summary) != "string" || article.summary.length == 0 || article.summary.length > 200)) {
            return false;
        } else if (article.createdAt && !(article.createdAt instanceof Date)) {
            return false;
        } else if (article.author && (typeof(article.author) != "string" || article.author.length == 0)) {
            return false;
        } else if (article.content && (typeof(article.content) != "string" || article.content.length == 0)) {
            return false;
        } else return !(article.tags && !article.tags.every(function (tag) {
            return tags.indexOf(tag) >= 0 && typeof(tag) == "string";
        }));
    }
    //добавить новую статью в массив article, предварительно проверив ее на валидность
    function addArticle(article) {
        let prevSize = articles.length;
        if (!validateArticle(article)) {
            return false;
        } else return prevSize != articles.push(article);
    }
    //удалить статью по id из массива articles
    function removeArticle(removeId) {
        let removeIndex = articles.findIndex(function (element) {
            return element.id == removeId;
        });
        if (removeIndex != -1) {
            articles.splice(removeIndex, 1);
            return true;
        } else {
            return false;
        }
    }
    //изменить статью в массиве articles по id
    function editArticle(editId, article) {
        let editIndex = articles.findIndex(function (element) {
            return element.id == editId;
        });
        if (!validateArticle(article) || editIndex < 0) {
            return false;
        }
        if (article.title) {
            articles[editIndex].title = article.title;
        }
        if (article.summary) {
            articles[editIndex].summary = article.summary;
        }
        if (article.tags) {
            articles[editIndex].tags = article.tags;
        }
        if (article.content) {
            articles[editIndex].content = article.content;
        }
        return true;
    }

    return {
        getArticles: getArticles,
        getArticle: getArticle,
        validateArticle: validateArticle,
        addArticle: addArticle,
        removeArticle: removeArticle,
        editArticle: editArticle
    };

}());

let articlesLogic = (function () {
    const USER_NAME = document.querySelector(".user");
    const HEADER_ACTIONS = document.querySelector(".header-actions");
    const ARTICLE_TEMPLATE = document.querySelector("#template-article");
    const ARTICLE_LIST = document.querySelector(".article-list");
    const TAG_TEMPLATE = document.querySelector("#template-tag");
    const TAG_LIST = ARTICLE_TEMPLATE.content.querySelector(".tag-list");

    //доваление статей
    function appendArticles(articles) {
        createArticles(articles).forEach(function (article) {
            ARTICLE_LIST.appendChild(article);
        });
    }
    //создания массива статей
    function createArticles(articles) {
        return articles.map(function (article) {
            return createArticle(article);
        });
    }
    //создание статьи
    function createArticle(article) {
        const ARTICLE_ACTIONS = ARTICLE_TEMPLATE.content.querySelector(".article-actions");
        const VIEW_BUTTON = document.querySelector("#template-view-button");
        const EDIT_BUTTON = document.querySelector("#template-edit-button");
        const DELETE_BUTTON = document.querySelector("#template-delete-button");
        TAG_LIST.innerHTML = "";
        ARTICLE_ACTIONS.innerHTML = "";
        ARTICLE_TEMPLATE.content.querySelector(".article").dataset.id = article.id;
        ARTICLE_TEMPLATE.content.querySelector(".title").textContent = article.title;
        ARTICLE_TEMPLATE.content.querySelector(".author").textContent = article.author;
        ARTICLE_TEMPLATE.content.querySelector(".date").textContent = dateToString(article.createdAt);
        ARTICLE_TEMPLATE.content.querySelector(".summary").textContent = article.summary;
        ARTICLE_TEMPLATE.content.querySelector(".content").textContent = article.content;

        article.tags.forEach(function (tag) {
            TAG_TEMPLATE.content.querySelector(".tag").textContent = tag;
            TAG_LIST.appendChild(TAG_TEMPLATE.content.querySelector(".tag").cloneNode(true));
        });

        ARTICLE_ACTIONS.appendChild(VIEW_BUTTON.content.querySelector(".view-button").cloneNode(true));

        if (user != null) {
            ARTICLE_ACTIONS.appendChild(EDIT_BUTTON.content.querySelector(".edit-button").cloneNode(true));
            ARTICLE_ACTIONS.appendChild(DELETE_BUTTON.content.querySelector(".delete-button").cloneNode(true));
        }
        return ARTICLE_TEMPLATE.content.querySelector(".article").cloneNode(true);
    }
    //преобразование даты в строку
    function dateToString(date) {
        return date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear() + " " + date.getHours() + ":" +
            date.getMinutes();
    }
    //удалить статьи
    function removeArticlesAll() {
        ARTICLE_LIST.innerHTML = "";
    }
    //создание header
    function headerConfig() {
        const ADD_ARTICLE_TEMPLATE = document.querySelector("#template-add-article");
        const ADD_ARTICLE_HOLDER = HEADER_ACTIONS.querySelector(".add-article-holder");
        if (user == null) {
            USER_NAME.textContent = "Гость";
            HEADER_ACTIONS.querySelector(".login-logout").textContent = "Войти";
        } else {
            ADD_ARTICLE_HOLDER.appendChild(ADD_ARTICLE_TEMPLATE.content.querySelector(".add-article").cloneNode(true));
            USER_NAME.textContent = user;
            HEADER_ACTIONS.querySelector(".login-logout").textContent = "Выйти";
        }
    }

    return {
        appendArticles: appendArticles,
        removeArticlesAll: removeArticlesAll,
        headerConfig: headerConfig
    };
}());

//Чтобы убедиться, что HTML загружен и обработан, а DOM
//документ полностью построен и доступен, можно использовать
//события браузера: DOMContentLoaded.
document.addEventListener("AllLoader", loadALL());
function loadALL() {
    articlesLogic.headerConfig();
    appendArticles();
}

//Реализация  функций для демонстрации работы бизнес-логики приложения
function appendArticles(from, to) {
    articlesLogic.removeArticlesAll();
    articlesLogic.appendArticles(articlesService.getArticles(from, to));
}

function addArticle(article) {
    articlesService.addArticle(article);
    appendArticles();
}

function removeArticle(id) {
    articlesService.removeArticle(id);
    appendArticles();
}

function editArticle(id, article) {
    articlesService.editArticle(id, article);
    appendArticles();
}

let testArticle1 = {
    id: "21",
    title: "testST1",
    summary: "testST1more",
    createdAt: new Date(),
    author: "none",
    tags: ["пустой", "тег"],
    content: "вместо новости"
};
let testArticle2 = {
    title: "ТестДобавка",
    summary: "трям-пам",
    tags: ["лол", "кек"]
};

addArticle(testArticle1);
editArticle(21, testArticle2);
removeArticle(21);