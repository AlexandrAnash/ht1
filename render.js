const typesFeatureText = {
    small: 1,
    normal: 2,
    bold: 3
}
const articles = [
    {
        header: {
            image: "article-1__header.jpeg",
			imageFixed: true,  
            context: {
                firstText: "ФАРЕРЫ", 
                secondText: "ПЕРВЫЙ РАЗ В ИСТОРИИ",
				link: "",
				author: "" 
                // link: "http://silavetra.com/faroeislands", 
                // author: "Алиса Сорокина, Яна Сорокина, Ольга Цапко — команда «Силы Ветра»"
            }
        }, 
        articleTextBody: [
            `Всё началось праздничным январским вечером. Мы с друзьями собрались, чтобы отметить Рождество, приготовить вкусный ужин и посмотреть кино. С другого конца стола я услышала:`, 
            `— Давайте летом поедем туда!<br>
            — Куда? — спросила я.`,
            `Вместо ответа мне показали фотографии. Я ещё не знала, что это за место, в какой точке Земли находится, как называется, но уже понимала — еду!`,
            `За этим последовали обычные хлопоты подготовки к поездке: получение визы, приобретение и сбор всего необходимого, поиски информации и составление маршрутов.`,
            `Вопрос о способе передвижения между островами перед нами не стоял. Две яхты были готовы к отплытию 26 июля 2015 года. Кстати говоря, мы были первыми, кто арендовал яхты на целую неделю. В нашем распоряжении была лоция с подробной информацией о маринах, течениях, ветрах, но никаких фотографий, описаний, отзывов и впечатлений других яхтсменов мы не нашли. Это дало нам прекрасный шанс почувствовать себя первооткрывателями.`
        ], 
		isEmptyFeature: true,
        featureTop: {
            image: [], 
            text: "Пятнадцать человек и семь дней интригующей неизвестности. Все ждали той особенной свободы, присущей только северному морю на краю цивилизации.", 
            type: typesFeatureText.bold
        }, 
        featureBottom: {
            image: [], 
            text: "Практически всё, что мы знали о Фарерах, когда садились в самолет, — это то, что овец в этом месте больше, чем людей, что фарерцы охотятся на дельфинов, что там живут смешные птицы под названием тупики, что острова — одно из самых рыбных мест на Земле, и там очень красиво.", 
            type: typesFeatureText.bold
        }
    },
    {
        header: {
            image: "article-2__header.jpeg",  
            context: {
                firstText: "", 
                secondText: "ПЕРЕЛЁТ И ДОРОГА", 
                link: "", 
                author: ""
            }
        }, 
        articleTextBody: [
            `Когда самолёт, выполняющий рейс Копенгаген — Воар (Vágar), начал снижаться, мы прилипли к иллюминаторам. Всюду был туман, из которого вдруг выплыли величественные скалы и то самое знаменитое озеро Сёрвагсватн (Sørvágsvatn), над которым мы летели так низко, что казалось, будто самолет будет приводняться.`,
            `Мы ещё не сошли на землю, но уже впечатлились суровым пейзажем: невероятные зелёные холмы, высоченные утёсы, такие ровные, будто их ножом срезали, тёмная, живая вода океана, густой туман и водопады. Фарерские острова — это страна мистических туманов, ветров и водопадов. По местной легенде, названия водопадов — это вербальное выражение уникального шума каждого из них. Фарерцы слушали их и давали имена.`
        ], 
        featureTop: {
            image: [], 
            text: "Первыми жителями Фарерских островов, которых мы встретили, оказались овцы. Они просто гуляли по территории аэропорта.", 
            type: typesFeatureText.bold
        }, 
        featureBottom: {
            image: [], 
            text: "Если вы не арендуете машину, заранее посмотрите расписание автобусов из аэропорта в Торсхавн (Torshavn). Они ходят достаточно редко. Стоимость билета — 90 датских крон (примерно 850 р.)", 
            type: typesFeatureText.small
        }
    },
    {
	header: {
		image: "article-3__header.jpeg",
		context: {
			firstText: "",
			secondText: "ПОГОДА",
			link: "",
			author: ""
		}
	},
	articleTextBody: [
        `Мы знали про изменчивую фарерскую погоду и испытали все её особенности на себе. Обещали, что будет холодно, и не обманули.`,
        `Температура в самый тёплый месяц года не поднималась выше 14 градусов днём, что при наличии сильного ветра в море создавало достаточно суровые условия. Обещали дожди, но тут нам повезло: основательный дождь шёл только в один из дней. В остальном погода соответствовала фарерской поговорке «Не нравится погода — подожди пять минут». Северное солнце за минуты сменялось густым, непроглядным туманом, за которым следовал дождь, а ещё через полчаса небо снова расчищалось.`
    ],
	featureTop: {
		image: [],
		text: "",
		type: undefined
	},
	featureBottom: {
		image: [],
		text: "Встроенная печка на одной из яхт не раз нас спасала. На другой яхте система обогрева регулярно давала сбои из-за низкого заряда сервисной батареи — в кают-компании ребята спали в термобелье и зимних строительных комбинезонах.",
		type: typesFeatureText.small
	}
},
{
	header: {
		image: "article-4__header.jpeg",
		context: {
			firstText: "",
			secondText: "МОРЕ",
			link: "",
			author: ""
		}
	},
	articleTextBody: [
        `Со снаряжением я как-то справилась, но противостоять волнам во время пятичасовых переходов никакая экипировка не поможет. Я прижималась к леерной стойке на корме лодки, каждая волна обдавала меня холодными солёными брызгами.`,
        `Я смотрела вдаль на горизонт и понимала, что даже качка не в силах испортить момента. Мне было жалко людей, которые жалели меня, потому что им самим порой было не лучше. Смешно, что мы даже в туалет не ходили, потому что для этого нужно было спускаться в кают-компанию, а нахождение там во время сильной качки более трёх минут влечёт за собой необратимые последствия, если вы понимаете, о чем я.`,
        `Когда проходишь на яхте мимо фьордов, огромных камней и высоких пещер, с разных ракурсов видишь живые щупальца тумана, которые опускаются вниз по склонам, окутывают вершины, наполняют гроты и поглощают целые острова. Туман словно дышит, медленно и глубоко. Он зачаровывает. Он создаёт удивительный эффект парящих гор, ощущение, будто ты оказался в одном из мультфильмов Хаяо Миядзаки.`,
        `Казалось, что к этим пейзажам можно привыкнуть, но каждый раз за поворотом нас ждало что-то такое, от чего замирало сердце. Невероятные недоступные долины, где каким-то образом оказывался одинокий маленький домик, солнечный свет, пробивающийся сквозь облака, насыщенная зелень склонов, тёмные и глубокие пещеры — всё это хочется видеть ещё и ещё. В одну из пещер мы заплыли на тузике: сужающиеся проходы, полная темнота и набегающие волны заставили нас понервничать.`
    ],
	featureTop: {
		image: [
            "article-4__featureTop-1.jpeg",
            "article-4__featureTop-2.jpeg"
        ],
		isCenter: true,
		text: "",
		type: undefined
	},
	featureBottom: {
		image: [],
		text: "Меня удивил и поразил океан. Его воды полны невидимой жизни и силы. Иногда становилось не по себе от ощущения, что мы здесь с ним один на один.",
		type: typesFeatureText.bold
	}
},
{
	header: {
		image: "article-5__header.jpeg",
		context: {
			firstText: "",
			secondText: "ПЕШИЕ ПОХОДЫ",
			link: "",
			author: ""
		}
	},
	articleTextBody: [
        `После морского путешествия мы на пару дней взяли машины напрокат. Острова открылись нам с совершенно другой стороны, поразив своей красотой и влюбив в себя окончательно и бесповоротно.`,
        `Часть островов соединены платными туннелями или мостами. На некоторые можно попасть только на пароме или вертолёте. Автомобильные дороги в основном двухполосные, но встречаются и однополосные, редкие машины разъезжаются через специальные «карманы» на обочинах. Если откуда-то с дороги открывается прекрасный вид на фьорды, будьте уверены — фарерцы уже сделали там смотровую площадку.`
    ],
	featureTop: {
		image: [],
		text: "",
		type: undefined
	},
	featureBottom: {
		image: [],
		text: "Интересно, что все деревья, которые есть на островах, завезены с Аляски или Огненной Земли. Чаще всего их можно увидеть во дворах состоятельных жителей. А вот зелёная трава прекрасно растёт даже на тонком слое почвы. Фарерцы давным-давно приспособились использовать траву для сохранения тепла: крыши многих домов покрыты своеобразным зелёным газоном.",
		type: typesFeatureText.small
	}
},
{
	header: {
		image: "article-6__header.jpeg",
		context: {
			firstText: "",
			secondText: "",
			link: "",
			author: ""
		}
	},
	articleTextHeader: "ОЗЕРО СЁРВАГСВАТН",
	articleTextBody: [
        `Фотографии озера, возвышающегося над океаном, вошли, кажется, во все списки самых красивых мест на Земле.`,
        `Это озеро Сёрвагсватн или Лайтисватн (Sørvágsvatn / Leitisvatn). Находится оно на острове Воар в нескольких километрах от аэропорта.`,
        `Автомобильная дорога подходит к озеру только с одной стороны, так что до самых живописных видов придётся пройтись. Однако эта двухчасовая прогулка определённо того стоит. На южной оконечности острова вас ждут высоченные утёсы, завывающий ветер и водопад, летящий прямо в океан.`
    ],
	featureTop: {
		image: [],
		text: "",
		type: undefined
	},
	featureBottom: {
		image: [],
		text: "",
		type: undefined
	}
},
{
	header: {
		image: "article-7__header.jpeg",
		context: {
			firstText: "",
			secondText: "",
			link: "",
			author: ""
		}
	},
	articleTextHeader: "ОСТРОВ МИКИНЕС",
	articleTextBody: [
        `Посещение острова Микинес (Mykines) обязательно, если вы добрались до Фарерских островов. На машине туда не попасть, поэтому лучше запланировать поездку заранее: изучить расписание паромов и купить билет или забронировать полёт на вертолёте. Утром вас привезут на остров, вечером заберут обратно.`,
        `Для прогулки по Микинесу вам потребуется обувь с нескользящей подошвой: трава почти всегда мокрая от дождя или тумана. Наградой за тяжёлый подъём, который займёт не менее двух часов, будут единение с природой, туман, который можно потрогать, тупики, бараны и маяк на краю света.`,
        `Что ещё действительно стоит сделать — это захватить с собой пару термосов с чаем, чего-нибудь вкусного и устроить пикник на самой западной точке острова, откуда отрывается вид на бесконечную Атлантику. Несмотря на то, что Микинес считается туристическим местом, мы нашли только одно маленькое, но уютное кафе с вафлями и кофе, которые после пяти часов, проведённых на свежем воздухе, кажутся волшебными.`
    ],
	featureTop: {
		image: ["article-7__featureTop-1.jpeg"],
		text: "На Микинесе тупиков практически можно схватить за хвост. Тут их целые колонии. Поначалу не обращаешь внимания на небольшие углубления в холме, но, приглядевшись, обнаруживаешь, что это норы маленьких птичек, которые рычат оттуда, да-да, именно рычат, защищая свое жилище. Этот звук совершенно не ассоциируется с такими милыми созданиями.",
		type: typesFeatureText.small
	},
	featureBottom: {
		image: [],
		text: "",
		type: undefined
	}
},
{
	header: {
		image: "article-8__header.jpeg",
		context: {
			firstText: "",
			secondText: "",
			link: "",
			author: ""
		}
	},
	articleTextHeader: "САКСУН",
	articleTextBody: [
        `В местечке Саксун (Saksun) можно провести не один час, что мы и сделали в первый день после сдачи лодок, несмотря на проливной дождь. Надо сказать, что этот дождь преобразил пейзаж: водопады наполнились водой и дружно зашумели. Под этот гул мы спускались в долину реки, которая разделяет деревушку Саксун на две части. Внизу у нас перехватило дыхание. То самое состояние, когда понимаешь, насколько величественна природа.`,
        `Место, где мы стояли, оказалось дном приливно-отливного озера Поллур (Pollurin). Мы как раз застали отлив, но моё воображение сразу же нарисовало огромную волну возвращающейся воды. К счастью, приливы там небольшие, сантиметров 40. Мы шли всё дальше к океану, а сердце замирало от детского восторга.`,
        `Промокшие, но довольные, вернулись к машинам и поехали искать место, где можно хоть чем-то перекусить. Такое место мы нашли на заправке и съели там сначала по одной сосиске в тесте, а потом на всякий случай ещё по одной: уж слишком мала вероятность встретить кафе или ещё одну крупную заправку на пути.`
    ],
	featureTop: {
		image: [],
		text: "",
		type: undefined
	},
	featureBottom: {
		image: [],
		text: "",
		type: undefined
	}
},
{
	header: {
		image: "article-9__header.jpeg",
		context: {
			firstText: "",
			secondText: "МЕСТНЫЕ ЖИТЕЛИ И ПРОМЫСЕЛ",
			link: "",
			author: ""
		}
	},
	articleTextHeader: "",
	articleTextBody: [
        `На стенах в домах фарерцев висят старые чёрно-белые фотографии, на которых всё большое семейство в вязаных свитерах с национальными узорами стоит рядом с убитым дельфином.`,
        `Различные организации по защите животных пытаются противостоять жестокому убийству. Вокруг островов постоянно курсирует корабль Общества охраны морской фауны и пытается физически помешать забою дельфинов. Однако фарерцы в ответ на агрессивное поведение защитников животных приняли закон, позволяющий применять силу против подобных судов. До сих пор каждый фаререц, которому ещё не довелось участвовать в охоте на чёрных дельфинов (гринд), мечтает об этом. Экспорт китового жира и мяса запрещён, весь улов идет в пищу в зимнее время года.`,
        `На своём пути мы встречали много замечательных, добрых, искренних, порой немного наивных и всегда болеющих душой за чужое горе людей. Привезти переходник для подключения электричества, позвонить главному харбор-мастеру по островам и узнать, можно ли лодкам остаться на ночь, отдать последнюю бутылку охлаждающей жидкости из своей машины — всё это для любого фарерца является само собой разумеющимся.`,
        `Люди на островах никуда не спешат, не торопятся и не бегут. Молодежь весело болтает за столиком с чашечкой кофе, старики, сидя на пристани, витают мыслями где-то далеко и вспоминают былое. Все они наслаждаются этой неспешной жизнью.`,
        `Океан играет большую роль в жизни фарерцев. Он их кормит и дает им работу. Многие с детства и до самой смерти рыбачат, работают на лососевых фермах или рыбоперерабатывающих заводах. Студенты в основном работают в сфере услуг: в кафе и ресторанах, в магазинах, гостиницах и, конечно, на семейных фермах.`
    ],
	featureTop: {
		image: [
            "article-9__featureTop-1.jpeg"
        ],
		isCenter: true,
		text: "Чтобы понять этот обычай, нужно сюда приехать. Нужно посмотреть в глаза человеку, который рассказывает вам, что это традиция, а не развлечение. Это еда, способ выживания на земле, на которой ничего не растет, которая не может прокормить.",
		type: typesFeatureText.small
	},
	featureBottom: {
		image: [],
		text: "Фарерцы — удивительные, волшебные люди. Они не знают обмана, не понимают сарказма. Их дома, как и сердца, всегда открыты.",
		type: typesFeatureText.bold
	}
},
{
	header: {
		image: "article-10__header.jpeg",
		context: {
			firstText: "",
			secondText: "КОМАНДА «СИЛЫ ВЕТРА»",
			link: "",
			author: ""
		}
	},
	articleTextBody: [],
	featureTop: {
		image: [],
		text: "",
		type: undefined
	},
	featureBottom: {
		image: [],
		text: "",
		type: undefined
	}
}];
function checkType(type) {
	let cssClass = '';
	cssClass = type === typesFeatureText.small ? ' text-small' : '';
	cssClass += type === typesFeatureText.bold ? ' text-bold' : '';
	return cssClass;
}
function checkHideFeature(isHide) {
	return isHide ? ` hide-768` : '';
}
function renderTextBody(articleTextBody, topFeature, emptyFeature) {
	let html = ''
	let additionalTag = '';
	let centerKey
	if (topFeature.isCenter) {
		additionalTag = `<div class="article__feature article__feature-center article__feature-center-small">${getFeatureContent(topFeature)}</div>`;
		 centerKey = Math.ceil(articleTextBody.length / 2);
	}
	if (emptyFeature) {
		additionalTag += `<div class="article__feature article__feature-center article__feature-center-small"></div>`;
		centerKey = Math.ceil(articleTextBody.length / 2);
	}
	articleTextBody.forEach((item, key)=>{
		if (centerKey && centerKey === key) {
			html += additionalTag;
		}
		html += `<p>${item}</p>`
	})
	return html;
}
function getFeatureContent(feature) {
	let html = ''
	if (feature.image.length > 0) {
		feature.image.forEach((item) => {
			html += `<img class="article__feature-image"
						  srcset="article-images/${item}">`
		})
	}
	if (feature.text != '') {
		html += `<div class="article__feature-text">${feature.text}</div>`
	}
	return html;
}
function isEmptyFeature(feature) {
	return feature.image.length === 0 && feature.text == '';
}
function isEmptyContext(item) {
	return item.articleTextBody.length === 0 && isEmptyFeature(item.featureTop) && isEmptyFeature(item.featureBottom);
}
function isArticleTextHeader(articleTextHeader, isNegation) {
	let check = (articleTextHeader && articleTextHeader == '');
	check = isNegation === true ? !check : check;
	return check ? '' : 'hide';
}
function renderArticle(item, keyItem) {

    return `
		<div class="article">
            <div class="article__header ${item.articleTextHeader ? 'article__header-w100' : ''}">
				<div class="article__header-image  ${item.articleTextHeader ? 'article__header-w100' : ''} ${item.header.imageFixed ? 'image-fixed' : ''}" 
					 style="background-image:url('article-images/${item.header.image}')">
				</div>
				<div class="article-header__content">
					<div class="article-header__middle">
						<h1 class="article-header__content-firstText">${item.header.context.firstText}</h1>  
						<h3 class="article-header__content-secondText ${keyItem === 0 ? 'font-size__secondText-first' : ''}">${item.header.context.secondText}</h3>  
						<div class="article-header__content-footer">
							<div class="article-header__content-link">
								<a href="${item.header.context.link}">${item.header.context.link}</a>
							</div>  
							<div class="article-header__content-author">${item.header.context.author}</div>  
						</div>  
					</div>
				</div>
			</div>
            <div class="article__context ${isEmptyContext(item) ? 'hide' : ''}">
				<div class="article__text-header ${!item.articleTextHeader ? 'hide' : ''}">
					<h2>${item.articleTextHeader}</h2>
				</div>
                <div class="article__feature article__feature-top ${checkType(item.featureTop.type)} ${checkHideFeature(item.featureTop.isCenter)} ${item.articleTextHeader ? 'hide-768' : ''}">
					${getFeatureContent(item.featureTop)}
                </div>
                <div class="article__text ${keyItem === 0 ? 'upFirstLetter' : ''}">
					${renderTextBody(item.articleTextBody, item.featureTop, item.isEmptyFeature)}
				</div>
				<div class="article__feature article__feature-top article__feature-top-bottom ${checkType(item.featureTop.type)} ${checkHideFeature(item.featureTop.isCenter)} ${!item.articleTextHeader ? 'hide-768' : ''}">
					${getFeatureContent(item.featureTop)}
                </div>
                <div class="article__feature article__feature-bottom ${checkType(item.featureBottom.type), checkHideFeature(item.featureTop.isCenter)}">
					${getFeatureContent(item.featureBottom)}
                </div>
            </div>
        </div>
    `;
}

/// init app
document.addEventListener('DOMContentLoaded', () => {
     var itemsHtml = articles.map(renderArticle).join('');
    var eml = document.querySelector('.articles');
    eml.innerHTML = itemsHtml;
});