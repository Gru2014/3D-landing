interface RoadCardType {
    id: number
    title: string;
    questions: string[];
}

export const RoadCardList: RoadCardType[] = [
    {
        id: 1,
        title: 'Aug 23 - Apr 24',
        questions: [
            'Design & Develop Spectre Dashboard',
            'Design & Develop Spectre Website',
            'Back-test and Bug-Test Spectre Dashboard Data',
            'Implement Referral Rewards Program',
            'Launch Telegram, Twitter & Website'
        ]
    },
    {
        id: 2,
        title: 'May 24 - Jun 24',
        questions: [
            'Apply for IEO on Binance',
            'Implement New Feature: Profit/Loss Graph',
            'Implement New Feature: Wallet Finder Level 2',
            'Implement New Feature: Linked Wallets',
            'Implement New Feature: Mystery Feature 1',
            'Implement New Feature: Mystery Feature 2',
            'Implement New Feature: Mystery Feature 3'
        ]
    },
    {
        id: 3,
        title: 'Jul 24 - Aug 24',
        questions: [
            'Launch on Binance',
            'List on Coingecko',
            'List on CoinMarketCap',
            'Implement New Feature: Mystery Feature 4',
            'Implement New Feature: Mystery Feature 5',
            'Implement New Feature: Presale/Sniper Indicator',
            'Implement New Feature: Mystery Feature 6',
            'Implement New Feature: Wallet vs Market Graph',
            'Implement New Feature: Mystery Feature 7',
            'Implement New Feature: Copy Trade Bot'
        ]
    },
    {
        id: 4,
        title: 'Sep 24 - Dec 24',
        questions: [
            'Apply to List on Bybit',
            'Implement New Feature: AI Scans',
            'Implement New Feature: Mystery Feature 8',
            'Implement New Feature: AI Trading Bot',
            'Implement New Feature: Mystery Feature 9',
            'More Feature to be Added - Stay Tuned!'
        ]
    }
]