
import { defineStore } from 'pinia'

export const productsStore = defineStore('products',{
  state:()=>({
    products:[],
      cart:[]
  }),
  actions: {
    fetchProductsfromDB(){

      this.products = [
        {

          id: 1,
          name: 'Как тебе такое, Илон Маск?',
          description: 'Футуристические изобретения Илона Маска вызвали серию ответных постов про достижения российских умельцев. Среди них оказалось много мемов смешных. Как правило, это были отечественные лайфхаки в стиле «Очумелые ручки». Но позже этим мемом стали сопровождать любые странные или нелепые новости.',
          price: 345,
          thumbnail:"src/image/n55p6xnb49en0ptymobxgomvcjbjkp0a.jpg"
        },
        {
          id: 2,
          name:'Мармеладзе',
          description: 'Летом 2020 года в русском Твиттере устроили флэшмоб. Первой жертвой стал певец Меладзе, которого превратили сначала в Мармеладзе, потом Шоколадзе, Лимонадзе и Рафинадзе. Мемные фото поп-звезд с едой так увлекли пользователей, что Агутина следом переименовали в Агушина, Лепс стал Желепс, Киркоров - Килькоров, а Земфира - Зефира. Не ко всем артистам «пищевые» прозвища подошли, но вот Валерия Меладзе многие до сих пор теперь называют только Мармеладзе и никак иначе.',
          price: 179,
          thumbnail:"src/image/1ebhd5vi2y4m98ga63risaqfqipch8ww.png"
        },
        {
          id: 5,
          name:'Я в своем познании преисполнился',
          description: 'Мем родился из ролика, в котором герой вполне простонародного вида идет по проселочной дороге и философствует сам с собой о смысле жизни. Он старается выбирать слова помудреней и при этом перемежает их с обычным матом: «Я в своем познании настолько преисполнился, что как будто бы уже сто триллионов миллиардов лет проживаю на триллионах и триллионах таких же планет, понимаешь?»\n' +
              'Аудитории от монолога дачного философа было смешно, мемчики из цитат завалили сеть. Отсылки к нему до сих пор остаются частью Рунета.',
          price: 123,
          thumbnail:"src/image/c45l7ugugeaz9syhxraziiyil24ce17w.png"

            },
        {
          id:4,
          name:'Котлеты с пюрешкой',
          description: 'На диалог из сериала «Улицы разбитых фонарей» между милиционером и дворником долго никто не обращал внимания. Но в 2016 году автор миксов Enjoykin выложил свой ролик «Котлетки с пюрешкой», который тут же вошел в список популярных мемов, из него начали делать новые ремиксы и пародии, в которых противостояние пюрешек и макарошек достигает масштабов нового Армагеддона.',
          price: 133,
          thumbnail:"src/image/bol0v99htwlv19bstujx2dox1bob668i.png.jpeg"

        },
        {
          id: 3,
          name: 'Волк в цирке не выступает',
          description: 'Уж лучше мемы, чем суровая пацанская романтика с ее брутальными татуировками и глубокомысленными цитатами. Именно она породила целую серию постироничных цитат. Считается, что запустили их авторы одного из ВК-пабликов в 2019 году. На картинке изображается традиционный волк, символизирующий крутого персонажа и под ним афоризм, который выглядит почти как типичный полукриминальный слоган, но всегда имеет второе, пародийное значение. Мемы с надписями из этой серии: «Волк слабее льва и тигра, но в цирке волк не выступает» и «Неважно, кто напротив. Важно, кто рядом». Очень часто картинка и фраза в таких мемах вполне серьезны по отдельности, но сведенные вместе дают комический эффект.',
          price: 345,
          thumbnail:"src/image/xf5m9nso67j61jk0j7qxn6cksak1d08o.jpg"

        },
        {
          id: 6,
          name:'Это фиаско, братан',
          description: 'В 2017 году на YouTube зрители увидели историю о том, как собака падает в реку под флегматичный комментарий хозяина: «Это фиаско, братан». Видео с коронной фразой тут же стало вирусным. С тех пор при любой неудаче сразу вспоминают и мем, и собаку, и ее фиско.',
          price:334,
          thumbnail:"src/image/52r6ob0k7hnxlf0qwmrjhscz4mgcwanz.png"

        },
        {
          id: 7,
          name:'Демотиваторы',
          description: 'Демотиваторы появились как ответ на мотивирующие плакаты, которые во множестве висели в американских офисах. Всю банальность и пошлость этих лозунгов превратили в настоящий цирк и клоунаду. ',
          price:34,
          thumbnail:"src/image/iko56vw4pj6obh5cxme53urjt5wh9p1i.jpg"
        },
        {
          id: 8,
          name:'Где пруфы, Билли?',
          description: 'Лучше мемов могут быть только мультики. Советский мультфильм «Остров сокровищ» — популярный источник для творчества, несмотря на свой возраст. Произнесите любую фразу голосом Флинта или Билли Бонса — и она обретет новый смысл. Да-да, именно так в фразе «Где карта, Билли? Нам нужна карта!» заменили карту на пруфы и она стала современным мемом. Вообще эта фраза универсальна, с ней можно придумать шутки для любого случая, даже мемы с днем рождения.',
          price:345,
          thumbnail:"src/image/8awyaudedwfs00wea3ugkv4wr2fkh38t.jpg"
        },
        {
          id: 9,
          name:'Это обман, чтоб набрать классы',
          description: 'Мем родился из комментария к посту в «Одноклассниках». Классы — это тоже самое, что и лайки. Если услышите этот мем, значит кто-то вам намекает, что вы стремитесь к хайпу и дешевой популярности.',
          price:124454,
          thumbnail:"src/image/1uhndkklpz4lrs6s3o2hu9ys9152txlg.jpg"
        },
        {
          id: 10,
          name:'Ну умер и умер',
          description: 'Мем появился в 2019 году из циничного высказывания Артемия Лебедева о смерти известного человека. Обозначает равнодушную реакцию на какое-нибудь важное или даже трагическое событие.',
          price:123,
          thumbnail:"src/image/jiqcqmazjhfzsmm6k2vlmbug94z15tkq.jpg"
        }
      ]
    },
    addToCart(product) {
      this.cart.push(product)
    },
    removeFromCart(id){
      this.cart = this.cart.filter((item => item.id !== id))

    },


  }

})