interface TierType {
  percent: number,
  userNum: number
}

interface TitleType {
  title: string,
  icon: string
}

export const TierTitleData: TitleType[] = [
  {
    title: 'Tier 1',
    icon: 'tier1.svg'
  },
  {
    title: 'Tier 2',
    icon: 'tier2.svg'
  },
  {
    title: 'Tier 3',
    icon: 'tier3.svg'
  }
]

export const TierContentData: TierType[] = [
  {
    percent: 10,
    userNum: 1
  },
  {
    percent: 30,
    userNum: 5
  },
  {
    percent: 50,
    userNum: 10
  }
]