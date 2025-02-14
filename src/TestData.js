const testTweetData = [
  {
    url: "https://t.co/SDnmlLwwoK",
    username: "SpaceX",
    id: "1419738163988205575",
    profile_image_url:
      "https://pbs.twimg.com/profile_images/1082744382585856001/rH_k3PtQ.jpg",
    name: "SpaceX",
    author_id: "34743251",
    attachments: { media_keys: [Array], media: [Object] },
    public_metrics: {
      retweet_count: 7603,
      reply_count: 7641,
      like_count: 90136,
      quote_count: 763,
    },
    text: "100th build of a Raptor engine complete https://t.co/ymoJmV820Z",
    created_at: "Mon, 26 Jul 2021 19:15:30 GMT",
    entities: { urls: [Array] },
  },
  {
    url: "https://t.co/SDnmlLwwoK",
    username: "SpaceX",
    id: "1418667693016711170",
    profile_image_url:
      "https://pbs.twimg.com/profile_images/1082744382585856001/rH_k3PtQ.jpg",
    name: "SpaceX",
    author_id: "34743251",
    attachments: { media_keys: [Array], media: [Object] },
    entities: { annotations: [Array], urls: [Array] },
    public_metrics: {
      retweet_count: 6532,
      reply_count: 4550,
      like_count: 54015,
      quote_count: 686,
    },
    text: "NASA has selected Falcon Heavy to fly Europa Clipper! Launching in October 2024, this interplanetary mission will study whether Jupiter's icy moon Europa could have conditions suitable for life. https://t.co/KJt7Natn7i https://t.co/sfcdrcKE77",
    created_at: "Fri, 23 Jul 2021 20:21:50 GMT",
  },
  {
    url: "https://t.co/SDnmlLwwoK",
    username: "SpaceX",
    id: "1417813534482722823",
    profile_image_url:
      "https://pbs.twimg.com/profile_images/1082744382585856001/rH_k3PtQ.jpg",
    name: "SpaceX",
    author_id: "34743251",
    attachments: { media_keys: [Array], media: [Object] },
    public_metrics: {
      retweet_count: 3537,
      reply_count: 3287,
      like_count: 44564,
      quote_count: 198,
    },
    text: "Dragon has autonomously re-docked with the @Space_Station https://t.co/lEV6LCIhKK",
    entities: { mentions: [Array], urls: [Array] },
    created_at: "Wed, 21 Jul 2021 11:47:42 GMT",
  },
  {
    url: "https://t.co/SDnmlLwwoK",
    username: "SpaceX",
    id: "1417799454602657793",
    profile_image_url:
      "https://pbs.twimg.com/profile_images/1082744382585856001/rH_k3PtQ.jpg",
    name: "SpaceX",
    author_id: "34743251",
    entities: { annotations: [Array], mentions: [Array], urls: [Array] },
    public_metrics: {
      retweet_count: 355,
      reply_count: 192,
      like_count: 5475,
      quote_count: 9,
    },
    text: "Dragon has separated from the Harmony module's forward-facing port and moved away from the @Space_Station. Next stop, the space-facing port https://t.co/qV7AktWsqQ",
    created_at: "Wed, 21 Jul 2021 10:51:46 GMT",
  },
  {
    url: "https://t.co/SDnmlLwwoK",
    username: "SpaceX",
    id: "1417796407847645189",
    profile_image_url:
      "https://pbs.twimg.com/profile_images/1082744382585856001/rH_k3PtQ.jpg",
    name: "SpaceX",
    author_id: "34743251",
    entities: { annotations: [Array], mentions: [Array], urls: [Array] },
    public_metrics: {
      retweet_count: 340,
      reply_count: 165,
      like_count: 4666,
      quote_count: 15,
    },
    text: "Dragon is go for its port relocation flight around the @Space_Station https://t.co/Ug8s5obDyi",
    created_at: "Wed, 21 Jul 2021 10:39:39 GMT",
  },
  {
    url: "https://t.co/SDnmlLwwoK",
    username: "SpaceX",
    id: "1417669493665509377",
    profile_image_url:
      "https://pbs.twimg.com/profile_images/1082744382585856001/rH_k3PtQ.jpg",
    name: "SpaceX",
    author_id: "34743251",
    entities: { annotations: [Array], mentions: [Array] },
    public_metrics: {
      retweet_count: 411,
      reply_count: 0,
      like_count: 0,
      quote_count: 0,
    },
    text: "RT @Space_Station: NASA’s @SpaceX Crew-2 astronauts will relocate their Crew Dragon Endeavour spacecraft tomorrow morning live on @NASA TV…",
    created_at: "Wed, 21 Jul 2021 02:15:20 GMT",
  },
  {
    url: "https://t.co/SDnmlLwwoK",
    username: "SpaceX",
    id: "1417288642662338564",
    profile_image_url:
      "https://pbs.twimg.com/profile_images/1082744382585856001/rH_k3PtQ.jpg",
    name: "SpaceX",
    author_id: "34743251",
    attachments: { media_keys: [Array], media: [Object] },
    public_metrics: {
      retweet_count: 9573,
      reply_count: 4591,
      like_count: 94041,
      quote_count: 778,
    },
    text: "First static fire test of Super Heavy booster https://t.co/JtvGMfTgPj",
    created_at: "Tue, 20 Jul 2021 01:01:59 GMT",
    entities: { urls: [Array] },
  },
  {
    url: "https://t.co/SDnmlLwwoK",
    username: "SpaceX",
    id: "1417287229223833632",
    profile_image_url:
      "https://pbs.twimg.com/profile_images/1082744382585856001/rH_k3PtQ.jpg",
    name: "SpaceX",
    author_id: "34743251",
    entities: { annotations: [Array], mentions: [Array] },
    public_metrics: {
      retweet_count: 6382,
      reply_count: 0,
      like_count: 0,
      quote_count: 0,
    },
    text: "RT @elonmusk: Full test duration firing of 3 Raptors on Super Heavy Booster!",
    created_at: "Tue, 20 Jul 2021 00:56:22 GMT",
  },
  {
    url: "https://t.co/SDnmlLwwoK",
    username: "SpaceX",
    id: "1416089097278398465",
    profile_image_url:
      "https://pbs.twimg.com/profile_images/1082744382585856001/rH_k3PtQ.jpg",
    name: "SpaceX",
    author_id: "34743251",
    public_metrics: {
      retweet_count: 2068,
      reply_count: 0,
      like_count: 0,
      quote_count: 0,
    },
    text:
      "RT @inspiration4x: Generosity, Prosperity, Leadership, and Hope.\n" +
      "\n" +
      "All smiles for our #Inspiration4 crew during Dragon simulations at @Space…",
    entities: { mentions: [Array], hashtags: [Array] },
    created_at: "Fri, 16 Jul 2021 17:35:25 GMT",
  },
  {
    url: "https://t.co/SDnmlLwwoK",
    username: "SpaceX",
    id: "1415753188586762241",
    profile_image_url:
      "https://pbs.twimg.com/profile_images/1082744382585856001/rH_k3PtQ.jpg",
    name: "SpaceX",
    author_id: "34743251",
    entities: { annotations: [Array], mentions: [Array] },
    public_metrics: {
      retweet_count: 756,
      reply_count: 0,
      like_count: 0,
      quote_count: 0,
    },
    text: "RT @NASA: July 21 at 6:30am ET (10:30 UT), watch NASA’s @SpaceX Crew-2 astronauts relocate the Endeavor spacecraft at the @Space_Station, s…",
    created_at: "Thu, 15 Jul 2021 19:20:38 GMT",
  },
  {
    url: "https://t.co/SDnmlLwwoK",
    username: "SpaceX",
    id: "1413702720230285314",
    profile_image_url:
      "https://pbs.twimg.com/profile_images/1082744382585856001/rH_k3PtQ.jpg",
    name: "SpaceX",
    author_id: "34743251",
    entities: { annotations: [Array], mentions: [Array] },
    public_metrics: {
      retweet_count: 1173,
      reply_count: 346,
      like_count: 14208,
      quote_count: 89,
    },
    text: "Splashdown of Dragon confirmed, completing SpaceX’s 22nd cargo resupply mission to the @space_station!",
    created_at: "Sat, 10 Jul 2021 03:32:48 GMT",
  },
  {
    url: "https://t.co/SDnmlLwwoK",
    username: "SpaceX",
    id: "1413694328820490242",
    profile_image_url:
      "https://pbs.twimg.com/profile_images/1082744382585856001/rH_k3PtQ.jpg",
    name: "SpaceX",
    author_id: "34743251",
    public_metrics: {
      retweet_count: 1018,
      reply_count: 384,
      like_count: 18137,
      quote_count: 66,
    },
    text: "Dragon’s trunk has separated, de-orbit burn is complete, and nosecone is closed. Splashdown in ~30 minutes",
    created_at: "Sat, 10 Jul 2021 02:59:27 GMT",
  },
  {
    url: "https://t.co/SDnmlLwwoK",
    username: "SpaceX",
    id: "1413599363637682182",
    profile_image_url:
      "https://pbs.twimg.com/profile_images/1082744382585856001/rH_k3PtQ.jpg",
    name: "SpaceX",
    author_id: "34743251",
    attachments: { media_keys: [Array], media: [Object] },
    entities: { annotations: [Array], mentions: [Array], urls: [Array] },
    public_metrics: {
      retweet_count: 14613,
      reply_count: 0,
      like_count: 0,
      quote_count: 0,
    },
    text:
      "RT @elonmusk: Autonomous SpaceX droneship,\n" +
      "A Shortfall of Gravitas https://t.co/hNZ5U7nxUg",
    created_at: "Fri, 09 Jul 2021 20:42:06 GMT",
  },
  {
    url: "https://t.co/SDnmlLwwoK",
    username: "SpaceX",
    id: "1413148923296829452",
    profile_image_url:
      "https://pbs.twimg.com/profile_images/1082744382585856001/rH_k3PtQ.jpg",
    name: "SpaceX",
    author_id: "34743251",
    attachments: { media_keys: [Array], media: [Object] },
    entities: { annotations: [Array], mentions: [Array], urls: [Array] },
    public_metrics: {
      retweet_count: 944,
      reply_count: 191,
      like_count: 10920,
      quote_count: 49,
    },
    text: "Separation confirmed! Dragon is now performing departure burns to move away from the @space_station https://t.co/ReNTpeenaV",
    created_at: "Thu, 08 Jul 2021 14:52:13 GMT",
  },
  {
    url: "https://t.co/SDnmlLwwoK",
    username: "SpaceX",
    id: "1413140331533520898",
    profile_image_url:
      "https://pbs.twimg.com/profile_images/1082744382585856001/rH_k3PtQ.jpg",
    name: "SpaceX",
    author_id: "34743251",
    attachments: { media_keys: [Array], media: [Object] },
    public_metrics: {
      retweet_count: 823,
      reply_count: 142,
      like_count: 8800,
      quote_count: 37,
    },
    text: "Teams are currently GO for departure from the @space_station at 10:45 a.m. EDT today → https://t.co/regErh6cuH https://t.co/78CXcH7cKA",
    entities: { mentions: [Array], urls: [Array] },
    created_at: "Thu, 08 Jul 2021 14:18:04 GMT",
  },
  {
    url: "https://t.co/SDnmlLwwoK",
    username: "SpaceX",
    id: "1413135972473081876",
    profile_image_url:
      "https://pbs.twimg.com/profile_images/1082744382585856001/rH_k3PtQ.jpg",
    name: "SpaceX",
    author_id: "34743251",
    public_metrics: {
      retweet_count: 396,
      reply_count: 0,
      like_count: 0,
      quote_count: 0,
    },
    text: "RT @Space_Station: .@NASA TV is live now for the 10:35am ET undocking of the @SpaceX #CargoDragon today. It returns to Earth Friday packed…",
    entities: { mentions: [Array], hashtags: [Array] },
    created_at: "Thu, 08 Jul 2021 14:00:45 GMT",
  },
  {
    url: "https://t.co/SDnmlLwwoK",
    username: "SpaceX",
    id: "1413116238868492295",
    profile_image_url:
      "https://pbs.twimg.com/profile_images/1082744382585856001/rH_k3PtQ.jpg",
    name: "SpaceX",
    author_id: "34743251",
    public_metrics: {
      retweet_count: 574,
      reply_count: 0,
      like_count: 0,
      quote_count: 0,
    },
    text: "RT @NASA: Undocking of a @SpaceX cargo Dragon from the @Space_Station is planned for Thurs., July 8 at 10:35am ET (14:35 UT), with TV cover…",
    entities: { mentions: [Array] },
    created_at: "Thu, 08 Jul 2021 12:42:20 GMT",
  },
  {
    url: "https://t.co/SDnmlLwwoK",
    username: "SpaceX",
    id: "1412604876098441216",
    profile_image_url:
      "https://pbs.twimg.com/profile_images/1082744382585856001/rH_k3PtQ.jpg",
    name: "SpaceX",
    author_id: "34743251",
    public_metrics: {
      retweet_count: 439,
      reply_count: 0,
      like_count: 0,
      quote_count: 0,
    },
    text: "RT @Space_Station: The @SpaceX #CargoDragon undocking is delayed again due to forecast extreme weather. Meanwhile, the crew stayed busy tod…",
    entities: { mentions: [Array], hashtags: [Array] },
    created_at: "Wed, 07 Jul 2021 02:50:22 GMT",
  },
  {
    url: "https://t.co/SDnmlLwwoK",
    username: "SpaceX",
    id: "1412201586437214208",
    profile_image_url:
      "https://pbs.twimg.com/profile_images/1082744382585856001/rH_k3PtQ.jpg",
    name: "SpaceX",
    author_id: "34743251",
    public_metrics: {
      retweet_count: 556,
      reply_count: 0,
      like_count: 0,
      quote_count: 0,
    },
    text: "RT @Space_Station: The @SpaceX #CargoDragon undocking is now planned for no earlier than July 7 due to forecasted extreme weather off the c…",
    entities: { mentions: [Array], hashtags: [Array] },
    created_at: "Tue, 06 Jul 2021 00:07:50 GMT",
  },
  {
    url: "https://t.co/SDnmlLwwoK",
    username: "SpaceX",
    id: "1410978286868574214",
    profile_image_url:
      "https://pbs.twimg.com/profile_images/1082744382585856001/rH_k3PtQ.jpg",
    name: "SpaceX",
    author_id: "34743251",
    public_metrics: {
      retweet_count: 786,
      reply_count: 0,
      like_count: 0,
      quote_count: 0,
    },
    text:
      "RT @NASA: 🐉 A dragon is coming home and you can watch!  \n" +
      "\n" +
      "On Tues., July 6, @SpaceX’s Cargo Dragon spacecraft will depart the @Space_Statio…",
    entities: { mentions: [Array] },
    created_at: "Fri, 02 Jul 2021 15:06:52 GMT",
  },
  {
    url: "https://t.co/SDnmlLwwoK",
    username: "SpaceX",
    id: "1410595463661703170",
    profile_image_url:
      "https://pbs.twimg.com/profile_images/1082744382585856001/rH_k3PtQ.jpg",
    name: "SpaceX",
    author_id: "34743251",
    attachments: { media_keys: [Array], media: [Object] },
    public_metrics: {
      retweet_count: 9751,
      reply_count: 0,
      like_count: 0,
      quote_count: 0,
    },
    text: "RT @elonmusk: Super Heavy moves tomorrow https://t.co/qHG1SYO46S",
    entities: { mentions: [Array], urls: [Array] },
    created_at: "Thu, 01 Jul 2021 13:45:40 GMT",
  },
  {
    url: "https://t.co/SDnmlLwwoK",
    username: "SpaceX",
    id: "1410392725996904448",
    profile_image_url:
      "https://pbs.twimg.com/profile_images/1082744382585856001/rH_k3PtQ.jpg",
    name: "SpaceX",
    author_id: "34743251",
    attachments: { media_keys: [Array], media: [Object] },
    public_metrics: {
      retweet_count: 14222,
      reply_count: 3684,
      like_count: 94981,
      quote_count: 2486,
    },
    text: "Tracking footage of Falcon 9 landing on LZ-1 https://t.co/uCR2ZuDSG7",
    created_at: "Thu, 01 Jul 2021 00:20:04 GMT",
    entities: { urls: [Array] },
  },
  {
    url: "https://t.co/SDnmlLwwoK",
    username: "SpaceX",
    id: "1410342602893791234",
    profile_image_url:
      "https://pbs.twimg.com/profile_images/1082744382585856001/rH_k3PtQ.jpg",
    name: "SpaceX",
    author_id: "34743251",
    attachments: { media_keys: [Array], media: [Object] },
    public_metrics: {
      retweet_count: 1002,
      reply_count: 204,
      like_count: 9368,
      quote_count: 60,
    },
    text: "Deployment of 3 Starlink satellites confirmed https://t.co/MTRvmoXxyD",
    created_at: "Wed, 30 Jun 2021 21:00:54 GMT",
    entities: { urls: [Array] },
  },
  {
    url: "https://t.co/SDnmlLwwoK",
    username: "SpaceX",
    id: "1410342522820300802",
    profile_image_url:
      "https://pbs.twimg.com/profile_images/1082744382585856001/rH_k3PtQ.jpg",
    name: "SpaceX",
    author_id: "34743251",
    public_metrics: {
      retweet_count: 354,
      reply_count: 77,
      like_count: 6684,
      quote_count: 23,
    },
    text: "Rideshare deployment sequence complete",
    created_at: "Wed, 30 Jun 2021 21:00:34 GMT",
  },
  {
    url: "https://t.co/SDnmlLwwoK",
    username: "SpaceX",
    id: "1410335220167938048",
    profile_image_url:
      "https://pbs.twimg.com/profile_images/1082744382585856001/rH_k3PtQ.jpg",
    name: "SpaceX",
    author_id: "34743251",
    public_metrics: {
      retweet_count: 335,
      reply_count: 84,
      like_count: 5656,
      quote_count: 14,
    },
    text: "Rideshare deployment sequence has begun",
    created_at: "Wed, 30 Jun 2021 20:31:33 GMT",
  },
  {
    url: "https://t.co/SDnmlLwwoK",
    username: "SpaceX",
    id: "1410323594710716416",
    profile_image_url:
      "https://pbs.twimg.com/profile_images/1082744382585856001/rH_k3PtQ.jpg",
    name: "SpaceX",
    author_id: "34743251",
    public_metrics: {
      retweet_count: 601,
      reply_count: 123,
      like_count: 9804,
      quote_count: 50,
    },
    text: "Since its first flight 1 year ago today, this Falcon 9 first stage has completed 8 launches and landings",
    created_at: "Wed, 30 Jun 2021 19:45:22 GMT",
  },
  {
    url: "https://t.co/SDnmlLwwoK",
    username: "SpaceX",
    id: "1410322285077012481",
    profile_image_url:
      "https://pbs.twimg.com/profile_images/1082744382585856001/rH_k3PtQ.jpg",
    name: "SpaceX",
    author_id: "34743251",
    attachments: { media_keys: [Array], media: [Object] },
    entities: { annotations: [Array], urls: [Array] },
    public_metrics: {
      retweet_count: 8578,
      reply_count: 2335,
      like_count: 72279,
      quote_count: 1483,
    },
    text: "Falcon 9’s first stage has landed on Landing Zone 1! https://t.co/26M9Ptomg7",
    created_at: "Wed, 30 Jun 2021 19:40:09 GMT",
  },
  {
    url: "https://t.co/SDnmlLwwoK",
    username: "SpaceX",
    id: "1410320177699328000",
    profile_image_url:
      "https://pbs.twimg.com/profile_images/1082744382585856001/rH_k3PtQ.jpg",
    name: "SpaceX",
    author_id: "34743251",
    attachments: { media_keys: [Array], media: [Object] },
    public_metrics: {
      retweet_count: 4315,
      reply_count: 1556,
      like_count: 42333,
      quote_count: 325,
    },
    text: "Liftoff! https://t.co/0icqQUWNSH",
    created_at: "Wed, 30 Jun 2021 19:31:47 GMT",
    entities: { urls: [Array] },
  },
  {
    url: "https://t.co/SDnmlLwwoK",
    username: "SpaceX",
    id: "1410317115072991236",
    profile_image_url:
      "https://pbs.twimg.com/profile_images/1082744382585856001/rH_k3PtQ.jpg",
    name: "SpaceX",
    author_id: "34743251",
    entities: { annotations: [Array], urls: [Array] },
    public_metrics: {
      retweet_count: 2470,
      reply_count: 1054,
      like_count: 16912,
      quote_count: 174,
    },
    text: "Watch Falcon 9 launch 88 spacecraft to orbit → https://t.co/bJFjLCzWdK https://t.co/y3JRM5cDd3",
    created_at: "Wed, 30 Jun 2021 19:19:37 GMT",
  },
  {
    url: "https://t.co/SDnmlLwwoK",
    username: "SpaceX",
    id: "1410299468558204931",
    profile_image_url:
      "https://pbs.twimg.com/profile_images/1082744382585856001/rH_k3PtQ.jpg",
    name: "SpaceX",
    author_id: "34743251",
    public_metrics: {
      retweet_count: 332,
      reply_count: 66,
      like_count: 2822,
      quote_count: 48,
    },
    text: "Now targeting 3:31 p.m. EDT for launch due to weather",
    created_at: "Wed, 30 Jun 2021 18:09:30 GMT",
  },
];

