const chapters = {
  chapter1: {
    title: '1. Vueの基本',
    path:'chapter1',
    contents: [
      {
        title: '1.1 宣言的レンダリング',
        path: 'index1',
        summary: 'テンプレート構文を使って宣言的にデータをDOMに描画します。',
        html: `
  <div class="col-sm-12">
    <div class="sandbox">
       <h3> Message Here.</h3>
       <div>{{ message }}</div>
    </div>
  </div>    `,
        code: `
  export default {
    data() {
      return  {
        message: 'Hello Vuetrial!!'
      }
    }
  }
  `
      },
      {
        title: '1.2 条件分岐による制御',
        path: 'index2',
        summary: 'v-if ディレクティブを使って要素の表示の有無を切り換えます。',
        html: `
  <div class="col-sm-12">
    <div class="sandbox">
        <h3 v-if="status == 1">{{ message1 }}</h3>
        <h3 v-else-if="status == 2">{{ message2 }}</h3>
        <h3 v-else="status == 3">{{ message3 }}</h3>
    </div>
  </div>    `,
        code: `
  export default {
    data() {
      return  {
        status: 1,
        message1: 'Hello Vuetrial !!',
        message2: 'Good Morning Vuetrial !!',
        message3: 'Good Evening Vuetrial !!',
      }
    }
  }
  `
      },
      {
        title: '1.3 条件分岐による制御(v-show)',
        path: 'index3',
        summary: 'v-show ディレクティブを使って要素の表示/非表示を切り換えます。v-ifディレクティブとの違いは、v-ifディレクティブはDOM要素を作成するかどうかを制御するのに対して、v-showディレクティブはDOM要素は作成し、表示するかしないかを制御します。',
        html: `
  <div class="col-sm-12">
    <div class="sandbox">
        <h3 v-show="status">{{ message }}</h3>
    </div>
  </div>    `,
        code: `
  export default {
    data() {
      return  {
        status: false,
        message: 'Hello Vuetrial !!',
      }
    }
  }
  `
      },
      {
        title: '1.4 ループ',
        path: 'index4',
        summary: 'v-for ディレクティブを使って配列要素をレンダリングします。',
        html: `
  <div class="col-sm-12">
    <div class="sandbox">
      <ul>
        <li v-for="fruit in fruits" :key="fruit.id">
          {{fruit.name}}
         </li>
      </ul>
    </div>  
  </div>    `,
        code: `
  export default {
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
  }
  `
      }
    ],
  },
  chapter2: {
    title: 'Nuxt.Jsの基本',
    path:'chapter2',
    contents: [
      { title: 'やってみよう', path: 'index1' },
    ]
  },
  chapter3: {
    title: '演習',
    path:'chapter3',
    contents: [
      { title: '三島コロッケアプリ', path: 'index1' },
    ]
  }
}
export default chapters;
