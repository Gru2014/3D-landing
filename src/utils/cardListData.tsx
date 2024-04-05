interface FeatureCardType {
    id: number;
    icon: string;
    title1: string;
    title2: string;
    description1: string;
    description2: string;
    percent: number;
}

export const CurrentFeatureCardList: FeatureCardType[] = [
    {
        icon: 'assets/icons/finder.svg',
        title1: 'Wallet Finder',
        title2: 'Level 1',
        description1: 'Search Feature that will find wallets based off Balance Change',
        description2: '',
        percent: 100
    },
    {
        icon: 'assets/icons/wallet.png',
        title1: 'Wallet',
        title2: 'Portfolio',
        description1: 'Feature that will allow very specific notification alerts to be set',
        description2: '',
        percent: 100
    },
    {
        icon: 'assets/icons/history.png',
        title1: 'Transaction History',
        title2: '',
        description1: 'Feature that will show all wallet transaction history',
        description2: '',
        percent: 100
    },

    {
        icon: 'assets/icons/completed.svg',
        title1: 'Completed Trades',
        title2: '',
        description1: 'Indicator that will show a wallet’s completed trade history',
        description2: '',
        percent: 100
    },


    {
        icon: 'assets/icons/new.png',
        title1: 'New Coin Indicator',
        title2: '',
        description1: 'Indicator that will show if a wallet has bought a coin that is newly released',
        description2: '',
        percent: 100
    },
    {
        icon: 'assets/icons/watchlists.svg',
        title1: 'Wallet Watchlists',
        title2: '',
        description1: 'Add wallets to a watchlist for continual monitoring and research',
        description2: '',
        percent: 100
    },
].map((d, index) => ({ ...d, id: index }))

export const UpcomingFeatureCardList: FeatureCardType[] = [
    {
        icon: 'assets/icons/graph.png',
        title1: 'Profit/',
        title2: 'Loss Graph',
        description1: 'Feature that will allow you to see Realized, Unrealized Gains & ROI that a wallet has made',
        description2: '',
        percent: 25
    },
    {
        icon: 'assets/icons/finder.svg',
        title1: 'Wallet Finder',
        title2: 'Level 2',
        description1: 'Update Search Feature to find wallets based off PnL/ROI',
        description2: '',
        percent: 0
    },
    {
        icon: 'assets/icons/linked.svg',
        title1: 'Linked Wallets',
        title2: '',
        description1: 'Map that will show all wallets that are linked with the selected wallet',
        description2: '',
        percent: 25
    },
    {
        icon: 'assets/icons/question.svg',
        title1: 'Mystery Feature',
        title2: '1',
        description1: 'This feature will be revealed when feature is completed',
        description2: '',
        percent: 25
    },
    {
        icon: 'assets/icons/question.svg',
        title1: 'Mystery Feature',
        title2: '1',
        description1: 'This feature will be revealed when feature is completed',
        description2: '',
        percent: 25
    },
    {
        icon: 'assets/icons/question.svg',
        title1: 'Mystery Feature',
        title2: '3',
        description1: 'This feature will be revealed when feature is completed',
        description2: '',
        percent: 25
    },
    {
        icon: 'assets/icons/question.svg',
        title1: 'Mystery Feature',
        title2: '4',
        description1: 'This feature will be revealed when feature is completed',
        description2: '',
        percent: 25
    },
    {
        icon: 'assets/icons/question.svg',
        title1: 'Mystery Feature',
        title2: '5',
        description1: 'This feature will be revealed when feature is completed',
        description2: '',
        percent: 25
    },
    {
        icon: 'assets/icons/sniper.png',
        title1: 'Presale / Sniper',
        title2: 'Indicator',
        description1: 'An indicator that will show you whether the coin was purchased in a presale or whether it was sniped post-launch',
        description2: '',
        percent: 25
    },
    {
        icon: 'assets/icons/question.svg',
        title1: 'Mystery Feature',
        title2: '6',
        description1: 'This feature will be revealed when feature is completed',
        description2: '',
        percent: 0
    },
    {
        icon: 'assets/icons/marketgraph.png',
        title1: 'Wallet vs Market',
        title2: 'Feature',
        description1: 'This feature will show how the wallet performed relative to the market',
        description2: '',
        percent: 0
    },
    {
        icon: 'assets/icons/question.svg',
        title1: 'Mystery Feature',
        title2: '7',
        description1: 'This feature will be revealed when feature is completed',
        description2: '',
        percent: 0
    },

    {
        icon: 'assets/icons/bot.png',
        title1: 'Copy Trade Bot',
        title2: '',
        description1: 'An autonomous bot that will copy trade selected wallet/s',
        description2: '',
        percent: 0
    },
    {
        icon: 'assets/icons/scans.png',
        title1: 'AI Scans',
        title2: '',
        description1: 'This feature will be revealed when feature is completed',
        description2: 'ONLY AVAILABLE TO PREMIUM SUBSCRIPTIONS & X TOKEN SUPPLY HOLDERS',
        percent: 0

    },
    {
        icon: 'assets/icons/question.svg',
        title1: 'Mystery Feature',
        title2: '8',
        description1: 'Phone App for seamless use of Spectre on the go',
        description2: '',
        percent: 0
    },
    {
        icon: 'assets/icons/aibot.png',
        title1: 'AI Trading Bot',
        title2: 'Indicator',
        description1: 'An Autonomous Bot that will identify the best trades and trade for you(Will require X amount of Tokens for access)',
        description2: 'ONLY AVAILABLE TO PREMIUM SUBSCRIPTIONS & X TOKEN SUPPLY HOLDERS',
        percent: 0
    },
    {
        icon: 'assets/icons/question.svg',
        title1: 'Mystery Feature',
        title2: '9',
        description1: 'Phone App for seamless use of Spectre on the go',
        description2: '',
        percent: 0
    },
    {
        icon: 'assets/icons/phone.svg',
        title1: 'Phone App',
        title2: '',
        description1: 'Phone App for seamless use of Spectre on the go',
        description2: '',
        percent: 0
    },
].map((d, index) => ({ ...d, id: index + 6 }))