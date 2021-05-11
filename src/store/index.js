import Vue from 'vue'
import Vuex from 'vuex';
import firebase from 'firebase'

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
    uid: state => state.loginUser.userId
  },
  mutations: {
    itemSearch(state, items) {
      state.items = items;
      console.log(state.items)
    },
    setLoginUser(state, user) {
      state.loginUser = user;
    },
    deleteLoginUser(state) {
      state.loginUser = null;
    },
  },
  actions: {
    itemSearch(state, keyword) {
      const keyWord = keyword;
      Vue.axios.get('https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706',
      {
        params: {
          applicationId: '1032207771907305208',
          keyword: keyWord,
          minPrice: 1000,
          sort: '+reviewCount',
          hits: 20,
        }
      })
    .then(res => {
      console.log(res)
      const items = [];
      res.data.Items.forEach(itemEach => {
        const item = {
          id: itemEach.Item.itemCode,
          name: itemEach.Item.itemName,
          description: itemEach.Item.catchcopy,
          price: itemEach.Item.itemPrice,
          path: itemEach.Item.mediumImageUrls[0].imageUrl,
        }
        items.push(item);
      })
      console.log(items);
      state.commit('itemSearch', items)
    })
    },
    setLoginUser(state, user) {
      state.commit('setLoginUser', user)
    },
    login() {
      const google_auth_provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(google_auth_provider);
    },
    logout() {
      firebase.auth().signOut();
    },
    deleteLoginUser(state) {
      state.commit('deleteLoginUser');
    },
    fetchUserInfo(state) {
      const user = {
        cart: [],
        history: [],
      };
      firebase.firestore().collection(`users/${state.getters.uid}/cart`).get().then(snapshot => {
        snapshot.forEach(doc => user.cart.push({id: doc.id, cart: doc.data()}))
      });
      firebase.firestore().collection(`users/${state.getters.uid}/history`).get().then(snapshot => {
        snapshot.forEach(doc => user.history.push({id: doc.id, cart: doc.data()}))
      });

      state.commit('setUserInfo', user)
    }
  },
  modules: {
  }
})
