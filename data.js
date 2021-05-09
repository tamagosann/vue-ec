

const data = {

    // usersとproductsをfirebaseで管理する。

    users: [
        {
            userId: 'hogehogehoge', // firebaseが作るID
            username: 'takahashi',
            password: '123456',
            address: '東京都',
            Items: [ // itemsというサブコレクションを作る。
                {            
                    productId: 'hogahogahoga', // firebaseが作るID
                    img: 'src',
                    name: '良い感じのシャツ',
                    detail: 'この記生地はイタリアで作られた最高級品を〜〜',
                    size: {size: 's', quantity: 1},
                    status: 'a' //　下を参照
                },
                {            
                    productId: 'hogahogahoga', // firebaseが作るID
                    name: '青のズボン',
                    detail: 'フランスの職人が作ってます',
                    size: {size: 's', quantity: 1},
                    status: 'b' //　下を参照
                },
            ],
        },
        {
            userId: 'ababababababab', // firebaseが作るID
            username: 'aizawa',
            password: 'abcdef',
            Items: [　// itemsというサブコレクションを作る。
                {}
            ],
        },
    ],

    loginUser: {
        userId: 'hogehogehoge', // firebaseが作るID
        username: 'takahashi',
        password: '123456',
        Items: [
            {            
                productId: 'hogahogahoga', // firebaseが作るID
                img: 'src',
                name: '良い感じのシャツ',
                detail: 'この記生地はイタリアで作られた最高級品を〜〜',
                size: {size: 's', quantity: 1},
                status: 'a' //　下を参照
            },
            {            
                productId: 'hogahogahoga', // firebaseが作るID
                name: '青のズボン',
                detail: 'フランスの職人が作ってます',
                size: {size: 's', quantity: 1},
                status: 'b' //　下を参照
            },
        ],
    },

    products: [
        {
            productId: 'hogahogahoga', // firebaseが作るID
            img: 'src',
            name: '良い感じのシャツ',
            detail: 'この記生地はイタリアで作られた最高級品を〜〜',
            size: [　//サイズ と　量　なくても良いかも
                {size: 's', quantity: 3},
                {size: 'm', quantity: 7},
                {size: 'l', quantity: 12},
            ] 
        },
        {
            productId: 'hogahogahoga', // firebaseが作るID
            name: '青のズボン',
            detail: 'フランスの職人が作ってます',
            size: [　//サイズ と　量　なくても良いかも
                {size: 's', quantity: 3},
                {size: 'm', quantity: 5},
                {size: 'l', quantity: 7},
            ],
        },
        {
            productId: 'hogahogahoga', // firebaseが作るID
            name: '白い靴',
            detail: 'メイドインジャパン最高ー！',
            size: [　//サイズ と　量　なくても良いかも
                {size: 26, quantity: 3},
                {size: 27, quantity: 2},
                {size: 28, quantity: 1},
            ],
        },
    ],
}

const checkItemStatus = {
    a: 'favorite',
    b: 'InCart',
    c: 'hasBought'
}
//　カートやお気に入りされた商品は