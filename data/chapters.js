const chapters = {
  chapter1: {
    title: 'Vueの基本',
    path:'chapter1',
    contents: [
      {
        title: '宣言的レンダリング',
        path: 'index1',
        summary: 'テンプレート構文を使って宣言的にデータをDOMに描画します。',
        html:
`<div class="sandbox">
  <h3> Message Here.</h3>
　<div>{{ message }}</div>
</div>`,
        code:
`export default {
  data() {
    return  {
      message: 'Hello Vuetrial!!'
    }
  }
}`
      },
      {
        title: '条件分岐による制御',
        path: 'index2',
        summary: 'v-if ディレクティブを使って要素の表示の有無を切り換えます。',
        html:
`<div class="sandbox">
  <h3 v-if="status === 1">{{ message1 }}</h3>
  <h3 v-else-if="status === 2">{{ message2 }}</h3>
  <h3 v-else>{{ message3 }}</h3>
</div>`,
        code:
`export default {
  data() {
    return  {
      status: 1,
      message1: 'Hello Vuetrial !!',
      message2: 'Good Morning Vuetrial !!',
      message3: 'Good Evening Vuetrial !!',
    }
  }
}`
      },
      {
        title: '条件分岐による制御(v-show)',
        path: 'index3',
        summary: 'v-show ディレクティブを使って要素の表示/非表示を切り換えます。v-ifディレクティブとの違いは、v-ifディレクティブはDOM要素を作成するかどうかを制御するのに対して、v-showディレクティブはDOM要素は作成し、表示するかしないかを制御します。',
        html:
`<div class="sandbox">
  <h3 v-show="status">{{ message }}</h3>
</div> `,
        code:
`export default {
  data() {
    return  {
      status: false,
      message: 'Hello Vuetrial !!',
    }
  }
}`
      },
      {
        title: 'ループ',
        path: 'index4',
        summary: 'v-for ディレクティブを使って配列要素をレンダリングします。',
        html:
`<div class="sandbox">
  <ul>
    <li v-for="fruit in fruits" :key="fruit.id">
      {{fruit.name}}
    </li>
  </ul>
</div>`,
        code:
`export default {
  data() {
    return  {
      fruits: [
        {id: 1, name: 'Apple'},
        {id: 2, name: 'Banana'},
        {id: 3, name: 'Melon'},
        {id: 4, name: 'Orange'},
        {id: 5, name: 'Kiwi'}
      ],
    }
  }
}`
      },
      {
        title: 'フォーム入力バインディング',
        path: 'index5',
        summary: 'v-model ディレクティブを使ってユーザーフォームの値をオブジェクトにバインドします。',
        html:
`<div class="sandbox">
  <form>
    <div class="form-group"> <label>値</label>
      <input type="text" class="form-control" v-model="value1" />
    </div>
  </form>
  <div class="form-group"> <label>入力された値</label>
    <div class="answer">{{value1}}</div>
  </div>
</div>`,
        code:
`export default {
   data() {
     return  {
       value1: 'First Text'
     }
   }
}`
      },
      {
        title: 'フォーム入力バインディング（計算機)',
        path: 'index6',
        summary: 'v-model ディレクティブを使ってユーザーフォームの値をオブジェクトにバインドします。',
        html:
`<div class="sandbox">
  <form>
      <div class="form-inline">
        <div class="form-group">
          <input type="number"
                  class="form-control"
                  v-model.number="value1"/>
        </div>
        <div class="plus"> + </div>
        <div class="form-group">
          <input type="number"
                  class="form-control"
                  v-model.number="value2"/>
        </div>
      </div>
      <div class="form-group mt-3">
        <label>答え</label>
        <div class="answer">{{ calc() }}</div>
      </div>
  </form>
</div>`,
        code:
`export default {
  data() {
    return  {
      value1: 0,
      value2: 0
    }
  },
  methods: {
    calc() {
      return this.value1 + this.value2;
    }
  },
}`
      },
      {
        title: 'イベントハンドリング',
        path: 'index7',
        summary: 'v-on ディレクティブを使ってイベントをハンドリングします。',
        html:
`<div class="sandbox">
  <label>クリック回数</label>
  <div class="answer">{{ count }}</div>
  <button type="button"
          v-on:click="countUp"
          class="btn btn-primary">
          カウント
  </button>
</div>`,
        code:
`export default {
  data() {
    return  {
      count: 0
    }
  },
  methods: {
    countUp() {
      this.count ++;
    }
  }
}`
      },
      {
        title: 'Vueコンポーネントのファイルの構成',
        path: 'index8',
        summary: '拡張子.vueのファイルは、単一ファイルコンポーネントのファイル(SFC:Single File Component)です。Viewを構成するHTMLテンプレート、JavaScript、CSSから構成されます。',
        html: `<template>
  <h1 class="title">{{ message }}</h1>
</template> `,
      code:
`export default {
  data() {
    return  {
      message: 'Hello VueTrial !!'
    }
  },
  methods: {
    funcA() {
      /* do something */
    }
  }
}`,
      css:
`<style lang="scss" scoped>
  h1 {
    &.title {
      color: red;
    }
  }
</style>
   `
      },
      {
        title: 'メソッドと算出プロパティ(1)',
        path: 'index9',
        summary: 'メソッド(methods)、算出プロパティ（computed)を定義できます。',
        html:
`<div class="sandbox">
  <form>
    <div class="form-inline">
      <div class="form-group">
        <input type="number"
                class="form-control"
                v-model.number="value1"/>
      </div>

      <div class="plus"> + </div>
      <div class="form-group">
        <input type="number"
                class="form-control"
                v-model.number="value2"/>
      </div>
    </div>

    <div class="form-group mt-3">
      <label>答え(methods)</label>
      <div class="answer">{{ calcMethod() }}</div>
    </div>

    <div class="form-group mt-3">
      <label>答え(computed)</label>
      <div class="answer">{{ calcComputed }}</div>
    </div>
  </form>
</div>`,
        code:
`export default {
  data() {
    return  {
      value1: 0,
      value2: 0,
    }
  },
  methods: {
    calcMethod() {
      return this.value1 + this.value2
    }
  },
  computed: {
    calcComputed() {
      return this.value1 + this.value2
    }
  }
}`
      },
      {
        title: 'メソッドと算出プロパティ(2)',
        path: 'index10',
        summary: 'メソッド(methods)、算出プロパティ（computed)を定義できます。',
        html: `
<div class="sandbox">
  <div class="mt-3">
    <label>現在時刻</label>
    <div class="answer">{{ currentTime }}</div>
  </div>

  <div class="mt-3">
    <label>10秒後は？(methods)</label>
    <div class="answer">{{ method10Seconds() }}</div>
  </div>

  <div class="mt-3">
    <label>10秒後は？(computed)</label>
    <div class="answer">{{ compute10Seconds }}</div>
  </div>
</div>`,
        code:
`export default {
  data() {
    return  {
      time1: null,
      time2: null,
      currentTime: null
    }
  },
  methods: {
    method10Seconds() {
      const dt = new Date()
      dt.setSeconds(dt.getSeconds() + 10)
      return dt;
    }
  },
  computed: {
    compute10Seconds() {
      const dt = new Date()
      dt.setSeconds(dt.getSeconds() + 10)
      return dt;
    }
  },
  mounted() {
    this.time1 = new Date()
    this.time2 = new Date()
    this.currentTime = new Date()

    setInterval(()=> {
      this.currentTime = new Date()
    },1000)
  }
}`
      },
      {
        title: 'ウォッチャー',
        path: 'index11',
        summary: 'データ、算出プロパティを監視して、値が変化したら処理を行います。',
        html:
`<div class="sandbox">
  <label>クリック回数</label>
  <div class="answer">{{ count }}</div>
  <button type="button"
          v-on:click="countUp"
          class="btn btn-primary">カウント
  </button>
</div>`,
        code:
`export default {
  data() {
    return  {
      count: 1
    }
  },
  methods: {
    countUp() {
      this.count ++;
    }
  },
  watch: {
    count() {
      if (this.count % 10 === 0 ) {
        /* ajaxでデータを送信 */
        console.log("データ送信 カウント: " + this.count) // 仮
      }
    }
  }
}`
      },
      {
        title: 'Vueのライフサイクル',
        path: 'index12',
        summary: 'データ、算出プロパティを監視して、値が変化したら処理を行います。',
        html:
`<div class="sandbox">
  {{message}}
</div>
`,
        code:
`export default {
  data() {
    return  {
      messages: []
    }
  },
  computed: {
    message () {
      return this.messages.join(' -> ')
    }
  },
  beforeCreate() {
    // 呼ぶとエラー
    //this.messages.push('beforeCreate')
  },
  created() {
    this.messages.push('created')
  },
  beforeMount() {
    this.messages.push('beforeMount')
  },
  mounted() {
    this.messages.push('mounted')
  },
  beforeUpdate() {
    console.log(this.message + ' -> ' + 'beforeUpdate')

    // 呼ぶと無限ループ
    // this.messages.push('beforeUpdate')
  },
  updated() {
    console.log(this.message + ' -> ' + 'updated')

    // 呼ぶと無限ループ
    // this.messages.push('updated')
  },
  beforeDestroy() {
    this.messages.push('beforeDestroy')
  },
  destroyed() {
    this.messages.push('destroyed')
  }
}`
      },
      {
        title: 'Vue コンポーネント',
        path: 'index13',
        summary: 'Vueをコンポーネント化して再利用可能にします。',
        html:
`<div class="row">
  <animal-component :object="animal" class="col-sm-2"
          v-for="animal in animals" :key="animal.key"
          v-on:bark="message = $event"/>
  </div>
  <div class="message">{{ message }}</div>
<div>`,
        code: `import animalComponent from '~/components/animal-component';

export default {
  components: { animalComponent },
  data() {
    return  {
      message: '',
      animals : [
        { id: 1, name: 'ブタ', file: 'buta.png', bark: 'ブー' },
        { id: 2, name: 'ヒツジ', file: 'hitsuji.png', bark: 'メー' },
        { id: 3, name: 'イヌ🐶', file: 'inu.png', bark: 'ワンワン' },
        { id: 4, name: 'クマ', file: 'kuma.png', bark: 'クマッ' },
        { id: 5, name: 'ライオン', file: 'lion.png', bark: 'ガオー' },
        { id: 6, name: 'ネコ🐱', file: 'neko.png', bark: 'ニャー' },
        { id: 7, name: 'ウマ', file: 'uma.png', bark: 'ヒヒーン' },
        { id: 8, name: 'ゾウ', file: 'zou.png', bark: 'パオー' },
        { id: 9, name: 'トラ', file: 'tora.png', bark: 'ガオー' },
        { id: 10, name: 'パンダ', file: 'panda.png', bark: 'フゥルフゥル～' },
        { id: 11, name: 'ウサギ', file: 'usagi.png', bark: '・・・' },
        { id: 12, name: 'サル', file: 'saru.png', bark: 'ウッキー' },
      ],
    }
  }
}`,
        componentHtml: `<template>
  <div>
    <img :src="imagePath" :alt="object.name" v-on:click="bark"/>
    <label>{{object.name}}</label>
  </div>
</template>`,
        componentCode: `export default {
  name: 'animal',
  props: [ 'object' ],
  computed: {
    imagePath () {
      return '/images/animal/' + this.object.file
    }
  },
  methods: {
    bark() {
      this.$emit('bark', this.object.bark)
    }
  }
}`
      }
    ],
  },
  chapter2: {
    title: 'NuxtJsの基本',
    path:'chapter2',
    contents: [
      {
        title: 'デプロイターゲット',
        path: 'index1',
        html:
`
`,
        code:
`export default {
  ssr: false,
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'VueTrial',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  :
  :
  :`
      },
      {
        title: 'ディクトリー構造とルーティング',
        path: 'index2',
        html:
`<div class="sandbox">
  <h1>{{ currentPhoto.title }}</h1>
  <img :src="currentPhotoPath" alt="photo" class="img-thumbnail rounded mx-auto d-block"/>
  <div class="col-sm-12 text-center">
    <div class="caption">
      {{ currentPhoto.caption }}
    </div>
    <div class="buttons">
      <b-button :to="'/photos/' + (id - 1)" :disabled="id - 1 === 0" variant="primary">
        <fa icon="angle-double-left"/>
      </b-button>
      <b-button :to="'/photos/' + (id + 1)" :disabled="id + 1 > photos.length" variant="primary">
        <fa icon="angle-double-right"/>
      </b-button>
    </div>
  </div>
</div>`,
        code:
`export default {
  name: "id.vue",
  data () {
    return {
      id: parseInt(this.$route.params.id),
      photos: [
        { id:  1, title: '写真１', caption: 'ジャンプする犬', file: '01.jpg' },
        { id:  2, title: '写真２', caption: 'カメラ女子', file: '02.jpg' },
        { id:  3, title: '写真３', caption: '港の夜景', file: '03.jpg' },
        { id:  4, title: '写真４', caption: '山頂へと続く道', file: '04.jpg' },
        { id:  5, title: '写真５', caption: 'お洒落なバーで', file: '05.jpg' },
        { id:  6, title: '写真６', caption: '雰囲気のあるカフェ', file: '06.jpg' },
        { id:  7, title: '写真７', caption: 'ちょっと不機嫌な猫', file: '07.jpg' },
        { id:  8, title: '写真８', caption: 'コロッケ大好き', file: '08.jpg' },
        { id:  9, title: '写真９', caption: '日本酒女子', file: '09.jpg' },
        { id: 10, title: '写真10', caption: '青い空と海', file: '10.jpg' }
      ]
    }
  },
  computed: {
    currentPhoto() {
      return this.photos.filter( (article) => { return article.id === this.id } )[0]
    },
    currentPhotoPath() {
      return '/images/' + this.currentPhoto.file;
    }
  }
}
`
      },
      {
        title: 'BootStrapVueの使用',
        path: 'index3',
        summary: 'Vueをコンポーネント化して再利用可能にします。',
        html: `<b-col sm="12">
  <b-card header="入力フォーム">
    <b-card-body>
      <b-form v-on:submit="onSubmit" v-on:submit="onSubmit" action="/" method="post">
        <b-form-group
          id="input-group-1"
          label="メールアドレス"
          label-for="email"
          description="ここはメールアドレスの入力欄です。">

          <b-form-input
            id="email"
            v-model="form.email"
            type="email"
            placeholder="メールアドレスを入力して下さい。"
            required
          />
        </b-form-group>

        <b-form-group id="input-group-2" label="好きな食べ物" label-for="food">
          <b-form-select
            id="food"
            v-model="form.food"
            :options="foods"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group id="input-group-3" label="好きな色">
          <b-form-checkbox-group
            v-model="form.color"
            id="color">
            <b-form-checkbox v-for="color in colors" :value="color.value">
              <span class="color" :style="{backgroundColor: color.value}"></span>{{ color.text }}
            </b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>

        <b-button type="submit" variant="primary">送信</b-button>
      </b-form>
    </b-card-body>
  </b-card>
</b-col>`,
        code: `export default {
  data() {
    return  {
      message: '',
      form : {
        email: '',
        food: null,
        color: []
      },
      foods: [{ text: 'ひとつ選んで下さい', value: null }, 'カツ丼', 'オムライス', 'ざるそば', 'ラーメン'],
      colors: [
        { id: 1, value: 'blue', text: '青'},
        { id: 2, value: 'red', text: '赤'},
        { id: 3, value: 'yellow', text: '黄色'},
        { id: 4, value: 'green', text: '緑'},
        { id: 5, value: 'purple', text: '紫'},
        { id: 6, value: 'orange', text: 'オレンジ'},
      ]
    }
  },
  methods: {
    onSubmit() {
      console.log("submit");
    }
  }
}`
      },
      {
        title: 'vue-fontawesomeの使用',
        path: 'index4',
        summary: 'vue-fontawesomeを使用して、FontAwesome 5 のWebフォントをVueから使えるようにします。',
        html: `<div class="icons">
  <fa :icon="icon" v-for="icon in icons" :style="{ color: randomColor() }"/>
</div>`,
        code: `export default {
  data() {
    return  {
      icons: [  'home', 'file', 'bicycle', 'box-open', 'car', 'cat', 'dove',
                'feather', 'football-ball', 'grin-beam-sweat', 'mountain', 'camera-retro'
      ],
      colors: [ '#82c91e', '#f783ac', '#4c6ef5', '#15aabf','#be4bdb', '#fd7e14', '#183153', '#ff0000' ]
    }
  },
  methods: {
    randomColor() {
      return this.colors [ Math.floor(Math.random() * this.colors.length) ];
    }
   }
 }`,
      css: `<style lang="scss" scoped>
  .icons {
    padding: 30px 15px;
    margin: 30px 0;
    border: 1px solid #ccc;
    [data-icon] {
      font-size: 5rem;
      padding: 5px;
    }
  }
</style>`
}
    ]
  },
  chapter3: {
    title: '演習',
    path:'chapter3',
    contents: [
      {
        title: 'APIを使った簡単なWebページ',
        path: 'index1',
        code:
`export default {
  data() {
    return {
      url: 'https://d1zo7z5hf7zka2.cloudfront.net/croquette.json',
      shops: []
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    async getData() {
       const data = await this.$axios.$get(this.url)
       this.shops = data.shops;
    }
  }
}`

      },
    ]
  }
}
export default chapters;