const testFavorites = [
  {
    id: "34743251",
    profile_image_url:
      "https://pbs.twimg.com/profile_images/1082744382585856001/rH_k3PtQ.jpg",
    location: "Hawthorne, CA",
    name: "SpaceX",
    username: "SpaceX",
    public_metrics: {
      followers_count: 17584392,
      following_count: 100,
      tweet_count: 5361,
      listed_count: 32035,
    },
    author_id: "34743251",
  },
  {
    id: "815156080116428800",
    profile_image_url:
      "https://pbs.twimg.com/profile_images/1284506575047188481/hSaq8LAu.jpg",
    location: "Belarus",
    name: "VIRPIL Controls",
    username: "VIRPILControls",
    public_metrics: {
      followers_count: 4137,
      following_count: 30,
      tweet_count: 518,
      listed_count: 17,
    },
    author_id: "815156080116428800",
  },
  {
    id: "108614450",
    profile_image_url:
      "https://pbs.twimg.com/profile_images/1002538079972978688/4dGxNAuJ.jpg",
    name: "Eagle Dynamics",
    username: "eagledynamics",
    public_metrics: {
      followers_count: 12723,
      following_count: 20,
      tweet_count: 826,
      listed_count: 104,
    },
    author_id: "108614450",
  },
  {
    id: "44682474",
    profile_image_url:
      "https://pbs.twimg.com/profile_images/1272870939517165569/ArOkskTP.jpg",
    location: "Austin, TX",
    name: "NI (National Instruments)",
    username: "NIglobal",
    public_metrics: {
      followers_count: 27180,
      following_count: 2951,
      tweet_count: 8373,
      listed_count: 548,
    },
    author_id: "44682474",
  },
  {
    id: "6446742",
    profile_image_url:
      "https://pbs.twimg.com/profile_images/1419117874916986882/MXev-inP.jpg",
    location: "Worldwide",
    name: "UFC",
    username: "ufc",
    public_metrics: {
      followers_count: 8692851,
      following_count: 644,
      tweet_count: 114691,
      listed_count: 14270,
    },
    author_id: "6446742",
  },
];

const testUser = [
  {
    name: "SpaceX",
    username: "SpaceX",
    id: "1419738163988205575",
    profile_image_url:
      "https://pbs.twimg.com/profile_images/1082744382585856001/rH_k3PtQ.jpg",
    url: "https://t.co/SDnmlLwwoK",
    public_metrics: {
      retweet_count: 7603,
      reply_count: 7641,
      like_count: 90149,
      quote_count: 763,
    },
    attachments: { media_keys: [Array], media: [Object] },
    author_id: "34743251",
    text: "100th build of a Raptor engine complete https://t.co/ymoJmV820Z",
    entities: { urls: [Array] },
    created_at: "Mon, 26 Jul 2021 19:15:30 GMT",
  },
];
