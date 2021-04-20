const chapters = {
  chapter1: {
    title: '1. Vueの基本',
    path:'chapter1',
    contents: [
      {
        title: '1.1 宣言的レンダリング',
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
        title: '1.2 条件分岐による制御',
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
        title: '1.3 条件分岐による制御(v-show)',
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
        title: '1.4 ループ',
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
        title: '1.5 フォーム入力バインディング',
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
        title: '1.6 フォーム入力バインディング（計算機)',
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
        title: '1.7 イベントハンドリング',
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
        title: '1.8 Vueコンポーネントのファイルの構成',
        path: 'index8',
        summary: '拡張子.vueのファイルは、単一ファイルコンポーネントのファイル(SFC:Single File Component)です。Viewを構成するHTMLテンプレート、JavaScript、CSSから構成されます。',
        html: 
`<template>
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
        title: '1.9 メソッドと算出プロパティ(1)',
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
        title: '1.10 メソッドと算出プロパティ(2)',
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
        title: '1.11 ウォッチャー',
        path: 'index11',
        summary: 'データ、算出プロパティを監視して、値が変化したら処理を行います。',
        html: 
`<div class="col-sm-12">
  <div class="sandbox">
    <label>クリック回数</label>
    <div class="answer">{{ count }}</div>
    <button type="button"
            v-on:click="countUp"
            class="btn btn-primary">カウント
    </button>
  </div>
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
