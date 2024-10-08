import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "stranger",
    pageSize: 18,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  //   sampleArticles = [
  //     {
  //       source: {
  //         id: "the-washington-post",
  //         name: "Sample: The Washington Post",
  //       },
  //       author:
  //         "Amy B Wang, Azi Paybarah, Patrick Svitek, Maegan Vazquez, Lenny Bronner, Luis Melgar, Diane Napolitano, Kati Perry, Annie Gowen, Toluse Olorunnipa, Amy Gardner, Hannah Knowles, Lori Rozsa, Aaron Blake, Philip Bump, Jacqueline Alemany, Marianna Sotomayor, Isaac Arnsdorf, Marianne LeVine, Ashley Parker, Tyler Pager, Dan Balz, Scott Clement, Emily Guskin, Glenn Kessler, Rachel Lerman, Julie Zauzmer Weil, Emma Kumer, Clara Ence Morse, Josh Dawsey",
  //       title:
  //         "Election 2024 live updates: Oprah Winfrey to join Harris in Michigan; Trump to pledge to fight antisemitism - The Washington Post",
  //       description:
  //         "Get the latest news from the 2024 campaign trail in the contest between Vice President Kamala Harris and former president Donald Trump.",
  //       url: "https://www.washingtonpost.com/elections/2024/09/19/2024-election-campaign-updates-harris-trump/",
  //       urlToImage:
  //         "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/3G7Z4NSTLQJEL26XACBPUVHJDU.jpg&w=1440",
  //       publishedAt: "2024-09-19T18:02:06Z",
  //       content: null,
  //     },
  //     {
  //       source: {
  //         id: "reuters",
  //         name: "Reuters",
  //       },
  //       author: "Barbara Erling",
  //       title:
  //         "Flood-hit central Europe will get billions in EU aid, von der Leyen promises - Reuters",
  //       description:
  //         "The European Union will make billions of euros available to help central Europe recover from severe floods, European Commission President Ursula von der Leyen said on Thursday, as she pledged support for regions that have been devastated by the deluge.",
  //       url: "https://www.reuters.com/world/europe/polands-third-largest-city-braces-peaking-floods-2024-09-19/",
  //       urlToImage:
  //         "https://www.reuters.com/resizer/v2/23QZXIXDCNKOJP6VBZKGGFTIP4.jpg?auth=d5353bc16c6a1c83125db79d80a547f94cd582dcbab6e103f8881ff66d6902e7&height=1005&width=1920&quality=80&smart=true",
  //       publishedAt: "2024-09-19T17:56:11Z",
  //       content:
  //         "WROCLAW, Poland, Sept 19 (Reuters) - The European Union will make billions of euros available to help central Europe recover from severe floods, European Commission President Ursula von der Leyen sai… [+3919 chars]",
  //     },
  //     {
  //       source: {
  //         id: "nbc-news",
  //         name: "NBC News",
  //       },
  //       author: "Daniel Barnes, Dareh Gregorian",
  //       title:
  //         "Alaska man charged with making death threats against Supreme Court justices - NBC News",
  //       description:
  //         "An Alaska man has been indicted on charges that he sent racist and violent threats against six Supreme Court justices and their family members.",
  //       url: "https://www.nbcnews.com/politics/supreme-court/alaska-man-charged-making-death-threats-supreme-court-justices-rcna171836",
  //       urlToImage:
  //         "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-09/240919-supreme-court-building-se-1245p-da4f8a.jpg",
  //       publishedAt: "2024-09-19T17:53:20Z",
  //       content:
  //         "An Alaska man has been indicted on charges that he sent racist and violent threats against six Supreme Court justices and their family members.\r\nFederal prosecutors in Anchorage are asking a judge to… [+2074 chars]",
  //     },
  //     {
  //       source: {
  //         id: "nbc-news",
  //         name: "NBC News",
  //       },
  //       author: "Yuliya Talmazan, Doha Madani",
  //       title:
  //         "Why did Israel blow up Hezbollah pagers and walkie-talkies — and what might happen next? - NBC News",
  //       description:
  //         "A region fearing all-out war may have been taken to the brink by a legion of pagers and walkie-talkies.",
  //       url: "https://www.nbcnews.com/news/world/israel-hezbollah-pagers-explosions-what-now-rcna171602",
  //       urlToImage:
  //         "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-09/240918-lebanon-pager-explosion-al-0730-9343fe.jpg",
  //       publishedAt: "2024-09-19T17:51:00Z",
  //       content:
  //         "A region fearing all-out war may have been taken to the brink by a legion of pagers and walkie-talkies.\r\nWaves of explosions in supermarkets and streets across Lebanon in successive attacks over two … [+8187 chars]",
  //     },
  //     {
  //       source: {
  //         id: "reuters",
  //         name: "Reuters",
  //       },
  //       author: "Saqib Ahmed, Suzanne McGee, Carolina Mandl",
  //       title:
  //         "Market calm yields to stock surge as traders cheer Fed rate cut - Reuters",
  //       description:
  //         "The S&P 500 was up 1.3% on Thursday, hitting a fresh intraday high, a sharp contrast to the day before.",
  //       url: "https://www.reuters.com/markets/us/fed-outsized-rate-cut-draws-muted-reaction-calm-may-not-last-2024-09-19/",
  //       urlToImage:
  //         "https://www.reuters.com/resizer/v2/5YUATBCCL5L5FBRTYGNGCM25EA.jpg?auth=2b5eb938aca0a3672bca58b94957227a30806da02b227dbfac2af38ebf0e0b9b&height=1005&width=1920&quality=80&smart=true",
  //       publishedAt: "2024-09-19T17:33:14Z",
  //       content: null,
  //     },
  //     {
  //       source: {
  //         id: "espn",
  //         name: "ESPN",
  //       },
  //       author: "Dave Wilson",
  //       title: "Horns' Manning to get 1st start as Ewers recovers - ESPN",
  //       description:
  //         'Texas coach Steve Sarkisian said injured QB Quinn Ewers "has made great strides," but he\'ll rest for at least one more week as Arch Manning gets his first start.',
  //       url: "https://www.espn.com/college-football/story/_/id/41329023/arch-manning-get-first-start-texas-quinn-ewers-recovers",
  //       urlToImage:
  //         "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0917%2Fr1387978_1296x729_16%2D9.jpg",
  //       publishedAt: "2024-09-19T17:33:00Z",
  //       content:
  //         'With Quinn Ewers still recovering from an oblique injury, Arch Manning will make his first start for No. 1 Texas on Saturday night against UL Monroe, Longhorns coach Steve Sarkisian said Thursday.\r\n"… [+3533 chars]',
  //     },
  //     {
  //       source: {
  //         id: null,
  //         name: "GameSpot",
  //       },
  //       author: "Darryn Bonthuys",
  //       title:
  //         "Sony Announces PlayStation 30th-Anniversary Collection Of Nostalgic Consoles And Controllers - GameSpot",
  //       description:
  //         "The 30th-anniversary of PlayStation is almost here, and Sony is celebrating with a limited-edition line of consoles and accessories.",
  //       url: "https://www.gamespot.com/gallery/sony-announces-playstation-30th-anniversary-collection-of-nostalgic-consoles-and-controllers/2900-5784/",
  //       urlToImage:
  //         "https://www.gamespot.com/a/uploads/screen_kubrick/1601/16018044/4369834-ps530thanniversary%2817%29.jpg",
  //       publishedAt: "2024-09-19T17:29:37Z",
  //       content:
  //         "GameSpot may receive revenue from affiliate and advertising partnerships for sharing this content and from purchases through links.",
  //     },
  //     {
  //       source: {
  //         id: "fox-news",
  //         name: "Fox News",
  //       },
  //       author: "Stephen Sorace",
  //       title:
  //         "Los Angeles County reports dengue fever cluster acquired from local mosquitoes - Fox News",
  //       description:
  //         "At least three cases of dengue fever have been reported in residents bitten by local mosquitoes in the Baldwin Park neighborhood east of downtown Los Angeles.",
  //       url: "https://www.foxnews.com/health/los-angeles-county-reports-dengue-fever-cluster-acquired-local-mosquitoes",
  //       urlToImage:
  //         "https://static.foxnews.com/foxnews.com/content/uploads/2024/07/iStock-511984734.jpg",
  //       publishedAt: "2024-09-19T17:23:00Z",
  //       content:
  //         'Health officials in Los Angeles County on Wednesday warned of an "unprecedented" rise in dengue fever among residents who have not traveled out of the country.\r\nAt least three cases of dengue have be… [+1866 chars]',
  //     },
  //     {
  //       source: {
  //         id: null,
  //         name: "WLWT Cincinnati",
  //       },
  //       author: "Matthew Dietz",
  //       title:
  //         "KSP: Body found near site of Kentucky interstate shooting believed to be suspect - WLWT Cincinnati",
  //       description:
  //         "Officials have discovered a body near the site of an interstate shooting in Kentucky that left multiple people injured.",
  //       url: "https://www.wlwt.com/article/kentucky-interstate-shooting-body-found-laurel-county/62266770",
  //       urlToImage:
  //         "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/joseph-couch-manhunt-66e9ab3056cab.png?crop=0.995xw:1.00xh;0.00326xw,0&resize=1200:*",
  //       publishedAt: "2024-09-19T16:48:00Z",
  //       content:
  //         "LAUREL COUNTY, Ky. —Officials have discovered a body near the site of an interstate shooting in Kentucky that left multiple people injured. \r\nAccording to Kentucky State Police and the Laurel County … [+2500 chars]",
  //     },
  //     {
  //       source: {
  //         id: "cnn",
  //         name: "CNN",
  //       },
  //       author: "Jessie Yeung",
  //       title:
  //         "Israel has signaled readiness for war with Hezbollah after twin explosive attacks. Here’s what we know - CNN",
  //       description:
  //         "Lebanon is reeling after facing deadly back-to-back attacks targeting Hezbollah members – with pagers simultaneously exploding across the country on Tuesday, then walkie-talkies detonating in a similar fashion on Wednesday.",
  //       url: "https://www.cnn.com/2024/09/19/middleeast/lebanon-pager-walkie-talkie-attacks-explainer-intl-hnk/index.html",
  //       urlToImage:
  //         "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2172012029.jpg?c=16x9&q=w_800,c_fill",
  //       publishedAt: "2024-09-19T16:40:00Z",
  //       content:
  //         "Lebanon is reeling after facing deadly back-to-back attacks targeting Hezbollah members  with pagers simultaneously exploding across the country on Tuesday, then walkie-talkies detonating in a simila… [+8428 chars]",
  //     },
  //     {
  //       source: {
  //         id: null,
  //         name: "Rolling Stone",
  //       },
  //       author: "Kory Grow",
  //       title:
  //         "Chester Bennington’s Mom: ‘I Feel Betrayed’ by Linkin Park - Rolling Stone",
  //       description:
  //         "Chester Bennington's mother says she was promised a heads-up on any Linkin Park reunion, but she was not told about new singer Emily Armstrong",
  //       url: "http://www.rollingstone.com/music/music-features/linkin-park-chester-bennington-mother-1235104752/",
  //       urlToImage:
  //         "https://www.rollingstone.com/wp-content/uploads/2024/09/chester-bennington-mom-comments.jpg?w=1600&h=900&crop=1",
  //       publishedAt: "2024-09-19T16:04:41Z",
  //       content:
  //         "Earlier this month,Linkin Park announced it had officially reunited seven years after the death of singer Chester Bennington. A new vocalist, Dead Sara’s Emily Armstrong, would be singing Bennington’… [+5307 chars]",
  //     },
  //     {
  //       source: {
  //         id: null,
  //         name: "NPR",
  //       },
  //       author: "",
  //       title:
  //         "Bomb threats followed Trump's false claims about Springfield. Some Haitians may leave - NPR",
  //       description:
  //         "A Haitian community leader in Springfield, Ohio tells Morning Edition that some newcomers are pondering leaving after a string of bomb threats made to the city after former President Trump elevated debunked claims about new migrants during presidential debate…",
  //       url: "https://www.npr.org/2024/09/19/nx-s1-5114047/springfield-ohio-haitian-migrants-trump-safety-concerns",
  //       urlToImage:
  //         "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/3900x2194+0+172/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F84%2F35%2F52dc654541a1abefce900d49bfcc%2Fap24261670034438.jpg",
  //       publishedAt: "2024-09-19T15:52:54Z",
  //       content:
  //         "Many in Springfield, Ohio have felt uneasy for the past week.\r\nA string of bomb threats shut down city and school buildings. Public events have been canceled. And state troopers have been sent in to … [+5954 chars]",
  //     },
  //     {
  //       source: {
  //         id: "cnn",
  //         name: "CNN",
  //       },
  //       author: "Lisa Respers France",
  //       title:
  //         "Lady Gaga explains why she didn’t bother to address the rumor she is a man - CNN",
  //       description:
  //         "Lady Gaga was not born the way some speculated years ago, and now she’s reflecting on her careful response to those dated rumors.",
  //       url: "https://www.cnn.com/2024/09/19/entertainment/lady-gaga-rumors-she-is-a-man/index.html",
  //       urlToImage:
  //         "https://media.cnn.com/api/v1/images/stellar/prod/2024-09-04t105806z-709440384-rc2mt9a23l6e-rtrmadp-3-filmfestival-venice-joker-folie-a-deux.JPG?c=16x9&q=w_800,c_fill",
  //       publishedAt: "2024-09-19T15:46:00Z",
  //       content:
  //         "Lady Gaga was not born the way some speculated years ago, and now shes reflecting on her careful response to those dated rumors.\r\nIn an appearance on Netflixs Whats Next? The Future with Bill Gates, … [+1591 chars]",
  //     },
  //     {
  //       source: {
  //         id: null,
  //         name: "Fox Business",
  //       },
  //       author: "Kristen Altus",
  //       title:
  //         "Fed decision opens the real estate floodgates after four years - Fox Business",
  //       description:
  //         "\"Everybody's happy\" about the Federal Reserve's rate cut — at least in real estate — potentially opening the floodgates to more housing inventory and price competition.",
  //       url: "https://www.foxbusiness.com/media/fed-decision-opens-real-estate-floodgates-after-four-years",
  //       urlToImage:
  //         "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2024/09/0/0/POWELL-FED-REAL-ESTATE-GETTY.jpg?ve=1&tl=1",
  //       publishedAt: "2024-09-19T15:41:00Z",
  //       content:
  //         "The Federal Reserve's 50 basis point rate cut has ignited market chatter among America's real estate leaders who think this could be the start of a buying and selling frenzy.\r\n\"Everybody's happy. It … [+4726 chars]",
  //     },
  //     {
  //       source: {
  //         id: "the-washington-post",
  //         name: "The Washington Post",
  //       },
  //       author: "Joel Achenbach",
  //       title:
  //         "Scientists again link covid pandemic origin to Wuhan market animals - The Washington Post",
  //       description:
  //         "Genetic evidence from a new report suggests the coronavirus pandemic most likely spilled over from animals in the Wuhan market.",
  //       url: "https://www.washingtonpost.com/science/2024/09/19/covid-origin-wuhan-market/",
  //       urlToImage:
  //         "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/P53HIIW6WEI6XIT7RMUUSMHJLM.jpg&w=1440",
  //       publishedAt: "2024-09-19T15:40:57Z",
  //       content:
  //         "An international team of scientists published a peer-reviewed paper Thursday saying genetic evidence indicates the coronavirus pandemic most likely originated with a natural spillover from an animal … [+7833 chars]",
  //     },
  //     {
  //       source: {
  //         id: null,
  //         name: "BBC News",
  //       },
  //       author: null,
  //       title:
  //         "Palworld: Nintendo sues 'Pokémon with guns' video game firm - BBC.com",
  //       description:
  //         'The Japanese company alleges that the Palworld video game "infringes multiple patent rights".',
  //       url: "https://www.bbc.com/news/articles/c89lx7xdwd5o",
  //       urlToImage:
  //         "https://ichef.bbci.co.uk/news/1024/branded_news/2e15/live/fd210320-7638-11ef-813d-e5d346cfb7fa.jpg",
  //       publishedAt: "2024-09-19T15:32:10Z",
  //       content:
  //         "Nintendo and its partner The Pokémon Company have filed a legal case against the maker of the hit survival adventure game Palworld over alleged patent infringement.\r\nPalworld quickly earned the nickn… [+2984 chars]",
  //     },
  //     {
  //       source: {
  //         id: null,
  //         name: "Vibe",
  //       },
  //       author: "Amber Corrine",
  //       title:
  //         "Diddy’s Frantic Text To Cassie After Hotel Assault Read Aloud During Bail Appeal - Yahoo Entertainment",
  //       description:
  //         "The music mogul attacked Cassie in 2016, as seen in footage revealed earlier this year.",
  //       url: "https://www.vibe.com/news/entertainment/diddys-text-to-cassie-hotel-assault-bail-appeal-1234923950/",
  //       urlToImage:
  //         "https://s.yimg.com/ny/api/res/1.2/DlXXBDbrVZobJA..whGsLQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02Nzc-/https://media.zenfs.com/en/vibe_128/be87edec8ab866eb48567cf6aa0ccd5d",
  //       publishedAt: "2024-09-19T15:00:18Z",
  //       content:
  //         "The contents of text messages sent to Cassie from Sean Diddy Combs following his 2016 hotel assault of the singer were revealed during the music moguls most recent bail appeal hearing.\r\nOn Wednesday … [+2795 chars]",
  //     },
  //     {
  //       source: {
  //         id: null,
  //         name: "Variety",
  //       },
  //       author: "Daniel D'Addario",
  //       title:
  //         "Sebastian Stan Tells All: Becoming Donald Trump, Gaining 15 Pounds and Starring in 2024’s Most Controversial Movie - Variety",
  //       description:
  //         "Sebastian Stan unpacks his transformation into Donald Trump, from gaining weight to watching 500-plus videos of the former president.",
  //       url: "https://variety.com/2024/film/news/sebastian-stan-donald-trump-the-apprentice-weight-gain-1236148614/",
  //       urlToImage:
  //         "https://variety.com/wp-content/uploads/2024/09/Sebastian-Stan-Variety-Cover-Story-1.jpg?crop=94px%2C83px%2C1792px%2C1006px&resize=1000%2C563",
  //       publishedAt: "2024-09-19T15:00:00Z",
  //       content:
  //         "It started with the most famous voice on the planet, the one that just won’t shut up. \r\nSebastian Stan, in real life, sounds very little like Donald Trump, whom he’s playing in the new film “The Appr… [+22601 chars]",
  //     },
  //     {
  //       source: {
  //         id: null,
  //         name: "Space.com",
  //       },
  //       author: "Robert Lea",
  //       title:
  //         "James Webb Space Telescope witnesses a 'smiling' galactic collision (images) - Space.com",
  //       description:
  //         "It looks like the colliding galaxies of Arp 107 couldn't be happier about their merger.",
  //       url: "https://www.space.com/james-webb-space-telescope-smiling-galactic-collision",
  //       urlToImage:
  //         "https://cdn.mos.cms.futurecdn.net/Yz4tn6GMqHLdqMmG8z3dqi-1200-80.png",
  //       publishedAt: "2024-09-19T14:59:33Z",
  //       content:
  //         "Using the James Webb Space Telescope, astronomers have imaged a surprisingly merry-looking collision between galaxies.\r\nThe merger of the large spiral galaxy and the smaller elliptical galaxy, collec… [+3144 chars]",
  //     },
  //     {
  //       source: {
  //         id: "the-hill",
  //         name: "The Hill",
  //       },
  //       author: "Brad Dress",
  //       title:
  //         "Israeli police say they thwarted Iranian assassination attempt - The Hill",
  //       description:
  //         "Israeli police said Thursday that agents thwarted a recent Iranian assassination attempt, arresting an individual suspected of receiving money from Iran to coordinate an attack on top officials, including Israeli Prime Minister Benjamin Netanyahu. The civilia…",
  //       url: "https://thehill.com/policy/defense/4888229-israel-iran-assassination-attempt-thwarted/",
  //       urlToImage:
  //         "https://thehill.com/wp-content/uploads/sites/2/2024/09/AP23145545387702-e1726757576516.jpg?w=1280",
  //       publishedAt: "2024-09-19T14:53:00Z",
  //       content:
  //         "Skip to content\r\nIsraeli police said Thursday that agents thwarted a recent Iranian assassination attempt, arresting an individual suspected of receiving money from Iran to coordinate an attack on to… [+2157 chars]",
  //     },
  //   ];

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0
    };
    document.title = `${this.capitalize(this.props.category)} - NewsRaptor`;
  }

  capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  async updateNews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(50);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateNews();
    // let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({loading: true})
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({
    //     articles: parsedData.articles,
    //     totalResults: parsedData.totalResults,
    //     loading: false
    // })
  }

  // not needed as we added key attribute in News component in App.js

  //   async componentDidUpdate(prevProps) {
  //     if (this.props.category !== prevProps.category) {
  //         let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
  //         this.setState({loading: true})
  //         let data = await fetch(url);
  //         let parsedData = await data.json();
  //         // this.setState({articles: parsedData.articles.length>=1?parsedData.articles:this.sampleArticles})
  //         this.setState({
  //             articles: parsedData.articles,
  //             totalResults: parsedData.totalResults,
  //             loading: false
  //         })
  //     }
  //   }

  handlePreviousClick = async () => {
    this.updateNews();
    this.setState({ page: this.state.page - 1 });

    // let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading: true})
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({
    //     page: this.state.page-1,
    //     articles: parsedData.articles,
    //     loading: false
    // })
  };

  handleNextClick = async () => {
    if (
      !(
        this.state.page + 1 >
        Math.ceil(this.state.totalResults / this.props.pageSize)
      )
    ) {
      this.updateNews();
      this.setState({ page: this.state.page + 1 });

      //     let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      //     this.setState({loading: true})
      //     let data = await fetch(url);
      //     let parsedData = await data.json();
      //     this.setState( {
      //         page: this.state.page +1,
      //         articles: parsedData.articles,
      //         loading: false
      //     })
    }
  };

  fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({ page: this.state.page + 1 });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    })
  }

  render() {
    return (
      <>
        <h1 className={`text-center text-${ this.props.mode === "light" ? "dark" : "light"}`}
          style={{ margin: "35px 0px", marginTop: '90px' }}
        >
          {" "}
          NewsRaptor - Top {this.capitalize(this.props.category)} Headlines
        </h1>

        {this.state.loading && <Spinner/>}


          <InfiniteScroll dataLength={this.state.articles.length} next={this.fetchMoreData} 
            hasMore={this.state.articles.length !== this.state.totalResults} loader={<Spinner/>}>
                <div className="container">    
                    <div className="row">
                        {this.state.articles.map((element) => {
                            return (<div key={element.id + element.url + element.title + element.publishedAt} className="col-md-4">
                                <NewsItem
                                    title={element.title ? element.title.slice(0, 45) : ""}
                                    description={element.description ? element.description.slice(0, 88) : ""}
                                    newsUrl={element.url}
                                    imageUrl={element.urlToImage}
                                    author={element.author}
                                    date={element.publishedAt}
                                    source={element.source.name}
                                />
                                </div>
                            );
                        })}
                    </div>
                </div>
          </InfiniteScroll>
          {/* <div className="col-md-4">
            <NewsItem
              title="myTiTle1"
              description="myDescription1"
              newsUrl="TODO"
              imageUrl="https://compote.slate.com/images/22ce4663-4205-4345-8489-bc914da1f272.jpeg?crop=1560%2C1040%2Cx0%2Cy0&width=1280"
            /> */}
    
        {/* <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePreviousClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
      </>
    );
  }
}

export default News;
