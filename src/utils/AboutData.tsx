interface AboutCardType {
  id: number;
  content: string,
  class: string
}

export const AboutData: AboutCardType[] = [
  {
    id: 1,
    content: 'Investigate OnChain Wallets',
    class: 'gradient-right',
  },
  {
    id: 2,
    content: 'Identify the Best Traders',
    class: 'single'
  },
  {
    id: 3,
    content: 'Add them to Your Watchlists',
    class: 'gradient-left'
  },
  {
    id: 4,
    content: 'Copy their Trades',
    class: 'gradient-right'
  },
  {
    id: 5,
    content: 'Let AI Trade for You (Coming Soon)',
    class: 'gradient-left'
  },
]