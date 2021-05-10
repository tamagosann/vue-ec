import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginUser: {
      userId: 'aaa',
      cart: [
        {
          userId: 'aaa',
          itemId: 1,
          status: 0,
        },
        {
          userId: 'aaa',
          itemId: 2,
          status: 0,
        },
        {
          userId: 'aaa',
          itemId: 3,
          status: 0,
        },
      ],
      order: [
        {
          userId: 'aaa',
          itemId: 4,
          status: 2,
          orderDate: '4月3日',
          destinationName: '田中さん',
          destinationZipcode: '333-3333',
          destinationAddress: '東京都',
          destinationTel: '03-3333-3333',
          destinationTime: '4月10日',
          creditcardNo: '1234-5678-9000' 
        },
      ],
    },
    users: [
      {
        userId: 'aaa',
        cart: [
          {
            userId: 'aaa',
            itemId: 1,
            status: 0,
          },
          {
            userId: 'aaa',
            itemId: 2,
            status: 0,
          },
          {
            userId: 'aaa',
            itemId: 3,
            status: 0,
          },
        ],
        order: [
          {
            userId: 'aaa',
            itemId: 4,
            status: 2,
            orderDate: '4月3日',
            destinationName: '田中さん',
            destinationZipcode: '333-3333',
            destinationAddress: '東京都',
            destinationTel: '03-3333-3333',
            destinationTime: '4月10日',
            creditcardNo: '1234-5678-9000' 
          },
        ],
      },
    ],
    items: [
      {
        id: 1,
        name: 'Gorgeous4サンド',
        description: '人気の定番具材「ハム」と「チキン」をセットにした食べごたえ抜群のサンドイッチです。',
        price: 480,
        path: '../assets/images/1.png'
      },
      {
        id: 2,
        name: 'エスプレッソフラペチーノ',
        description: 'ひと口目に感じるエスプレッソは「リストレット」という方法で抽出した力強い香りと優しい苦味を、ふた口目は全体を混ぜて、こだわりのクリームから来るアフォガートのような味わいをお楽しみください。リフレッシュしたい時や、ほっとひと息つきたい時にも、何度でも飲みたくなるフラペチーノ®です。',
        price: 600,
        path: '../assets/images/2.png'
      },
      {
        id: 3,
        name: 'チョコクッキー',
        description: 'ソフトな食感のクッキー生地には、小麦の香ばしさが感じられるよう全粒粉を入れ、砂糖の一部にはブラウンシュガーを使い、コクのある甘さをプラスしています。風味豊かなスターバックスオリジナルのチョコレートチャンクがごろごろ入っていて、どこを食べてもチョコレートの味わいを存分に楽しめます。ショートサイズのマグカップの上に乗せられるくらいのサイズは、コーヒーと一緒に楽しむのにもぴったりです。',
        price: 480,
        path: '../assets/images/3.png'
      },
      {
        id: 4,
        name: 'Gorgeous4サンド',
        description: '人気の定番具材「ハム」と「チキン」をセットにした食べごたえ抜群のサンドイッチです。',
        price: 480,
        path: '../assets/images/1.png'
      },
      {
        id: 5,
        name: 'エスプレッソフラペチーノ',
        description: 'ひと口目に感じるエスプレッソは「リストレット」という方法で抽出した力強い香りと優しい苦味を、ふた口目は全体を混ぜて、こだわりのクリームから来るアフォガートのような味わいをお楽しみください。リフレッシュしたい時や、ほっとひと息つきたい時にも、何度でも飲みたくなるフラペチーノ®です。',
        price: 600,
        path: '../assets/images/2.png'
      },
      {
        id: 6,
        name: 'チョコクッキー',
        description: 'ソフトな食感のクッキー生地には、小麦の香ばしさが感じられるよう全粒粉を入れ、砂糖の一部にはブラウンシュガーを使い、コクのある甘さをプラスしています。風味豊かなスターバックスオリジナルのチョコレートチャンクがごろごろ入っていて、どこを食べてもチョコレートの味わいを存分に楽しめます。ショートサイズのマグカップの上に乗せられるくらいのサイズは、コーヒーと一緒に楽しむのにもぴったりです',
        price: 480,
        path: '../assets/images/3.png'
      },
      {
        id: 7,
        name: 'Gorgeous4サンド',
        description: '人気の定番具材「ハム」と「チキン」をセットにした食べごたえ抜群のサンドイッチです。',
        price: 480,
        path: '../assets/images/1.png'
      },
      {
        id: 8,
        name: 'エスプレッソフラペチーノ',
        description: 'ひと口目に感じるエスプレッソは「リストレット」という方法で抽出した力強い香りと優しい苦味を、ふた口目は全体を混ぜて、こだわりのクリームから来るアフォガートのような味わいをお楽しみください。リフレッシュしたい時や、ほっとひと息つきたい時にも、何度でも飲みたくなるフラペチーノ®です。',
        price: 600,
        path: '../assets/images/2.png'
      },
      {
        id: 9,
        name: 'チョコクッキー',
        description: 'ソフトな食感のクッキー生地には、小麦の香ばしさが感じられるよう全粒粉を入れ、砂糖の一部にはブラウンシュガーを使い、コクのある甘さをプラスしています。風味豊かなスターバックスオリジナルのチョコレートチャンクがごろごろ入っていて、どこを食べてもチョコレートの味わいを存分に楽しめます。ショートサイズのマグカップの上に乗せられるくらいのサイズは、コーヒーと一緒に楽しむのにもぴったりです',
        price: 480,
        path: '../assets/images/3.png'
      },
    ],
  },
  getters: {
    items: state => state.items,
    loginUser: state => state.loginUser,
  },
  mutations: {
  },
  actions: {
    itemSearch() {
      Vue.axios.get('https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706',
      {
        params: {
          // applicationId: '1028235862602045754',
          // keyword: keyWord,
          // minPrice: minPrice,
          // sort: '+itemPrice',
        }
      })
    .then
    }
  },
  modules: {
  }
})
